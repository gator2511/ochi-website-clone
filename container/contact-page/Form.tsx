"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";

type SubmitState = "idle" | "submitting" | "success" | "error";
type FormContent = {
	nameLabel: string;
	namePlaceholder: string;
	companyLabel: string;
	companyPlaceholder: string;
	goalLabel: string;
	goalPlaceholder: string;
	deadlineLabel: string;
	deadlinePlaceholder: string;
	budgetLabel: string;
	budgetPlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	emailSuffix: string;
	detailsLabel: string;
	detailsPlaceholder: string;
	consentLabel: string;
	privacyLabel: string;
	submitLabel: string;
	sendingLabel: string;
	successHeading: string;
	successMessage: string;
	errorFallback: string;
};

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
			const response = await fetch("/contact-form.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(
					Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
				).toString(),
			});
			if (!response.ok) throw new Error("The enquiry could not be submitted.");
			form.reset();
			setSubmitState("success");
		} catch (error) {
			setSubmitState("error");
			setErrorMessage(error instanceof Error ? error.message : content.errorFallback);
		}
	};

	const inputClass =
		"paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full";
	const labelClass = "sub-heading font-NeueMontreal font-normal text-secondry";

	return (
		<section className="w-full padding-x padding-y">
			<form
				name="gt-marketing-contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={handleSubmit}
				className="w-full">
				<input type="hidden" name="form-name" value="gt-marketing-contact" />
				<input type="hidden" name="subject" value="New GT Marketing enquiry from %{formName} (%{submissionId})" />
				<p className="absolute overflow-hidden h-px w-px -m-px p-0 border-0 [clip:rect(0_0_0_0)]">
					<label>Do not fill this out: <input name="bot-field" /></label>
				</p>

				<div className="w-full flex flex-col gap-[15px]">
					<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
						<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
							<h2 data-sb-field-path="form.nameLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.nameLabel}</h2>
							<input type="text" name="name" placeholder={content.namePlaceholder} required autoComplete="name" data-sb-field-path="form.namePlaceholder" className={inputClass} />
						</div>
						<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
							<h2 data-sb-field-path="form.companyLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.companyLabel}</h2>
							<input type="text" name="company" placeholder={content.companyPlaceholder} required autoComplete="organization" data-sb-field-path="form.companyPlaceholder" className={inputClass} />
						</div>
					</div>

					<div className="w-full flex gap-[10px] sm:flex-col xm:flex-col">
						<h2 data-sb-field-path="form.goalLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.goalLabel}</h2>
						<input type="text" name="goal" placeholder={content.goalPlaceholder} required data-sb-field-path="form.goalPlaceholder" className={inputClass} />
					</div>
					<div className="w-full flex gap-[10px] sm:flex-col xm:flex-col">
						<h2 data-sb-field-path="form.deadlineLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.deadlineLabel}</h2>
						<input type="text" name="deadline" placeholder={content.deadlinePlaceholder} required data-sb-field-path="form.deadlinePlaceholder" className={inputClass} />
					</div>
					<div className="w-full flex gap-[10px] sm:flex-col xm:flex-col">
						<h2 data-sb-field-path="form.budgetLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.budgetLabel}</h2>
						<input type="text" name="budget" placeholder={content.budgetPlaceholder} required data-sb-field-path="form.budgetPlaceholder" className={inputClass} />
					</div>
					<div className="w-full flex gap-[10px] sm:flex-col xm:flex-col">
						<h2 data-sb-field-path="form.emailLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.emailLabel}</h2>
						<input type="email" name="email" placeholder={content.emailPlaceholder} required autoComplete="email" data-sb-field-path="form.emailPlaceholder" className={inputClass} />
						<h2 data-sb-field-path="form.emailSuffix" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.emailSuffix}</h2>
					</div>
					<div className="w-full flex gap-[10px] sm:flex-col xm:flex-col">
						<h2 data-sb-field-path="form.detailsLabel" className={`${labelClass} xl:min-w-max lg:min-w-max md:min-w-max`}>{content.detailsLabel}</h2>
						<input type="text" name="details" placeholder={content.detailsPlaceholder} data-sb-field-path="form.detailsPlaceholder" className={inputClass} />
					</div>
				</div>

				<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
					<div className="flex sm:flex-col xm:flex-col gap-[25px]">
						<div className="flex gap-[10px] items-center">
							<input type="checkbox" name="privacy_consent" value="yes" required className="w-[30px]" />
							<p data-sb-field-path="form.consentLabel" className="paragraph text-secondry font-NeueMontreal font-normal">{content.consentLabel}</p>
							<Link data-sb-field-path="form.privacyLabel" className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover" href="/privacy">{content.privacyLabel}</Link>
						</div>
						<button type="submit" disabled={submitState === "submitting"} className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group disabled:cursor-not-allowed disabled:opacity-60">
							<Rounded className="py-[6px]" backgroundColor="#212121">
								<p data-sb-field-path="form.submitLabel" className="small-text uppercase font-normal font-NeueMontreal z-10 px-[10px] ml-[15px] py-[6px]" style={{ color: "#fff" }}>
									{submitState === "submitting" ? content.sendingLabel : content.submitLabel}
								</p>
								<div className="p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] bg-white text-black">
									<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1]" />
								</div>
							</Rounded>
						</button>
					</div>
				</div>

				<div aria-live="polite" className="w-full pt-[30px]">
					{submitState === "success" && (
						<div className="rounded-[20px] bg-[#ff4b00] px-[26px] py-[24px] text-white">
							<h3 data-sb-field-path="form.successHeading" className="text-[30px] leading-none font-semibold font-FoundersGrotesk uppercase">{content.successHeading}</h3>
							<p data-sb-field-path="form.successMessage" className="paragraph font-NeueMontreal pt-[8px]">{content.successMessage}</p>
						</div>
					)}
					{submitState === "error" && (
						<div className="rounded-[20px] border border-red-600 px-[26px] py-[20px] text-red-700">
							<p className="paragraph font-NeueMontreal">{errorMessage || content.errorFallback}</p>
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
