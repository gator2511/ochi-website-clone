import { getDatabase } from "@netlify/database";
import type { Config, Context } from "@netlify/functions";
import {
	DeleteObjectCommand,
	GetObjectCommand,
	HeadObjectCommand,
	PutObjectCommand,
	S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
	createHash,
	randomBytes,
	scryptSync,
	timingSafeEqual,
} from "node:crypto";

const SESSION_COOKIE = "__Host-gt_portal_session";
const SESSION_HOURS = 8;
const MAX_FILE_BYTES = 50 * 1024 * 1024;
const CONSENT_VERSION = "2026-08-31-v1";
const ADMIN_HEADER = "x-portal-admin-secret";

const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
	Response.json(data, {
		status,
		headers: {
			"Cache-Control": "no-store, private",
			"X-Content-Type-Options": "nosniff",
			...headers,
		},
	});

function normaliseEmail(value: unknown) {
	return String(value || "").trim().toLowerCase();
}

function cleanText(value: unknown, maxLength = 5000) {
	return String(value || "").trim().slice(0, maxLength);
}

function sha256(value: string) {
	return createHash("sha256").update(value).digest("hex");
}

function hashAccessCode(code: string) {
	const salt = randomBytes(16).toString("hex");
	const hash = scryptSync(code, salt, 64).toString("hex");
	return `scrypt$${salt}$${hash}`;
}

function verifyAccessCode(code: string, stored: string) {
	try {
		const [scheme, salt, expectedHex] = stored.split("$");
		if (scheme !== "scrypt" || !salt || !expectedHex) return false;
		const actual = scryptSync(code, salt, 64);
		const expected = Buffer.from(expectedHex, "hex");
		return actual.length === expected.length && timingSafeEqual(actual, expected);
	} catch {
		return false;
	}
}

function safeCompare(a: string, b: string) {
	const left = Buffer.from(sha256(a));
	const right = Buffer.from(sha256(b));
	return timingSafeEqual(left, right);
}

function parseCookies(req: Request) {
	const value = req.headers.get("cookie") || "";
	return Object.fromEntries(
		value
			.split(";")
			.map((part) => part.trim())
			.filter(Boolean)
			.map((part) => {
				const index = part.indexOf("=");
				return index === -1 ? [part, ""] : [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
			})
	);
}

function makeSessionCookie(token: string) {
	const maxAge = SESSION_HOURS * 60 * 60;
	return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

function clearSessionCookie() {
	return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

function generateAccessCode() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const bytes = randomBytes(12);
	const chars = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]);
	return `GTM-${chars.slice(0, 4).join("")}-${chars.slice(4, 8).join("")}-${chars.slice(8, 12).join("")}`;
}

function storageConfig() {
	const endpoint = process.env.PORTAL_STORAGE_ENDPOINT?.trim();
	const bucket = process.env.PORTAL_STORAGE_BUCKET?.trim();
	const accessKeyId = process.env.PORTAL_STORAGE_ACCESS_KEY_ID?.trim();
	const secretAccessKey = process.env.PORTAL_STORAGE_SECRET_ACCESS_KEY?.trim();
	const region = process.env.PORTAL_STORAGE_REGION?.trim() || "auto";

	if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) return null;

	return {
		bucket,
		client: new S3Client({
			region,
			endpoint,
			credentials: { accessKeyId, secretAccessKey },
		}),
	};
}

function sanitiseFileName(name: string) {
	const cleaned = name.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").slice(-120);
	return cleaned || "file";
}

async function requireClient(req: Request) {
	const token = parseCookies(req)[SESSION_COOKIE];
	if (!token) return null;

	const db = getDatabase();
	const rows = await db.sql<{
		client_id: string;
		email: string;
		company_name: string;
		contact_name: string | null;
		status: string;
	}>`
		SELECT c.id AS client_id, c.email, c.company_name, c.contact_name, c.status
		FROM portal_sessions s
		JOIN portal_clients c ON c.id = s.client_id
		WHERE s.token_hash = ${sha256(token)}
		  AND s.expires_at > NOW()
		LIMIT 1
	`;

	const client = rows[0];
	return client?.status === "active" ? client : null;
}

function requireAdmin(req: Request) {
	const expected = process.env.PORTAL_ADMIN_SECRET?.trim();
	const supplied = req.headers.get(ADMIN_HEADER)?.trim() || "";
	return Boolean(expected && supplied && safeCompare(expected, supplied));
}

