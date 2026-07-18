"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Form() {
	const [submitState, setSubmitState] = useState<SubmitState>("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitState("submitting");
		setErrorMessage("");

		const form = event.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(
					Array.from(formData.entries()).map(([key, value]) => [
						key,
						String(value),
					]),
				).toString(),
			});

			if (!response.ok) {
				throw new Error("The enquiry could not be submitted.");
			}

			form.reset();
			setSubmitState("success");
		} catch (error) {
			setSubmitState("error");
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Something went wrong. Please email gundeep@gtmarketing.io.",
			);
		}
	};

	const inputClass =
		"paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full";

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
				<input
					type="hidden"
					name="subject"
					value="New GT Marketing enquiry from %{formName} (%{submissionId})"
				/>
				<p className="absolute overflow-hidden h-px w-px -m-px p-0 border-0 [clip:rect(0_0_0_0)]">
					<label>
						Do not fill this out: <input name="bot-field" />
					</label>
				</p>

				<div className="w-full flex flex-col gap-[15px]">
					<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
						<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									Hi! My name is
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="name"
									placeholder="Enter your name*"
									required
									autoComplete="name"
									className={inputClass}
								/>
							</div>
						</div>
						<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									and I work with
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="company"
									placeholder="Company name type here*"
									required
									autoComplete="organization"
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									I’m looking for a partner to help me with
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="goal"
									placeholder="Your goal type here*"
									required
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									With an idea of having that completed
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="deadline"
									placeholder="Date*"
									required
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									I am hoping to stay around a budget range of
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="budget"
									placeholder="Select*"
									required
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									You can reach me at
								</h2>
							</div>
							<div className="w-full">
								<input
									type="email"
									name="email"
									placeholder="name@example.com"
									required
									autoComplete="email"
									className={inputClass}
								/>
							</div>
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									to start the conversation.
								</h2>
							</div>
						</div>
					</div>

					<div className="w-full flex gap-[10px]">
						<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
							<div className="xl:min-w-max lg:min-w-max md:min-w-max">
								<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
									Optionally, i’m sharing more:
								</h2>
							</div>
							<div className="w-full">
								<input
									type="text"
									name="details"
									placeholder="Product details type here..."
									className={inputClass}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
					<div className="flex sm:flex-col xm:flex-col gap-[25px]">
						<div className="flex gap-[10px] items-center">
							<div className="flex gap-[10px]">
								<input
									type="checkbox"
									name="privacy_consent"
									value="yes"
									required
									className="w-[30px]"
								/>
								<p className="paragraph text-secondry font-NeueMontreal font-normal">
									I agree with the
								</p>
							</div>
							<Link
								className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
								href="/privacy">
								Privacy Policy
							</Link>
						</div>

						<button
							type="submit"
							disabled={submitState === "submitting"}
							className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group disabled:cursor-not-allowed disabled:opacity-60">
							<Rounded className="py-[6px]" backgroundColor="#212121">
								<p
									className="small-text uppercase font-normal font-NeueMontreal z-10 px-[10px] ml-[15px] py-[6px]"
									style={{ color: "#fff" }}>
									{submitState === "submitting" ? "sending..." : "send inquiry"}
								</p>
								<div className="p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] bg-white text-black">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</button>
					</div>
				</div>

				<div aria-live="polite" className="w-full pt-[30px]">
					{submitState === "success" && (
						<div className="rounded-[20px] bg-[#ff4b00] px-[26px] py-[24px] text-white">
							<h3 className="text-[30px] leading-none font-semibold font-FoundersGrotesk uppercase">
								Enquiry received
							</h3>
							<p className="paragraph font-NeueMontreal pt-[8px]">
								Thank you. Your details have been received and GT Marketing will respond shortly.
							</p>
						</div>
					)}
					{submitState === "error" && (
						<div className="rounded-[20px] border border-red-600 px-[26px] py-[20px] text-red-700">
							<p className="paragraph font-NeueMontreal">
								{errorMessage} You can also contact gundeep@gtmarketing.io.
							</p>
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
