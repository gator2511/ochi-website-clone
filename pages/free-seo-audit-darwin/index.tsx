"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Curve } from "@/components";
import FAQStructuredData from "@/components/FAQStructuredData";
import FreeSeoAuditForm from "@/components/FreeSeoAuditForm";
import site from "@/content/data/site.json";

/**
 * Copy assumptions for GT to confirm before this page is treated as final:
 * - Turnaround is stated only as "usually within a few business days".
 * - The written report is described as a short report with priority fixes.
 *   The exact contents of that report are not specified beyond that.
 * - The optional walkthrough is a 15-minute call.
 * - When an email is provided, the report can be sent that way. Phone is the required contact.
 */

const CHECKS = [
	{
		title: "Google Business Profile",
		text: "The public profile: name, address, phone, category, hours, services and photos, and whether those details match the website.",
	},
	{
		title: "Google Maps and local search",
		text: "How the business shows up in Google Maps and in local search for the main services you tell us about.",
	},
	{
		title: "Website",
		text: "Speed, how the site works on a mobile phone, and basic on-page SEO: the title, the headings, and whether the page says what you do and where you work.",
	},
	{
		title: "Reviews",
		text: "Whether recent reviews are visible on the profile, and whether the business has replied to them.",
	},
	{
		title: "Competitors nearby",
		text: "A look at other businesses Google is already showing for the same services in the area.",
	},
];

const FAQS = [
	{
		question: "Is the local SEO audit really free?",
		answer:
			"Yes. The audit and the short written report are free. There is no obligation to take any other work.",
	},
	{
		question: "What do I need to provide?",
		answer:
			"Your name, business name, phone number, and your main service and suburb. A website address and an email are useful, and both are optional.",
	},
	{
		question: "How long does the audit take?",
		answer: "Usually within a few business days.",
	},
	{
		question: "Do I have to sign up for the monthly plan?",
		answer:
			"No. You can take the audit and the report without signing up. If you want the work done month to month, the plan is $595 + GST a month, priced until the end of November 2026, with a 3-month minimum. The $595 is the management fee. Ad spend is paid separately, directly to Google.",
	},
];