async function buildDashboard(clientId: string) {
	const db = getDatabase();
	const [clients, messages, files, consents] = await Promise.all([
		db.sql<{
			id: string;
			email: string;
			company_name: string;
			contact_name: string | null;
			created_at: string;
			last_login_at: string | null;
		}>`
			SELECT id, email, company_name, contact_name, created_at, last_login_at
			FROM portal_clients WHERE id = ${clientId} LIMIT 1
		`,
		db.sql<{
			id: string;
			sender_role: "client" | "admin";
			sender_name: string;
			body: string;
			created_at: string;
		}>`
			SELECT id, sender_role, sender_name, body, created_at
			FROM portal_messages
			WHERE client_id = ${clientId}
			ORDER BY created_at ASC
			LIMIT 250
		`,
		db.sql<{
			id: string;
			uploader_role: "client" | "admin";
			file_kind: string;
			title: string | null;
			original_name: string;
			content_type: string;
			size_bytes: number;
			created_at: string;
		}>`
			SELECT id, uploader_role, file_kind, title, original_name, content_type, size_bytes, created_at
			FROM portal_files
			WHERE client_id = ${clientId} AND upload_status = 'ready'
			ORDER BY created_at DESC
		`,
		db.sql<{
			accepted: boolean;
			consent_version: string;
			recorded_at: string;
		}>`
			SELECT accepted, consent_version, recorded_at
			FROM portal_consents
			WHERE client_id = ${clientId} AND consent_type = 'marketing_material_use'
			ORDER BY recorded_at DESC
			LIMIT 1
		`,
	]);

	return {
		client: clients[0],
		messages,
		files,
		consent: consents[0] || null,
		consentVersion: CONSENT_VERSION,
		maxFileBytes: MAX_FILE_BYTES,
		storageConfigured: Boolean(storageConfig()),
	};
}

async function createUpload({
	clientId,
	uploaderRole,
	fileName,
	contentType,
	size,
	fileKind,
	title,
}: {
	clientId: string;
	uploaderRole: "client" | "admin";
	fileName: string;
	contentType: string;
	size: number;
	fileKind: string;
	title?: string;
}) {
	if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_BYTES) {
		throw new Error("Each file must be 50 MB or smaller.");
	}

	const allowedKinds = new Set(["project_file", "contract", "welcome_letter", "brand_guideline", "other_document"]);
	const kind = allowedKinds.has(fileKind) ? fileKind : "project_file";
	const storage = storageConfig();
	if (!storage) throw new Error("Secure file storage has not been configured yet.");

	const safeName = sanitiseFileName(fileName);
	const storageKey = `client-portal/${clientId}/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;
	const db = getDatabase();
	const inserted = await db.sql<{ id: string }>`
		INSERT INTO portal_files (
			client_id, uploader_role, file_kind, title, original_name,
			storage_key, content_type, size_bytes, upload_status
		)
		VALUES (
			${clientId}, ${uploaderRole}, ${kind}, ${title || null}, ${fileName},
			${storageKey}, ${contentType || "application/octet-stream"}, ${size}, 'pending'
		)
		RETURNING id
	`;

	const command = new PutObjectCommand({
		Bucket: storage.bucket,
		Key: storageKey,
		ContentType: contentType || "application/octet-stream",
	});
	const uploadUrl = await getSignedUrl(storage.client, command, { expiresIn: 10 * 60 });

	return {
		fileId: inserted[0].id,
		uploadUrl,
		headers: { "Content-Type": contentType || "application/octet-stream" },
	};
}

async function completeUpload(fileId: string, clientId: string) {
	const db = getDatabase();
	const rows = await db.sql<{ storage_key: string }>`
		SELECT storage_key FROM portal_files
		WHERE id = ${fileId} AND client_id = ${clientId} AND upload_status = 'pending'
		LIMIT 1
	`;
	if (!rows[0]) throw new Error("Upload record not found.");

	const storage = storageConfig();
	if (!storage) throw new Error("Secure file storage has not been configured yet.");
	const head = await storage.client.send(new HeadObjectCommand({ Bucket: storage.bucket, Key: rows[0].storage_key }));
	const actualSize = Number(head.ContentLength || 0);

	if (!actualSize || actualSize > MAX_FILE_BYTES) {
		await storage.client.send(new DeleteObjectCommand({ Bucket: storage.bucket, Key: rows[0].storage_key }));
		await db.sql`UPDATE portal_files SET upload_status = 'rejected' WHERE id = ${fileId}`;
		throw new Error("The uploaded file exceeded the 50 MB limit or could not be verified.");
	}

	await db.sql`
		UPDATE portal_files
		SET upload_status = 'ready', size_bytes = ${actualSize}
		WHERE id = ${fileId} AND client_id = ${clientId}
	`;
}

async function createDownload(fileId: string, clientId: string) {
	const db = getDatabase();
	const rows = await db.sql<{ storage_key: string; original_name: string }>`
		SELECT storage_key, original_name FROM portal_files
		WHERE id = ${fileId} AND client_id = ${clientId} AND upload_status = 'ready'
		LIMIT 1
	`;
	if (!rows[0]) throw new Error("File not found.");

	const storage = storageConfig();
	if (!storage) throw new Error("Secure file storage has not been configured yet.");
	const command = new GetObjectCommand({
		Bucket: storage.bucket,
		Key: rows[0].storage_key,
		ResponseContentDisposition: `attachment; filename="${rows[0].original_name.replace(/["\\]/g, "_")}"`,
	});
	return getSignedUrl(storage.client, command, { expiresIn: 10 * 60 });
}

