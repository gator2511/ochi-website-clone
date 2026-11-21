"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import site from "@/content/data/site.json";
import { isAcceptedNetlifyFormResponse, trackSuccessfulFreeSeoAuditSubmit } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

const FORM_NAME = "free-seo-audit";
const FORM_ENDPOINT = "/__forms.html";
const ERROR_FALLBACK = "The request was not sent. Please call 0405 312 275 or email gundeep@gtmarketing.io.";

export default function FreeSeoAuditForm() {
	const [submitState, setSubmitState] = useState<SubmitState>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitState("submitting");
		setErrorMessage("");
		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, String(value)])).toString(),
			});
			const body = await response.text();
			if (!isAcceptedNetlifyFormResponse(response.status, body)) throw new Error(ERROR_FALLBACK);

			form.reset();
			trackSuccessfulFreeSeoAuditSubmit();
			setSubmitState("success");
		} catch (error) {
			setSubmitState("error");
			setErrorMessage(error instanceof Error ? error.message : ERROR_FALLBACK);
		}
	};

	const inputClass =
		"w-full min-w-0 rounded-[14px] border border-[#21212122] bg-white px-[16px] py-[15px] text-[17px] leading-[1.35] font-NeueMontreal text-[#212121] outline-none transition focus:border-[#fd4402] focus:ring-2 focus:ring-[#fd440222] placeholder:text-[#21212166]";
	const labelClass = "block pb-[8px] text-[14px] uppercase tracking-[0.08em] font-NeueMontreal text-[#21212199]";

	return (
		<div className="rounded-[24px] bg-[#f1f1f1] p-[34px] md:p-[28px] sm:p-[22px] xm:p-[20px] text-[#212121]">
			{submitState === "success" ? (
				<div role="status" aria-live="polite">
					<div className="h-[58px] w-[58px] rounded-full bg-[#fd4402] text-white flex items-center justify-center">
						<Check size={28} />
					</div>
					<h3 className="pt-[28px] text-[56px] leading-[0.9] sm:text-[44px] xm:text-[36px] uppercase font-FoundersGrotesk font-semibold">
						Request received.
					</h3>
					<p className="paragraph max-w-[560px] pt-[18px] text-[#212121aa]">
						Thanks. We will use this to prepare the free local SEO audit and the short written report. There is no obligation.
					</p>
					<a
						href={`tel:${site.phoneTel}`}
						data-track-location="free_seo_audit_success"
						className="mt-[30px] inline-flex w-fit max-w-full items-center gap-[10px] rounded-full bg-[#212121] px-[20px] py-[13px] text-white small-text uppercase hover:bg-[#fd4402] transition-colors">
						Call {site.phoneDisplay}
						<ArrowUpRight size={18} />
					</a>
				</div>
			) : (
				<form
					name={FORM_NAME}
					method="POST"
					action={FORM_ENDPOINT}
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={handleSubmit}
					className="relative">
					<input type="hidden" name="form-name" value={FORM_NAME} />
					<input type="hidden" name="subject" value="Free local SEO audit request" />
					<p className="absolute overflow-hidden h-px w-px -m-px p-0 border-0 [clip:rect(0_0_0_0)]">
						<label>
							Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
						</label>
					</p>

					<div className="grid grid-cols-2 gap-[16px] sm:grid-cols-1 xm:grid-cols-1">
						<label className="min-w-0">
							<span className={labelClass}>Name</span>
							<input type="text" name="name" placeholder="Your name" required autoComplete="name" className={inputClass} />
						</label>
						<label className="min-w-0">
							<span className={labelClass}>Business name</span>
							<input type="text" name="business-name" placeholder="Business name" required autoComplete="organization" className={inputClass} />
						</label>
						<label className="min-w-0">
							<span className={labelClass}>Website URL (optional)</span>
							<input type="url" name="website" placeholder="https://example.com.au" autoComplete="url" className={inputClass} />
						</label>
						<label className="min-w-0">
							<span className={labelClass}>Phone</span>
							<input type="tel" name="phone" placeholder="Your mobile number" required autoComplete="tel" className={inputClass} />
						</label>
						<label className="min-w-0">
							<span className={labelClass}>Email (optional)</span>
							<input type="email" name="email" placeholder="name@example.com" autoComplete="email" className={inputClass} />
						</label>
						<label className="min-w-0">
							<span className={labelClass}>Main service and suburb</span>
							<input type="text" name="service-suburb" placeholder="For example: plumber, Palmerston" required className={inputClass} />
						</label>
					</div>

					<p className="pt-[14px] text-[13px] leading-[1.5] font-NeueMontreal text-[#21212188]">
						Email is optional. Add it if you want the written report sent that way. Phone is how we can reach you either way.
					</p>

					<div className="pt-[22px] flex flex-wrap items-end justify-between gap-[16px]">
						<p className="max-w-[430px] text-[13px] leading-[1.5] font-NeueMontreal text-[#21212188]">
							We only use your details to prepare the audit and reply to you. Read our{" "}
							<Link href="/privacy" className="underline underline-offset-4 hover:text-[#fd4402]">
								Privacy Policy
							</Link>
							.
						</p>
						<button
							type="submit"
							disabled={submitState === "submitting"}
							className="group inline-flex shrink-0 items-center justify-center gap-[12px] whitespace-nowrap rounded-full bg-[#fd4402] px-[22px] py-[15px] text-white small-text uppercase hover:bg-[#212121] transition-colors disabled:cursor-not-allowed disabled:opacity-60">
							{submitState === "submitting" ? "Sending..." : "Request the free audit"}
							<ArrowUpRight size={18} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
						</button>
					</div>

					{submitState === "error" && (
						<div role="alert" aria-live="polite" className="mt-[20px] rounded-[14px] border border-red-500 bg-red-50 px-[16px] py-[14px] text-red-700">
							<p className="text-[14px] font-NeueMontreal">{errorMessage || ERROR_FALLBACK}</p>
						</div>
					)}
				</form>
			)}
		</div>
	);
}