export default function FreeSeoAuditDarwin() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<main className="overflow-x-clip bg-[#f1f1f1] text-[#212121]">
				<FAQStructuredData
					items={FAQS.map((item) => ({
						question: item.question,
						description: item.answer,
					}))}
				/>

				<section className="padding-x pt-[150px] pb-[70px] sm:pt-[120px] xm:pt-[110px]">
					<div className="grid grid-cols-12 gap-[28px] items-end sm:flex sm:flex-col xm:flex xm:flex-col">
						<div className="col-span-7 min-w-0">
							<p className="small-text uppercase tracking-[0.12em] text-[#21212188]">
								Darwin, Palmerston, Casuarina and the NT
							</p>
							<h1 className="pt-[18px] max-w-[12em] font-FoundersGrotesk font-semibold text-[76px] leading-[0.9] lg:text-[64px] md:text-[52px] sm:text-[40px] xm:text-[34px]">
								Free local SEO audit for Darwin businesses
							</h1>
							<p className="paragraph max-w-[640px] pt-[22px]">
								GT Marketing will look at how your business shows up in local search and send a short written report. The audit is free. There is no obligation to take any other work.
							</p>
							<div className="pt-[28px] flex flex-wrap items-center gap-[12px]">
								<a
									href="#audit-form"
									className="inline-flex items-center gap-[10px] rounded-full bg-[#fd4402] px-[22px] py-[14px] text-white small-text uppercase hover:bg-[#212121] transition-colors">
									Request the free audit
									<ArrowUpRight size={18} />
								</a>
								<a
									href={`tel:${site.phoneTel}`}
									data-track-location="free_seo_audit_hero"
									className="inline-flex items-center gap-[10px] rounded-full border border-[#212121] px-[20px] py-[14px] small-text uppercase hover:bg-white transition-colors">
									Call {site.phoneDisplay}
								</a>
							</div>
						</div>
						<div className="col-span-5 relative h-[460px] w-full min-w-0 overflow-hidden rounded-[24px] bg-[#e7e3dd] md:h-[380px] sm:h-[240px] xm:h-[200px]">
							<Image
								src="/blog/local-seo-checklist-darwin-palmerston.jpg"
								alt="Darwin city and harbour at sunset"
								fill
								priority
								sizes="(max-width: 768px) 100vw, 42vw"
								className="object-cover"
							/>
						</div>
					</div>
				</section>

				<section className="padding-x pb-[70px]">
					<h2 className="text-[48px] leading-[0.95] font-FoundersGrotesk font-semibold uppercase md:text-[40px] sm:text-[34px] xm:text-[30px]">
						What the audit checks
					</h2>
					<p className="paragraph max-w-[720px] pt-[16px] text-[#212121aa]">
						Plain checks on the public information a nearby customer would see. Nothing here is a promise about a Google ranking.
					</p>
					<ul className="pt-[22px] grid grid-cols-2 gap-[12px] sm:grid-cols-1 xm:grid-cols-1">
						{CHECKS.map((item, index) => (
							<li key={item.title} className="min-w-0 rounded-[16px] border border-[#21212133] p-[22px] sm:p-[18px]">
								<p className="small-text text-[#fd4402]">0{index + 1}</p>
								<h3 className="pt-[14px] text-[32px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold sm:text-[28px] xm:text-[26px]">
									{item.title}
								</h3>
								<p className="paragraph pt-[12px] text-[#212121aa]">{item.text}</p>
							</li>
						))}
					</ul>
				</section>

				<section className="padding-x pb-[70px]">
					<div className="grid grid-cols-2 gap-[14px] sm:grid-cols-1 xm:grid-cols-1">
						<article className="min-w-0 rounded-[18px] bg-[#212121] text-white p-[28px] sm:p-[22px]">
							<h2 className="text-[40px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold sm:text-[32px] xm:text-[28px]">
								What you get
							</h2>
							<ul className="pt-[18px] space-y-[12px]">
								<li className="paragraph text-white/80">A short written report with priority fixes.</li>
								<li className="paragraph text-white/80">An optional 15-minute call to walk through the report.</li>
							</ul>
						</article>
						<article className="min-w-0 rounded-[18px] border border-[#21212133] p-[28px] sm:p-[22px]">
							<h2 className="text-[40px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold sm:text-[32px] xm:text-[28px]">
								Who it is for
							</h2>
							<p className="paragraph pt-[18px] text-[#212121aa]">
								Small businesses in Darwin, Palmerston, Casuarina and the NT. GT Marketing’s office is at 130 Smith Street, Darwin City. Palmerston and Casuarina are service areas, not extra offices.
							</p>
							<p className="paragraph pt-[14px] font-medium">There is no obligation.</p>
						</article>
					</div>
				</section>

				<section className="padding-x pb-[80px]">
					<div className="rounded-[20px] border border-[#21212133] p-[28px] sm:p-[22px]">
						<p className="small-text uppercase tracking-[0.12em] text-[#21212188]">If you want the work done</p>
						<h2 className="pt-[12px] max-w-[16em] text-[48px] leading-[0.95] font-FoundersGrotesk font-semibold uppercase md:text-[40px] sm:text-[34px] xm:text-[30px]">
							All Your Marketing. One Simple Monthly Fee.
						</h2>
						<p className="paragraph max-w-[760px] pt-[16px]">
							The audit shows what to fix first. Ongoing help is a separate choice. The monthly plan is $595 + GST a month, priced until the end of November 2026. There is a 3-month minimum. The $595 is the management fee. Ad spend is paid separately, directly to Google.
						</p>
						<Link
							href="/marketing-packages-darwin"
							className="mt-[22px] inline-flex max-w-full items-center gap-[10px] rounded-full border border-[#212121] px-[20px] py-[14px] small-text uppercase hover:bg-[#212121] hover:text-white transition-colors">
							See the $595 + GST monthly plan
							<ArrowUpRight size={18} className="shrink-0" />
						</Link>
					</div>
				</section>

				<section id="audit-form" className="w-full bg-[#212121] text-white padding-x py-[90px] sm:py-[70px] xm:py-[60px] rounded-t-[28px] scroll-mt-[20px]">
					<div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<div className="col-span-5 min-w-0">
							<p className="small-text uppercase tracking-[0.12em] text-white/55">Free audit</p>
							<h2 className="pt-[16px] text-[64px] leading-[0.88] uppercase font-FoundersGrotesk font-semibold md:text-[52px] sm:text-[42px] xm:text-[36px]">
								Request the free audit
							</h2>
							<p className="paragraph max-w-[460px] pt-[18px] text-white/70">
								Name, business, phone, and the main service and suburb are enough to start. Website and email are optional.
							</p>
							<a
								href={`tel:${site.phoneTel}`}
								data-track-location="free_seo_audit_form"
								className="mt-[28px] inline-flex max-w-full items-center gap-[10px] text-white hover:text-[#fd4402] transition-colors">
								<span className="paragraph">Call {site.phoneDisplay}</span>
								<ArrowUpRight size={18} />
							</a>
						</div>
						<div className="col-span-7 min-w-0">
							<FreeSeoAuditForm />
						</div>
					</div>
				</section>

				<section className="padding-x padding-y">
					<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<h2 className="col-span-4 self-start text-[48px] leading-[0.95] font-FoundersGrotesk font-semibold uppercase md:text-[40px] sm:text-[34px] xm:text-[30px]">
							Questions
						</h2>
						<div className="col-start-6 col-span-7 min-w-0 border-t border-[#2121212f] sm:w-full xm:w-full">
							{FAQS.map((faq) => (
								<details key={faq.question} className="group border-b border-[#2121212f] py-[24px]">
									<summary className="paragraph font-medium cursor-pointer list-none flex justify-between gap-[20px]">
										{faq.question}
										<span className="text-[#fd4402] group-open:rotate-45 transition-transform">+</span>
									</summary>
									<p className="paragraph text-[#212121aa] max-w-[850px] pt-[20px] pr-[20px]">{faq.answer}</p>
								</details>
							))}
						</div>
					</div>
				</section>
			</main>
		</Curve>
	);
}