export default async function handler(req: Request, context: Context) {
	if (req.method !== "POST") return json({ error: "Method not allowed." }, 405);

	let body: Record<string, any>;
	try {
		body = await req.json();
	} catch {
		return json({ error: "Invalid request." }, 400);
	}

	const action = cleanText(body.action, 80);
	const db = getDatabase();

	try {
		if (action === "login") {
			const email = normaliseEmail(body.email);
			const code = cleanText(body.code, 80).toUpperCase();
			if (!email || !code) return json({ error: "Enter your registered email address and access code." }, 400);

			const rows = await db.sql<{
				id: string;
				access_code_hash: string;
				status: string;
			}>`
				SELECT id, access_code_hash, status
				FROM portal_clients WHERE email = ${email} LIMIT 1
			`;
			const account = rows[0];
			if (!account || account.status !== "active" || !verifyAccessCode(code, account.access_code_hash)) {
				return json({ error: "The email address or access code is incorrect." }, 401);
			}

			const token = randomBytes(32).toString("base64url");
			const expiresAt = new Date(Date.now() + SESSION_HOURS * 60 * 60 * 1000);
			await Promise.all([
				db.sql`
					INSERT INTO portal_sessions (client_id, token_hash, expires_at)
					VALUES (${account.id}, ${sha256(token)}, ${expiresAt.toISOString()}::timestamptz)
				`,
				db.sql`UPDATE portal_clients SET last_login_at = NOW(), updated_at = NOW() WHERE id = ${account.id}`,
				db.sql`DELETE FROM portal_sessions WHERE expires_at <= NOW()`,
			]);

			return json({ ok: true }, 200, { "Set-Cookie": makeSessionCookie(token) });
		}

		if (action === "logout") {
			const token = parseCookies(req)[SESSION_COOKIE];
			if (token) await db.sql`DELETE FROM portal_sessions WHERE token_hash = ${sha256(token)}`;
			return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
		}

		if (action.startsWith("admin_")) {
			if (!requireAdmin(req)) return json({ error: "Admin access denied." }, 401);

			if (action === "admin_list_clients") {
				const clients = await db.sql`
					SELECT id, email, company_name, contact_name, status, created_at, last_login_at
					FROM portal_clients ORDER BY company_name ASC, created_at DESC
				`;
				return json({ clients, storageConfigured: Boolean(storageConfig()) });
			}

			if (action === "admin_create_client") {
				const email = normaliseEmail(body.email);
				const companyName = cleanText(body.companyName, 180);
				const contactName = cleanText(body.contactName, 180) || null;
				const accessCode = (cleanText(body.accessCode, 80) || generateAccessCode()).toUpperCase();
				if (!email || !companyName) return json({ error: "Company name and email are required." }, 400);
				if (accessCode.length < 10) return json({ error: "Use an access code of at least 10 characters." }, 400);

				const inserted = await db.sql<{ id: string }>`
					INSERT INTO portal_clients (email, company_name, contact_name, access_code_hash)
					VALUES (${email}, ${companyName}, ${contactName}, ${hashAccessCode(accessCode)})
					RETURNING id
				`;
				await db.sql`
					INSERT INTO portal_messages (client_id, sender_role, sender_name, body)
					VALUES (
						${inserted[0].id}, 'admin', 'GT Marketing',
						${`Welcome to your private GT Marketing client portal. You can use this space to message us, share project files and access documents related to your engagement.`}
					)
				`;
				return json({ ok: true, clientId: inserted[0].id, accessCode });
			}

			const clientId = cleanText(body.clientId, 80);
			if (!clientId) return json({ error: "Client ID is required." }, 400);

			if (action === "admin_dashboard") return json(await buildDashboard(clientId));

			if (action === "admin_send_message") {
				const message = cleanText(body.message);
				if (!message) return json({ error: "Message cannot be empty." }, 400);
				await db.sql`
					INSERT INTO portal_messages (client_id, sender_role, sender_name, body)
					VALUES (${clientId}, 'admin', 'GT Marketing', ${message})
				`;
				return json({ ok: true });
			}

			if (action === "admin_set_status") {
				const status = body.status === "disabled" ? "disabled" : "active";
				await db.sql`UPDATE portal_clients SET status = ${status}, updated_at = NOW() WHERE id = ${clientId}`;
				if (status === "disabled") await db.sql`DELETE FROM portal_sessions WHERE client_id = ${clientId}`;
				return json({ ok: true });
			}

			if (action === "admin_create_upload") {
				const upload = await createUpload({
					clientId,
					uploaderRole: "admin",
					fileName: cleanText(body.fileName, 240),
					contentType: cleanText(body.contentType, 180) || "application/octet-stream",
					size: Number(body.size),
					fileKind: cleanText(body.fileKind, 80) || "other_document",
					title: cleanText(body.title, 180),
				});
				return json(upload);
			}

			if (action === "admin_complete_upload") {
				await completeUpload(cleanText(body.fileId, 80), clientId);
				return json({ ok: true });
			}

			if (action === "admin_download") {
				const url = await createDownload(cleanText(body.fileId, 80), clientId);
				return json({ url });
			}

			return json({ error: "Unknown admin action." }, 400);
		}

		const client = await requireClient(req);
		if (!client) return json({ error: "Your portal session has expired. Please sign in again." }, 401);

		if (action === "dashboard") return json(await buildDashboard(client.client_id));

		if (action === "send_message") {
			const message = cleanText(body.message);
			if (!message) return json({ error: "Message cannot be empty." }, 400);
			await db.sql`
				INSERT INTO portal_messages (client_id, sender_role, sender_name, body)
				VALUES (${client.client_id}, 'client', ${client.contact_name || client.company_name}, ${message})
			`;
			return json({ ok: true });
		}

		if (action === "record_consent") {
			const accepted = Boolean(body.accepted);
			const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
			await db.sql`
				INSERT INTO portal_consents (
					client_id, consent_type, consent_version, accepted, ip_address, user_agent
				)
				VALUES (
					${client.client_id}, 'marketing_material_use', ${CONSENT_VERSION}, ${accepted},
					${forwardedFor}, ${req.headers.get("user-agent") || null}
				)
			`;
			return json({ ok: true, accepted, recordedAt: new Date().toISOString() });
		}

		if (action === "create_upload") {
			const upload = await createUpload({
				clientId: client.client_id,
				uploaderRole: "client",
				fileName: cleanText(body.fileName, 240),
				contentType: cleanText(body.contentType, 180) || "application/octet-stream",
				size: Number(body.size),
				fileKind: "project_file",
				title: cleanText(body.title, 180),
			});
			return json(upload);
		}

		if (action === "complete_upload") {
			await completeUpload(cleanText(body.fileId, 80), client.client_id);
			return json({ ok: true });
		}

		if (action === "download") {
			const url = await createDownload(cleanText(body.fileId, 80), client.client_id);
			return json({ url });
		}

		return json({ error: "Unknown portal action." }, 400);
	} catch (error: any) {
		console.error("Client portal error", error);
		const message = String(error?.message || "Something went wrong.");
		if (message.includes("duplicate key value")) {
			return json({ error: "That email address is already registered in the portal." }, 409);
		}
		return json({ error: message }, 500);
	}
}

export const config: Config = {
	path: "/api/client-portal",
	method: "POST",
};
