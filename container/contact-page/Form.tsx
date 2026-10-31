"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";
import TrustSignals from "@/components/TrustSignals";
import site from "@/content/data/site.json";
import { isAcceptedNetlifyFormResponse, trackSuccessfulContactSubmit } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

type FormContent = {
	nameLabel: string;
	namePlaceholder: string;
	phoneLabel: string;
	phonePlaceholder: string;
	needLabel: string;
	needPlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	privacyNote: string;
	privacyLabel: string;
	submitLabel: string;
	sendingLabel: string;
	successHeading: string;
	successMessage: string;
	errorFallback: string;
	auditLine: string;
	offerLinkLabel: string;
	offerLinkNote: string;
};

const FORM_ENDPOINT = "/__forms.html";

export default function Form({ content }: { content: FormContent }) {
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
			if (!isAcceptedNetlifyFormResponse(response.status, body)) {
				throw new Error(content.errorFallback);
			}
			form.reset();
			trackSuccessfulContactSubmit();
			setSubmitState("success");
		} catch (error) {
			setSubmitState("error");
			setErrorMessage(error instanceof Error ? error.message : content.errorFallback);
		}
	};

	const inputClass =
		"paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-left outline-none focus:placeholder:opacity-0 mt-[8px] transform transition duration-200 ease-in-out";
	const labelClass = "sub-heading font-NeueMontreal font-normal text-secondry";

	return (
		<section className="w-full padding-x padding-y">
			<div className="grid grid-cols-12 gap-[28px] items-start sm:flex sm:flex-col xm:flex xm:flex-col">
				<div className="col-span-7 w-full">
					<a
						href={`tel:${site.phoneTel}`}
						data-track-location="contact"
						className="flex w-full items-center justify-center rounded-full bg-[#fd4402] px-[24px] py-[22px] text-center text-[40px] leading-[1] sm:text-[32px] xm:text-[28px] font-FoundersGrotesk font-semibold text-white hover:bg-[#212121] transition-colors">
						{site.phoneDisplay}
					</a>
					<p className="pt-[14px] text-[22px] leading-[1.3] font-NeueMontreal font-medium text-secondry">{content.auditLine}</p>
					<p className="pt-[10px] paragraph font-NeueMontreal">
						<Link href="/marketing-packages-darwin" className="underline underline-offset-4 hover:text-[#fd4402]">
							{content.offerLinkLabel}
						</Link>{" "}
						{content.offerLinkNote}
					</p>

					{submitState === "success" ? (
						<div role="status" aria-live="polite" className="mt-[28px] rounded-[20px] bg-[#212121] px-[26px] py-[28px] text-white">
							<h2 className="text-[42px] leading-[0.95] font-semibold font-FoundersGrotesk uppercase">{content.successHeading}</h2>
							<p className="paragraph font-NeueMontreal pt-[12px] text-white">{content.successMessage}</p>
							<a href={`tel:${site.phoneTel}`} data-track-location="contact_success" className="mt-[18px] inline-block underline underline-offset-4 text-white">
								Call {site.phoneDisplay}
							</a>
						</div>
					) : (
						<form
							name="gt-marketing-contact"
							method="POST"
							action={FORM_ENDPOINT}
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							onSubmit={handleSubmit}
							className="w-full pt-[28px]">
							<input type="hidden" name="form-name" value="gt-marketing-contact" />
							<input type="hidden" name="subject" value="New GT Marketing enquiry" />
							<p className="absolute overflow-hidden h-px w-px -m-px p-0 border-0 [clip:rect(0_0_0_0)]">
								<label>
									Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
								</label>
							</p>

							<div className="flex flex-col gap-[18px]">
								<label className="block">
									<span className={labelClass}>{content.nameLabel}</span>
									<input type="text" name="name" placeholder={content.namePlaceholder} required autoComplete="name" className={inputClass} />
								</label>
								<label className="block">
									<span className={labelClass}>{content.phoneLabel}</span>
									<input type="tel" name="phone" placeholder={content.phonePlaceholder} required autoComplete="tel" className={inputClass} />
								</label>
								<label className="block">
									<span className={labelClass}>{content.needLabel}</span>
									<textarea name="need" placeholder={content.needPlaceholder} required rows={4} className={`${inputClass} resize-y`} />
								</label>
								<label className="block">
									<span className={labelClass}>{content.emailLabel}</span>
									<input type="email" name="email" placeholder={content.emailPlaceholder} autoComplete="email" className={inputClass} />
								</label>
							</div>

							<p className="paragraph font-NeueMontreal pt-[22px]">
								{content.privacyNote}{" "}
								<Link className="underline underline-offset-4 hover:text-[#fd4402]" href="/privacy">
									{content.privacyLabel}
								</Link>
								.
							</p>

							<div className="pt-[22px]">
								<button type="submit" disabled={submitState === "submitting"} className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group disabled:cursor-not-allowed disabled:opacity-60">
									<Rounded className="py-[6px]" backgroundColor="#212121">
										<p className="small-text uppercase font-normal font-NeueMontreal z-10 px-[10px] ml-[15px] py-[6px]" style={{ color: "#fff" }}>
											{submitState === "submitting" ? content.sendingLabel : content.submitLabel}
										</p>
										<div className="p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] bg-white text-black">
											<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1]" />
										</div>
									</Rounded>
								</button>
							</div>

							<div aria-live="polite" className="w-full pt-[22px]">
								{submitState === "error" && (
									<div role="alert" className="rounded-[20px] border border-red-600 px-[26px] py-[20px] text-red-700">
										<p className="paragraph font-NeueMontreal">{errorMessage || content.errorFallback}</p>
									</div>
								)}
							</div>
						</form>
					)}
				</div>
				<div className="col-span-5 w-full">
					<TrustSignals variant="contact" />
				</div>
			</div>
		</section>
	);
}
