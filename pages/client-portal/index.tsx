"use client";

import Head from "next/head";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
	ArrowDownToLine,
	CheckCircle2,
	FileText,
	FolderOpen,
	LogOut,
	MessageCircle,
	Paperclip,
	Send,
	ShieldCheck,
	UploadCloud,
} from "lucide-react";

const API_URL = "/api/client-portal";
const MAX_FILE_BYTES = 50 * 1024 * 1024;

type PortalMessage = {
	id: string;
	sender_role: "client" | "admin";
	sender_name: string;
	body: string;
	created_at: string;
};

type PortalFile = {
	id: string;
	uploader_role: "client" | "admin";
	file_kind: "project_file" | "contract" | "welcome_letter" | "brand_guideline" | "other_document";
	title: string | null;
	original_name: string;
	content_type: string;
	size_bytes: number;
	created_at: string;
};

type Dashboard = {
	client: {
		id: string;
		email: string;
		company_name: string;
		contact_name: string | null;
		created_at: string;
		last_login_at: string | null;
	};
	messages: PortalMessage[];
	files: PortalFile[];
	consent: { accepted: boolean; consent_version: string; recorded_at: string } | null;
	consentVersion: string;
	maxFileBytes: number;
	storageConfigured: boolean;
};

type Tab = "overview" | "chat" | "files" | "documents" | "privacy";

function formatBytes(bytes: number) {
	if (!bytes) return "0 B";
	const units = ["B", "KB", "MB", "GB"];
	const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
	return `${(bytes / 1024 ** index).toFixed(index >= 2 ? 1 : 0)} ${units[index]}`;
}

function formatDate(value: string) {
	return new Intl.DateTimeFormat("en-AU", {
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
	}).format(new Date(value));
}

async function portalRequest<T>(body: Record<string, unknown>): Promise<T> {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(body),
	});
	const data = await response.json().catch(() => ({}));
	if (!response.ok) {
		const error = new Error(data.error || "Portal request failed.") as Error & { status?: number };
		error.status = response.status;
		throw error;
	}
	return data as T;
}

