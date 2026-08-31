"use client";

import Head from "next/head";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
	ArrowDownToLine,
	FileText,
	KeyRound,
	MessageCircle,
	Plus,
	RefreshCw,
	Send,
	ShieldCheck,
	UploadCloud,
	Users,
} from "lucide-react";

const API_URL = "/api/client-portal";
const MAX_FILE_BYTES = 50 * 1024 * 1024;

type ClientRow = {
	id: string;
	email: string;
	company_name: string;
	contact_name: string | null;
	status: "active" | "disabled";
	created_at: string;
	last_login_at: string | null;
};

type Dashboard = {
	client: ClientRow;
	messages: Array<{ id: string; sender_role: "client" | "admin"; sender_name: string; body: string; created_at: string }>;
	files: Array<{ id: string; file_kind: string; title: string | null; original_name: string; size_bytes: number; uploader_role: string; created_at: string }>;
	consent: { accepted: boolean; recorded_at: string; consent_version: string } | null;
	storageConfigured: boolean;
};

function formatDate(value: string | null) {
	if (!value) return "Never";
	return new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value));
}

function formatBytes(bytes: number) {
	if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
	if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
	return `${bytes} B`;
}

export default function PortalAdminPage() {
	const [secret, setSecret] = useState("");
	const [clients, setClients] = useState<ClientRow[]>([]);
	const [selectedId, setSelectedId] = useState("");
	const [dashboard, setDashboard] = useState<Dashboard | null>(null);
	const [error, setError] = useState("");
	const [busy, setBusy] = useState(false);
	const [message, setMessage] = useState("");
	const [newClient, setNewClient] = useState({ companyName: "", contactName: "", email: "", accessCode: "" });
	const [createdCode, setCreatedCode] = useState("");
	const [uploadStatus, setUploadStatus] = useState("");
	const [documentType, setDocumentType] = useState("contract");
	const [documentTitle, setDocumentTitle] = useState("");

	useEffect(() => {
		const saved = window.sessionStorage.getItem("gt_portal_admin_secret") || "";
		if (saved) {
			setSecret(saved);
			void loadClients(saved);
		}
	}, []);

	const adminRequest = async <T,>(body: Record<string, unknown>, currentSecret = secret): Promise<T> => {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json", "x-portal-admin-secret": currentSecret },
			body: JSON.stringify(body),
		});
		const data = await response.json().catch(() => ({}));
		if (!response.ok) throw new Error(data.error || "Admin request failed.");
		return data as T;
	};

	const loadClients = async (currentSecret = secret) => {
		setError("");
		try {
			const result = await adminRequest<{ clients: ClientRow[] }>({ action: "admin_list_clients" }, currentSecret);
			setClients(result.clients);
			window.sessionStorage.setItem("gt_portal_admin_secret", currentSecret);
		} catch (err: any) {
			setError(err?.message || "Admin access failed.");
			setClients([]);
		}
	};

	const loadDashboard = async (clientId: string) => {
		if (!clientId) return;
		setSelectedId(clientId);
		try {
			setDashboard(await adminRequest<Dashboard>({ action: "admin_dashboard", clientId }));
		} catch (err: any) {
			setError(err?.message || "Unable to load client workspace.");
		}
	};

	const unlock = async (event: FormEvent) => {
		event.preventDefault();
		setBusy(true);
		await loadClients(secret);
		setBusy(false);
	};

	const createClient = async (event: FormEvent) => {
		event.preventDefault();
		setBusy(true);
		setError("");
		setCreatedCode("");
		try {
			const result = await adminRequest<{ clientId: string; accessCode: string }>({ action: "admin_create_client", ...newClient });
			setCreatedCode(result.accessCode);
			setNewClient({ companyName: "", contactName: "", email: "", accessCode: "" });
			await loadClients();
			await loadDashboard(result.clientId);
		} catch (err: any) {
			setError(err?.message || "Unable to create client.");
		} finally {
			setBusy(false);
		}
	};

	const sendMessage = async (event: FormEvent) => {
		event.preventDefault();
		if (!selectedId || !message.trim()) return;
		setBusy(true);
		try {
			await adminRequest({ action: "admin_send_message", clientId: selectedId, message });
			setMessage("");
			await loadDashboard(selectedId);
		} finally {
			setBusy(false);
		}
	};

	const changeStatus = async () => {
		if (!dashboard) return;
		const status = dashboard.client.status === "active" ? "disabled" : "active";
		await adminRequest({ action: "admin_set_status", clientId: dashboard.client.id, status });
		await loadClients();
		await loadDashboard(dashboard.client.id);
	};

	const uploadDocuments = async (files: FileList | null) => {
		if (!files?.length || !selectedId) return;
		if (!dashboard?.storageConfigured) {
			setUploadStatus("Storage is not configured in Netlify environment variables yet.");
			return;
		}
		const selected = Array.from(files);
		const oversized = selected.find((file) => file.size > MAX_FILE_BYTES);
		if (oversized) return setUploadStatus(`${oversized.name} exceeds 50 MB.`);

		setBusy(true);
		try {
			for (let index = 0; index < selected.length; index += 1) {
				const file = selected[index];
				setUploadStatus(`Uploading ${index + 1}/${selected.length}: ${file.name}`);
				const prepared = await adminRequest<{ fileId: string; uploadUrl: string; headers: Record<string, string> }>({
					action: "admin_create_upload",
					clientId: selectedId,
					fileName: file.name,
					contentType: file.type || "application/octet-stream",
					size: file.size,
					fileKind: documentType,
					title: documentTitle || file.name,
				});
				const response = await fetch(prepared.uploadUrl, { method: "PUT", headers: prepared.headers, body: file });
				if (!response.ok) throw new Error(`Upload failed for ${file.name}.`);
				await adminRequest({ action: "admin_complete_upload", clientId: selectedId, fileId: prepared.fileId });
			}
			setUploadStatus("Document upload complete.");
			setDocumentTitle("");
			await loadDashboard(selectedId);
		} catch (err: any) {
			setUploadStatus(err?.message || "Upload failed.");
		} finally {
			setBusy(false);
		}
	};

	const download = async (fileId: string) => {
		if (!selectedId) return;
		const result = await adminRequest<{ url: string }>({ action: "admin_download", clientId: selectedId, fileId });
		window.location.assign(result.url);
	};

	const projectFiles = useMemo(() => dashboard?.files.filter((file) => file.file_kind === "project_file") || [], [dashboard?.files]);
	const documents = useMemo(() => dashboard?.files.filter((file) => file.file_kind !== "project_file") || [], [dashboard?.files]);

	return (
		<>
			<Head>
				<title>Portal Administration | GT Marketing</title>
				<meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
				<meta name="referrer" content="no-referrer" />
			</Head>
			<main className="min-h-screen bg-[#212121] text-white font-NeueMontreal p-[18px] sm:p-[8px] xm:p-[8px]">
				{clients.length === 0 ? (
					<div className="min-h-[calc(100vh-36px)] bg-[#f1f1f1] text-[#212121] rounded-[22px] flex items-center justify-center p-[25px]">
						<form onSubmit={unlock} className="w-full max-w-[560px]">
							<img src="/logo.svg" alt="GT Marketing" className="h-[70px] w-auto mb-[50px]" />
							<p className="small-text uppercase text-[#21212166]">Private administration</p>
							<h1 className="text-[74px] leading-[0.85] font-FoundersGrotesk font-semibold uppercase pt-[12px]">Client portal<br /><span className="text-[#fd4402]">control room</span></h1>
							<label className="block pt-[40px]"><span className="small-text uppercase">Admin secret</span><input type="password" value={secret} onChange={(e) => setSecret(e.target.value)} required className="w-full mt-[8px] py-[14px] bg-transparent border-b border-[#21212155] outline-none focus:border-[#fd4402] text-[22px]" /></label>
							{error && <p className="text-[#b42318] text-[14px] pt-[12px]">{error}</p>}
							<button disabled={busy} className="mt-[25px] w-full rounded-full bg-[#fd4402] text-white py-[14px] uppercase small-text hover:bg-[#212121] disabled:opacity-50">Unlock administration</button>
						</form>
					</div>
				) : (
					<div className="min-h-[calc(100vh-36px)] grid grid-cols-12 gap-[12px] lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
						<aside className="col-span-3 bg-[#111] rounded-[20px] p-[22px]">
							<div className="flex justify-between items-center"><img src="/logo.svg" alt="GT Marketing" className="h-[52px] w-auto brightness-0 invert" /><button onClick={() => loadClients()} className="w-[38px] h-[38px] rounded-full border border-white/20 flex items-center justify-center hover:bg-[#fd4402]"><RefreshCw size={16} /></button></div>
							<p className="small-text uppercase text-white/45 pt-[35px]">Registered clients</p>
							<div className="pt-[12px] space-y-[7px] max-h-[46vh] overflow-y-auto">
								{clients.map((client) => <button key={client.id} onClick={() => loadDashboard(client.id)} className={`w-full text-left rounded-[10px] p-[12px] ${selectedId === client.id ? "bg-[#fd4402]" : "bg-white/5 hover:bg-white/10"}`}><p className="text-[17px]">{client.company_name}</p><p className="text-[12px] opacity-50 pt-[2px] truncate">{client.email}</p></button>)}
							</div>
							<form onSubmit={createClient} className="mt-[28px] border-t border-white/15 pt-[20px] space-y-[9px]">
								<div className="flex items-center gap-[8px] small-text uppercase text-white/55"><Plus size={15} /> Add client</div>
								<input value={newClient.companyName} onChange={(e) => setNewClient({ ...newClient, companyName: e.target.value })} required placeholder="Company name" className="w-full bg-white/7 rounded-[8px] px-[11px] py-[10px] outline-none focus:ring-1 focus:ring-[#fd4402]" />
								<input value={newClient.contactName} onChange={(e) => setNewClient({ ...newClient, contactName: e.target.value })} placeholder="Contact name" className="w-full bg-white/7 rounded-[8px] px-[11px] py-[10px] outline-none focus:ring-1 focus:ring-[#fd4402]" />
								<input value={newClient.email} onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} required type="email" placeholder="Email" className="w-full bg-white/7 rounded-[8px] px-[11px] py-[10px] outline-none focus:ring-1 focus:ring-[#fd4402]" />
								<input value={newClient.accessCode} onChange={(e) => setNewClient({ ...newClient, accessCode: e.target.value.toUpperCase() })} placeholder="Optional custom code" className="w-full bg-white/7 rounded-[8px] px-[11px] py-[10px] outline-none focus:ring-1 focus:ring-[#fd4402]" />
								<button disabled={busy} className="w-full rounded-full bg-[#fd4402] py-[10px] small-text uppercase disabled:opacity-50">Create client + code</button>
								{createdCode && <div className="bg-white text-[#212121] rounded-[9px] p-[12px]"><p className="text-[11px] uppercase opacity-50">Copy this code now</p><p className="text-[18px] font-medium tracking-[1px] pt-[3px]">{createdCode}</p><p className="text-[11px] opacity-55 pt-[4px]">The plaintext code is not stored and cannot be recovered later.</p></div>}
							</form>
						</aside>

						<section className="col-span-9 bg-[#f1f1f1] text-[#212121] rounded-[20px] p-[25px] min-h-[calc(100vh-36px)]">
							{!dashboard ? <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center"><Users size={42} strokeWidth={1.2} /><h2 className="text-[62px] leading-[0.85] font-FoundersGrotesk font-semibold uppercase pt-[18px]">Select a client</h2><p className="text-[#21212166] pt-[12px]">Choose an existing workspace or create a new one.</p></div> : (
								<div>
									<div className="flex justify-between items-start gap-[20px] sm:flex-col xm:flex-col"><div><p className="small-text uppercase text-[#21212155]">Client workspace</p><h2 className="text-[72px] leading-[0.84] font-FoundersGrotesk font-semibold uppercase pt-[8px]">{dashboard.client.company_name}</h2><p className="text-[14px] text-[#21212166] pt-[8px]">{dashboard.client.email} · Last login: {formatDate(dashboard.client.last_login_at)}</p></div><button onClick={changeStatus} className={`rounded-full px-[16px] py-[9px] small-text uppercase border ${dashboard.client.status === "active" ? "border-[#21212155]" : "bg-[#fd4402] text-white border-[#fd4402]"}`}>{dashboard.client.status === "active" ? "Disable access" : "Reactivate access"}</button></div>
									<div className="grid grid-cols-3 gap-[10px] mt-[28px] sm:grid-cols-1 xm:grid-cols-1"><div className="bg-white rounded-[12px] p-[18px]"><MessageCircle size={20} /><p className="text-[34px] font-FoundersGrotesk font-semibold uppercase pt-[15px]">{dashboard.messages.length} messages</p></div><div className="bg-white rounded-[12px] p-[18px]"><FileText size={20} /><p className="text-[34px] font-FoundersGrotesk font-semibold uppercase pt-[15px]">{dashboard.files.length} files</p></div><div className="bg-[#fd4402] text-white rounded-[12px] p-[18px]"><ShieldCheck size={20} /><p className="text-[34px] font-FoundersGrotesk font-semibold uppercase pt-[15px]">Consent {dashboard.consent?.accepted ? "active" : "not active"}</p></div></div>

									<div className="grid grid-cols-12 gap-[12px] mt-[12px] lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
										<div className="col-span-7 bg-white rounded-[14px] p-[18px]">
											<p className="small-text uppercase text-[#21212155]">Conversation</p>
											<div className="h-[350px] overflow-y-auto mt-[14px] space-y-[9px] pr-[4px]">{dashboard.messages.map((item) => <div key={item.id} className={`max-w-[80%] ${item.sender_role === "admin" ? "ml-auto" : "mr-auto"}`}><div className={`rounded-[12px] px-[13px] py-[10px] ${item.sender_role === "admin" ? "bg-[#212121] text-white" : "bg-[#f1f1f1]"}`}><p className="text-[14px] whitespace-pre-wrap">{item.body}</p></div><p className={`text-[10px] opacity-45 pt-[3px] ${item.sender_role === "admin" ? "text-right" : ""}`}>{item.sender_name} · {formatDate(item.created_at)}</p></div>)}</div>
											<form onSubmit={sendMessage} className="flex gap-[8px] mt-[12px]"><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={2} maxLength={5000} placeholder="Reply as GT Marketing…" className="flex-1 bg-[#f1f1f1] rounded-[10px] px-[11px] py-[9px] resize-none outline-none" /><button disabled={busy || !message.trim()} className="w-[46px] h-[46px] rounded-full bg-[#fd4402] text-white flex items-center justify-center disabled:opacity-30"><Send size={18} /></button></form>
										</div>

										<div className="col-span-5 bg-[#212121] text-white rounded-[14px] p-[18px]">
											<div className="flex items-center gap-[8px]"><UploadCloud size={19} /><p className="small-text uppercase text-white/60">Upload client document</p></div>
											<select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="w-full mt-[16px] bg-white/8 rounded-[8px] px-[10px] py-[10px] outline-none"><option className="text-black" value="contract">Signed contract</option><option className="text-black" value="welcome_letter">Welcome letter</option><option className="text-black" value="brand_guideline">Brand guideline</option><option className="text-black" value="other_document">Other document</option></select>
											<input value={documentTitle} onChange={(e) => setDocumentTitle(e.target.value)} placeholder="Document title (optional)" className="w-full mt-[9px] bg-white/8 rounded-[8px] px-[10px] py-[10px] outline-none" />
											<label className="mt-[9px] min-h-[110px] border border-dashed border-white/30 rounded-[10px] flex flex-col items-center justify-center cursor-pointer hover:border-[#fd4402]"><UploadCloud size={23} /><p className="text-[12px] text-white/55 pt-[7px]">Multiple files, 50 MB each</p><input type="file" multiple className="hidden" onChange={(e) => uploadDocuments(e.target.files)} /></label>
											{uploadStatus && <p className="text-[11px] text-white/55 pt-[9px]">{uploadStatus}</p>}
										</div>
									</div>

									<div className="mt-[12px] bg-white rounded-[14px] overflow-hidden"><div className="px-[18px] py-[14px] border-b border-[#21212122] flex justify-between"><p className="small-text uppercase text-[#21212155]">Files and documents</p><p className="text-[11px] text-[#21212155]">{projectFiles.length} client uploads · {documents.length} documents</p></div>{dashboard.files.length === 0 ? <p className="p-[18px] text-[#21212166]">No files yet.</p> : dashboard.files.map((file) => <div key={file.id} className="grid grid-cols-12 items-center gap-[10px] px-[18px] py-[13px] border-b border-[#21212118] last:border-b-0"><div className="col-span-5 min-w-0"><p className="truncate text-[14px]">{file.title || file.original_name}</p><p className="text-[10px] uppercase text-[#21212155] pt-[2px]">{file.file_kind.replaceAll("_", " ")}</p></div><p className="col-span-2 text-[11px] text-[#21212155]">{formatBytes(file.size_bytes)}</p><p className="col-span-3 text-[11px] text-[#21212155]">{formatDate(file.created_at)}</p><button onClick={() => download(file.id)} className="col-span-2 justify-self-end w-[36px] h-[36px] rounded-full border border-[#21212144] flex items-center justify-center hover:bg-[#fd4402] hover:text-white hover:border-[#fd4402]"><ArrowDownToLine size={15} /></button></div>)}</div>
								</div>
							)}
							{error && <p className="fixed right-[24px] bottom-[24px] bg-[#b42318] text-white rounded-[10px] px-[14px] py-[10px] text-[13px]">{error}</p>}
						</section>
					</div>
				)}
			</main>
		</>
	);
}