export default function ClientPortalPage() {
	const [dashboard, setDashboard] = useState<Dashboard | null>(null);
	const [checkingSession, setCheckingSession] = useState(true);
	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [loginBusy, setLoginBusy] = useState(false);
	const [loginError, setLoginError] = useState("");
	const [activeTab, setActiveTab] = useState<Tab>("overview");
	const [message, setMessage] = useState("");
	const [messageBusy, setMessageBusy] = useState(false);
	const [uploading, setUploading] = useState(false);
	const [uploadStatus, setUploadStatus] = useState("");
	const [consentBusy, setConsentBusy] = useState(false);
	const chatEndRef = useRef<HTMLDivElement>(null);

	const loadDashboard = async (silent = false) => {
		try {
			const next = await portalRequest<Dashboard>({ action: "dashboard" });
			setDashboard(next);
		} catch (error: any) {
			if (error?.status === 401) setDashboard(null);
			else if (!silent) setLoginError(error?.message || "Unable to load the portal.");
		} finally {
			if (!silent) setCheckingSession(false);
		}
	};

	useEffect(() => {
		loadDashboard();
	}, []);

	useEffect(() => {
		if (!dashboard) return;
		const interval = window.setInterval(() => loadDashboard(true), 5000);
		return () => window.clearInterval(interval);
	}, [Boolean(dashboard)]);

	useEffect(() => {
		if (activeTab === "chat") chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [activeTab, dashboard?.messages.length]);

	const projectFiles = useMemo(
		() => dashboard?.files.filter((file) => file.file_kind === "project_file") || [],
		[dashboard?.files]
	);
	const documents = useMemo(
		() => dashboard?.files.filter((file) => file.file_kind !== "project_file") || [],
		[dashboard?.files]
	);

	const login = async (event: FormEvent) => {
		event.preventDefault();
		setLoginBusy(true);
		setLoginError("");
		try {
			await portalRequest({ action: "login", email, code });
			setCode("");
			await loadDashboard();
		} catch (error: any) {
			setLoginError(error?.message || "Unable to sign in.");
		} finally {
			setLoginBusy(false);
		}
	};

	const logout = async () => {
		try {
			await portalRequest({ action: "logout" });
		} finally {
			setDashboard(null);
			setActiveTab("overview");
		}
	};

	const sendMessage = async (event: FormEvent) => {
		event.preventDefault();
		if (!message.trim()) return;
		setMessageBusy(true);
		try {
			await portalRequest({ action: "send_message", message });
			setMessage("");
			await loadDashboard(true);
		} finally {
			setMessageBusy(false);
		}
	};

	const uploadFiles = async (files: FileList | null) => {
		if (!files?.length) return;
		if (!dashboard?.storageConfigured) {
			setUploadStatus("Secure file storage is not configured yet. Please contact GT Marketing.");
			return;
		}
		const selected = Array.from(files);
		const oversized = selected.find((file) => file.size > MAX_FILE_BYTES);
		if (oversized) {
			setUploadStatus(`${oversized.name} is larger than 50 MB.`);
			return;
		}

		setUploading(true);
		setUploadStatus(`Preparing ${selected.length} file${selected.length > 1 ? "s" : ""}…`);
		try {
			for (let index = 0; index < selected.length; index += 1) {
				const file = selected[index];
				setUploadStatus(`Uploading ${index + 1} of ${selected.length}: ${file.name}`);
				const upload = await portalRequest<{ fileId: string; uploadUrl: string; headers: Record<string, string> }>({
					action: "create_upload",
					fileName: file.name,
					contentType: file.type || "application/octet-stream",
					size: file.size,
				});
				const uploadResponse = await fetch(upload.uploadUrl, {
					method: "PUT",
					headers: upload.headers,
					body: file,
				});
				if (!uploadResponse.ok) throw new Error(`Upload failed for ${file.name}.`);
				await portalRequest({ action: "complete_upload", fileId: upload.fileId });
			}
			setUploadStatus("Upload complete. Your files are now available in the portal.");
			await loadDashboard(true);
		} catch (error: any) {
			setUploadStatus(error?.message || "The upload could not be completed.");
		} finally {
			setUploading(false);
		}
	};

	const downloadFile = async (fileId: string) => {
		try {
			const result = await portalRequest<{ url: string }>({ action: "download", fileId });
			window.location.assign(result.url);
		} catch (error: any) {
			setUploadStatus(error?.message || "The file could not be opened.");
		}
	};

	const recordConsent = async (accepted: boolean) => {
		setConsentBusy(true);
		try {
			await portalRequest({ action: "record_consent", accepted });
			await loadDashboard(true);
		} finally {
			setConsentBusy(false);
		}
	};

	const tabs: Array<{ id: Tab; label: string; icon: any }> = [
		{ id: "overview", label: "Overview", icon: ShieldCheck },
		{ id: "chat", label: "Messages", icon: MessageCircle },
		{ id: "files", label: "Files", icon: FolderOpen },
		{ id: "documents", label: "Documents", icon: FileText },
		{ id: "privacy", label: "Privacy & consent", icon: CheckCircle2 },
	];

	return (
		<>
			<Head>
				<title>Private Client Portal | GT Marketing</title>
				<meta name="robots" content="noindex,nofollow,noarchive,nosnippet" />
				<meta name="googlebot" content="noindex,nofollow,noarchive,nosnippet" />
				<meta name="referrer" content="no-referrer" />
			</Head>

			<main className="min-h-screen bg-[#f1f1f1] text-[#212121] font-NeueMontreal">
				{checkingSession ? (
					<div className="min-h-screen flex items-center justify-center px-[22px]">
						<div className="w-[44px] h-[44px] rounded-full border-2 border-[#21212122] border-t-[#fd4402] animate-spin" />
					</div>
				) : !dashboard ? (
					<section className="min-h-screen grid grid-cols-12 md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
						<div className="col-span-7 bg-[#212121] text-white p-[55px] md:p-[36px] sm:p-[25px] xm:p-[22px] flex flex-col justify-between min-h-screen md:min-h-[48vh] sm:min-h-[45vh] xm:min-h-[42vh]">
							<div className="flex justify-between items-start gap-[20px]">
								<img src="/logo.svg" alt="GT Marketing" className="h-[72px] sm:h-[58px] xm:h-[52px] w-auto brightness-0 invert" />
								<span className="small-text uppercase text-white/45">Private workspace</span>
							</div>
							<div>
								<p className="small-text uppercase text-[#fd4402] pb-[22px]">Client portal</p>
								<h1 className="font-FoundersGrotesk font-semibold uppercase text-[126px] leading-[0.76] lg:text-[102px] md:text-[82px] sm:text-[70px] xm:text-[58px] tracking-[-3px]">
									One place.<br /><span className="text-[#fd4402]">Your project.</span>
								</h1>
								<p className="paragraph text-white/62 max-w-[650px] pt-[35px]">
									Use your registered email address and the unique access code supplied by GT Marketing. Your portal is specific to your engagement and is not publicly listed on the website.
								</p>
							</div>
						</div>

						<div className="col-span-5 p-[55px] md:p-[36px] sm:p-[25px] xm:p-[22px] flex items-center">
							<div className="w-full max-w-[560px] mx-auto">
								<p className="small-text uppercase text-[#21212188]">Authorised client access</p>
								<h2 className="font-FoundersGrotesk font-semibold uppercase text-[70px] leading-[0.88] sm:text-[58px] xm:text-[50px] pt-[18px]">Sign in</h2>
								<form onSubmit={login} className="pt-[45px] space-y-[18px]">
									<label className="block">
										<span className="small-text uppercase">Registered email</span>
										<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="mt-[8px] w-full bg-transparent border-b border-[#21212155] py-[14px] text-[24px] outline-none focus:border-[#fd4402]" placeholder="you@business.com.au" />
									</label>
									<label className="block">
										<span className="small-text uppercase">Access code</span>
										<input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} type="password" autoComplete="one-time-code" required className="mt-[8px] w-full bg-transparent border-b border-[#21212155] py-[14px] text-[24px] tracking-[3px] outline-none focus:border-[#fd4402]" placeholder="GTM-••••-••••-••••" />
									</label>
									{loginError && <p className="text-[15px] text-[#b42318]">{loginError}</p>}
									<button disabled={loginBusy} type="submit" className="w-full mt-[10px] bg-[#fd4402] text-white rounded-full px-[20px] py-[15px] uppercase small-text disabled:opacity-50 hover:bg-[#212121] transition-colors">
										{loginBusy ? "Checking access…" : "Enter private portal"}
									</button>
								</form>
								<div className="mt-[38px] border-t border-[#21212122] pt-[20px] text-[13px] leading-[1.5] text-[#21212188]">
									<p>Keep your access code private. GT Marketing will never ask you to send your portal code through the portal chat.</p>
									<p className="pt-[10px]">By using the portal, you acknowledge that project communications and uploaded materials may be stored with secure infrastructure providers for service delivery and recordkeeping. See our <Link href="/privacy" className="underline hover:text-[#fd4402]">Privacy Policy</Link>.</p>
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className="min-h-screen p-[18px] sm:p-[10px] xm:p-[8px]">
						<div className="min-h-[calc(100vh-36px)] sm:min-h-[calc(100vh-20px)] xm:min-h-[calc(100vh-16px)] bg-[#212121] rounded-[22px] overflow-hidden grid grid-cols-12 lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<aside className="col-span-3 p-[26px] text-white border-r border-white/15 lg:border-r-0 lg:border-b md:border-r-0 md:border-b sm:border-r-0 sm:border-b xm:border-r-0 xm:border-b flex flex-col justify-between lg:min-h-0 md:min-h-0 sm:min-h-0 xm:min-h-0 min-h-[calc(100vh-36px)]">
								<div>
									<div className="flex justify-between items-start gap-[20px]">
										<img src="/logo.svg" alt="GT Marketing" className="h-[58px] w-auto brightness-0 invert" />
										<span className="w-[9px] h-[9px] rounded-full bg-[#fd4402] mt-[5px]" />
									</div>
									<div className="pt-[45px] lg:pt-[28px] md:pt-[28px] sm:pt-[24px] xm:pt-[22px]">
										<p className="small-text uppercase text-white/45">Client workspace</p>
										<h1 className="font-FoundersGrotesk font-semibold uppercase text-[48px] leading-[0.9] pt-[10px]">{dashboard.client.company_name}</h1>
										<p className="text-[14px] text-white/45 pt-[10px] break-all">{dashboard.client.email}</p>
									</div>
									<nav className="pt-[38px] lg:flex lg:flex-wrap lg:gap-[8px] md:flex md:flex-wrap md:gap-[8px] sm:flex sm:overflow-x-auto sm:gap-[8px] xm:flex xm:overflow-x-auto xm:gap-[8px]">
										{tabs.map((tab) => {
											const Icon = tab.icon;
											return (
												<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full lg:w-auto md:w-auto sm:w-auto xm:w-auto whitespace-nowrap flex items-center gap-[10px] py-[12px] px-[13px] rounded-[10px] text-left text-[15px] transition-colors ${activeTab === tab.id ? "bg-[#fd4402] text-white" : "text-white/60 hover:bg-white/8 hover:text-white"}`}>
													<Icon size={18} strokeWidth={1.6} /> {tab.label}
												</button>
											);
										})}
									</nav>
								</div>
								<button onClick={logout} className="mt-[30px] flex items-center gap-[9px] text-[14px] text-white/45 hover:text-[#fd4402] transition-colors">
									<LogOut size={17} /> Sign out
								</button>
							</aside>

							<section className="col-span-9 bg-[#f1f1f1] rounded-l-[22px] lg:rounded-l-none lg:rounded-t-[22px] md:rounded-l-none sm:rounded-l-none xm:rounded-l-none min-h-[calc(100vh-36px)] p-[34px] md:p-[25px] sm:p-[18px] xm:p-[16px] overflow-hidden">
								{activeTab === "overview" && (
									<div>
										<p className="small-text uppercase text-[#21212166]">Private portal</p>
										<h2 className="font-FoundersGrotesk font-semibold uppercase text-[92px] leading-[0.82] md:text-[72px] sm:text-[58px] xm:text-[50px] tracking-[-2px] pt-[15px]">Welcome<br /><span className="text-[#fd4402]">{dashboard.client.contact_name || dashboard.client.company_name}</span></h2>
										<div className="grid grid-cols-3 gap-[12px] mt-[48px] md:grid-cols-1 sm:grid-cols-1 xm:grid-cols-1">
											<button onClick={() => setActiveTab("chat")} className="min-h-[235px] p-[22px] rounded-[16px] bg-white flex flex-col justify-between text-left group hover:bg-[#fd4402] hover:text-white transition-colors duration-300">
												<MessageCircle size={28} strokeWidth={1.4} />
												<div><p className="text-[42px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase">Messages</p><p className="text-[14px] opacity-60 pt-[10px]">{dashboard.messages.length} conversation item{dashboard.messages.length === 1 ? "" : "s"}</p></div>
											</button>
											<button onClick={() => setActiveTab("files")} className="min-h-[235px] p-[22px] rounded-[16px] bg-white flex flex-col justify-between text-left group hover:bg-[#212121] hover:text-white transition-colors duration-300">
												<FolderOpen size={28} strokeWidth={1.4} />
												<div><p className="text-[42px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase">Files</p><p className="text-[14px] opacity-60 pt-[10px]">{projectFiles.length} project file{projectFiles.length === 1 ? "" : "s"}</p></div>
											</button>
											<button onClick={() => setActiveTab("documents")} className="min-h-[235px] p-[22px] rounded-[16px] bg-white flex flex-col justify-between text-left group hover:bg-[#fd4402] hover:text-white transition-colors duration-300">
												<FileText size={28} strokeWidth={1.4} />
												<div><p className="text-[42px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase">Documents</p><p className="text-[14px] opacity-60 pt-[10px]">Contract, welcome letter and brand material</p></div>
											</button>
										</div>
										<div className="mt-[12px] bg-[#fd4402] text-white rounded-[16px] p-[26px] flex justify-between items-end gap-[30px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
											<div>
												<p className="small-text uppercase text-white/65">Privacy status</p>
												<h3 className="text-[52px] leading-[0.92] sm:text-[44px] xm:text-[40px] font-FoundersGrotesk font-semibold uppercase pt-[12px]">Marketing material consent: {dashboard.consent?.accepted ? "Active" : "Not active"}</h3>
											</div>
											<button onClick={() => setActiveTab("privacy")} className="border border-white rounded-full px-[17px] py-[9px] small-text uppercase hover:bg-white hover:text-[#fd4402] transition-colors">Review consent</button>
										</div>
									</div>
								)}

								{activeTab === "chat" && (
									<div className="h-[calc(100vh-105px)] min-h-[650px] flex flex-col">
										<div className="border-b border-[#21212122] pb-[18px] flex justify-between items-end gap-[20px]">
											<div><p className="small-text uppercase text-[#21212166]">Project communication</p><h2 className="font-FoundersGrotesk font-semibold uppercase text-[68px] leading-[0.85] sm:text-[54px] xm:text-[48px] pt-[8px]">Messages</h2></div>
											<span className="small-text uppercase text-[#21212155]">Refreshes automatically</span>
										</div>
										<div className="flex-1 overflow-y-auto py-[24px] pr-[5px] space-y-[12px]">
											{dashboard.messages.map((item) => (
												<div key={item.id} className={`max-w-[76%] sm:max-w-[90%] xm:max-w-[94%] ${item.sender_role === "client" ? "ml-auto" : "mr-auto"}`}>
													<div className={`rounded-[16px] px-[18px] py-[14px] ${item.sender_role === "client" ? "bg-[#fd4402] text-white rounded-br-[4px]" : "bg-white rounded-bl-[4px]"}`}>
														<p className="text-[16px] leading-[1.45] whitespace-pre-wrap">{item.body}</p>
													</div>
													<p className={`text-[11px] pt-[5px] text-[#21212155] ${item.sender_role === "client" ? "text-right" : "text-left"}`}>{item.sender_name} · {formatDate(item.created_at)}</p>
												</div>
											))}
											<div ref={chatEndRef} />
										</div>
										<form onSubmit={sendMessage} className="bg-white rounded-[16px] p-[10px] flex items-end gap-[10px]">
											<textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={5000} rows={2} placeholder="Write a message to GT Marketing…" className="flex-1 bg-transparent resize-none outline-none px-[10px] py-[8px] text-[16px]" />
											<button disabled={messageBusy || !message.trim()} className="w-[48px] h-[48px] shrink-0 rounded-full bg-[#fd4402] text-white flex items-center justify-center disabled:opacity-35 hover:bg-[#212121] transition-colors"><Send size={20} /></button>
										</form>
									</div>
								)}

								{activeTab === "files" && (
									<div>
										<p className="small-text uppercase text-[#21212166]">Shared project workspace</p>
										<h2 className="font-FoundersGrotesk font-semibold uppercase text-[76px] leading-[0.85] sm:text-[58px] xm:text-[50px] pt-[10px]">Files <span className="text-[#fd4402]">up to 50MB</span></h2>
										<label className={`mt-[35px] min-h-[210px] rounded-[18px] border border-dashed border-[#21212155] flex flex-col items-center justify-center text-center px-[25px] cursor-pointer hover:border-[#fd4402] hover:bg-white transition-colors ${uploading ? "opacity-55 pointer-events-none" : ""}`}>
											<UploadCloud size={34} strokeWidth={1.25} />
											<p className="text-[28px] font-FoundersGrotesk font-semibold uppercase pt-[14px]">Choose one or multiple files</p>
											<p className="text-[13px] text-[#21212166] pt-[6px]">Maximum 50 MB per file. Files remain private to this client workspace.</p>
											<input type="file" multiple className="hidden" onChange={(event) => uploadFiles(event.target.files)} />
										</label>
										{uploadStatus && <p className="mt-[12px] text-[14px] text-[#21212188]">{uploadStatus}</p>}
										<div className="mt-[40px] border-t border-[#21212133]">
											{projectFiles.length === 0 ? <p className="py-[28px] text-[#21212166]">No project files have been uploaded yet.</p> : projectFiles.map((file) => (
												<div key={file.id} className="grid grid-cols-12 gap-[15px] items-center py-[18px] border-b border-[#21212122] sm:flex sm:flex-wrap xm:flex xm:flex-wrap">
													<div className="col-span-1"><Paperclip size={20} /></div>
													<div className="col-span-7 sm:flex-1 xm:flex-1 min-w-0"><p className="text-[17px] truncate">{file.title || file.original_name}</p><p className="text-[12px] text-[#21212155] pt-[3px]">{formatBytes(file.size_bytes)} · {file.uploader_role === "admin" ? "GT Marketing" : "Uploaded by you"}</p></div>
													<p className="col-span-3 text-[12px] text-[#21212155] sm:hidden xm:hidden">{formatDate(file.created_at)}</p>
													<button onClick={() => downloadFile(file.id)} className="col-span-1 justify-self-end w-[40px] h-[40px] rounded-full border border-[#21212144] flex items-center justify-center hover:bg-[#fd4402] hover:text-white hover:border-[#fd4402] transition-colors"><ArrowDownToLine size={17} /></button>
												</div>
											))}
										</div>
									</div>
								)}

								{activeTab === "documents" && (
									<div>
										<p className="small-text uppercase text-[#21212166]">Engagement documents</p>
										<h2 className="font-FoundersGrotesk font-semibold uppercase text-[76px] leading-[0.85] sm:text-[58px] xm:text-[50px] pt-[10px]">Your project <span className="text-[#fd4402]">records</span></h2>
										<p className="paragraph max-w-[760px] text-[#212121aa] pt-[22px]">GT Marketing can place your signed contract, welcome letter, brand guidelines and other agreed documents here. Access is restricted to your client workspace.</p>
										<div className="grid grid-cols-2 gap-[12px] mt-[40px] sm:grid-cols-1 xm:grid-cols-1">
											{documents.length === 0 ? <div className="col-span-2 rounded-[16px] bg-white p-[28px] text-[#21212166]">Your project documents will appear here once GT Marketing uploads them.</div> : documents.map((file) => (
												<button key={file.id} onClick={() => downloadFile(file.id)} className="min-h-[245px] rounded-[16px] bg-white p-[22px] flex flex-col justify-between text-left group hover:bg-[#fd4402] hover:text-white transition-colors duration-300">
													<div className="flex justify-between"><FileText size={27} strokeWidth={1.3} /><ArrowDownToLine size={19} /></div>
													<div><p className="small-text uppercase opacity-50">{file.file_kind.replaceAll("_", " ")}</p><h3 className="text-[42px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase pt-[7px]">{file.title || file.original_name}</h3><p className="text-[12px] opacity-55 pt-[10px]">{formatBytes(file.size_bytes)} · {formatDate(file.created_at)}</p></div>
												</button>
											))}
										</div>
									</div>
								)}

								{activeTab === "privacy" && (
									<div>
										<p className="small-text uppercase text-[#21212166]">Privacy & project consent</p>
										<h2 className="font-FoundersGrotesk font-semibold uppercase text-[76px] leading-[0.85] sm:text-[58px] xm:text-[50px] pt-[10px]">Clear use of <span className="text-[#fd4402]">your data.</span></h2>
										<div className="grid grid-cols-12 gap-[16px] mt-[42px] sm:flex sm:flex-col xm:flex xm:flex-col">
											<div className="col-span-8 bg-white rounded-[16px] p-[28px]">
												<h3 className="text-[42px] leading-[0.92] font-FoundersGrotesk font-semibold uppercase">Consent to use project and brand materials</h3>
												<div className="paragraph text-[#212121aa] space-y-[16px] pt-[22px]">
													<p>I authorise GT Marketing to use the project materials I provide through this portal—including brand guidelines, logos, brand assets, copy, images, website information, campaign data and related marketing materials—only as reasonably necessary to deliver the marketing services agreed with my organisation.</p>
													<p>This consent does not transfer ownership of my organisation’s intellectual property to GT Marketing. Materials remain subject to the underlying contract, applicable licences and third-party rights.</p>
													<p>I understand that project materials and communications may be processed or stored using infrastructure and software providers used by GT Marketing to deliver the service. I should not upload passwords, payment card details, government identifiers, health information or other highly sensitive information unless GT Marketing has specifically requested it and appropriate handling has been agreed.</p>
												</div>
												<div className="mt-[28px] flex flex-wrap gap-[10px]">
													<button disabled={consentBusy} onClick={() => recordConsent(true)} className="bg-[#fd4402] text-white rounded-full px-[18px] py-[10px] small-text uppercase disabled:opacity-50 hover:bg-[#212121] transition-colors">I consent</button>
													<button disabled={consentBusy} onClick={() => recordConsent(false)} className="border border-[#21212166] rounded-full px-[18px] py-[10px] small-text uppercase disabled:opacity-50 hover:bg-[#212121] hover:text-white transition-colors">Withdraw portal consent</button>
												</div>
											</div>
											<div className="col-span-4 space-y-[12px]">
												<div className="bg-[#212121] text-white rounded-[16px] p-[22px]"><p className="small-text uppercase text-white/50">Current status</p><p className="text-[42px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase pt-[12px]">{dashboard.consent?.accepted ? "Consent active" : "No active consent"}</p>{dashboard.consent && <p className="text-[12px] text-white/45 pt-[13px]">Recorded {formatDate(dashboard.consent.recorded_at)}</p>}</div>
												<div className="bg-[#fd4402] text-white rounded-[16px] p-[22px]"><ShieldCheck size={27} /><p className="text-[16px] leading-[1.4] pt-[25px]">Access is limited to your registered email and unique code. Downloads are issued through short-lived secure links.</p></div>
												<div className="bg-white rounded-[16px] p-[22px]"><p className="text-[14px] leading-[1.5] text-[#21212199]">For broader information about collection, use and disclosure of personal information, review the GT Marketing <Link href="/privacy" className="underline text-[#212121] hover:text-[#fd4402]">Privacy Policy</Link>. Portal consent should be read together with your signed service agreement.</p></div>
											</div>
										</div>
									</div>
								)}
							</section>
						</div>
					</div>
				)}
			</main>
		</>
	);
}
