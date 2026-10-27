"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FAQStructuredData from "@/components/FAQStructuredData";
import site from "@/content/data/site.json";

type ServiceContent = {
	hero: {
		eyebrow: string;
		h1: string;
		intro: string;
		ctaLabel: string;
		ctaUrl: string;
	};
	included: {
		eyebrow: string;
		heading: string;
		intro: string;
		items: Array<{ title: string; description: string }>;
	};
	audiences: {
		eyebrow: string;
		heading: string;
		intro: string;
		items: Array<{ title: string; description: string }>;
	};
	process: {
		eyebrow: string;
		heading: string;
		items: Array<{ number: string; title: string; description: string }>;
	};
	local: {
		eyebrow: string;
		heading: string;
		paragraphs: string[];
	};
	related: {
		heading: string;
		intro: string;
		links: Array<{ label: string; url: string }>;
	};
	faqsHeading: string;
	faqs: Array<{ question: string; answer: string }>;
	closing: {
		eyebrow: string;
		heading: string;
		text: string;
		ctaLabel: string;
		ctaUrl: string;
	};
};

function PhoneLink({ className = "" }: { className?: string }) {
	return (
		<a href={`tel:${site.phoneTel}`} className={`underline underline-offset-4 hover:text-[#fd4402] transition-colors ${className}`}>
			{site.phoneDisplay}
		</a>
	);
}

export default function ServiceLanding({
	content,
	documentId,
}: {
	content: ServiceContent;
	documentId: string;
}) {
	return (
		<main data-sb-object-id={documentId} className="overflow-hidden bg-background text-secondry">
			<FAQStructuredData
				items={content.faqs.map((item) => ({
					question: item.question,
					description: item.answer,
				}))}
			/>

			<section className="min-h-[88vh] padding-x pt-[170px] pb-[70px] flex flex-col justify-between sm:pt-[135px] xm:pt-[125px]">
				<div>
					<p data-sb-field-path="hero.eyebrow" className="small-text uppercase tracking-[0.12em] font-NeueMontreal text-secondry/65">
						{content.hero.eyebrow}
					</p>
					<h1
						data-sb-field-path="hero.h1"
						className="pt-[26px] max-w-[1400px] uppercase font-FoundersGrotesk font-semibold text-[132px] leading-[0.82] lg:text-[108px] md:text-[84px] sm:text-[64px] xm:text-[52px]">
						{content.hero.h1}
					</h1>
				</div>
				<div className="grid grid-cols-12 gap-[30px] items-end pt-[60px] sm:flex sm:flex-col sm:items-start xm:flex xm:flex-col xm:items-start">
					<p data-sb-field-path="hero.intro" className="col-span-7 paragraph font-NeueMontreal max-w-[760px]">
						{content.hero.intro}
					</p>
					<div className="col-span-5 flex flex-col items-end gap-[16px] sm:items-start xm:items-start">
						<Link
							href={content.hero.ctaUrl}
							data-sb-field-path="hero.ctaLabel"
							className="group inline-flex items-center gap-[14px] rounded-full border border-secondry px-[22px] py-[14px] uppercase small-text font-NeueMontreal transition-colors duration-300 hover:bg-[#fd4402] hover:border-[#fd4402] hover:text-white">
							{content.hero.ctaLabel}
							<ArrowUpRight size={20} strokeWidth={1.5} />
						</Link>
						<p className="paragraph font-NeueMontreal">
							Or call <PhoneLink />
						</p>
					</div>
				</div>
			</section>

			<section className="padding-x padding-y border-t border-[#2121212f]">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<p data-sb-field-path="included.eyebrow" className="col-span-3 small-text uppercase tracking-[0.12em] text-secondry/55 font-NeueMontreal">
						{content.included.eyebrow}
					</p>
					<div className="col-span-9">
						<h2 data-sb-field-path="included.heading" className="sub-heading font-NeueMontreal max-w-[820px]">
							{content.included.heading}
						</h2>
						<p data-sb-field-path="included.intro" className="paragraph font-NeueMontreal text-secondry/75 max-w-[760px] pt-[22px]">
							{content.included.intro}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-[14px] pt-[55px] sm:grid-cols-1 xm:grid-cols-1">
					{content.included.items.map((item, index) => (
						<article key={item.title} className="min-h-[280px] rounded-[18px] border border-[#2121212f] p-[28px] flex flex-col justify-between">
							<span className="small-text font-NeueMontreal text-[#fd4402]">0{index + 1}</span>
							<div>
								<h3 data-sb-field-path={`included.items.${index}.title`} className="text-[42px] leading-[0.95] md:text-[36px] sm:text-[34px] xm:text-[30px] uppercase font-FoundersGrotesk font-semibold">
									{item.title}
								</h3>
								<p data-sb-field-path={`included.items.${index}.description`} className="paragraph font-NeueMontreal pt-[18px] text-secondry/75">
									{item.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="bg-secondry text-white padding-x padding-y rounded-t-[20px]">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<p data-sb-field-path="audiences.eyebrow" className="col-span-3 small-text uppercase tracking-[0.12em] text-white/55 font-NeueMontreal">
						{content.audiences.eyebrow}
					</p>
					<div className="col-span-9">
						<h2 data-sb-field-path="audiences.heading" className="sub-heading font-NeueMontreal">
							{content.audiences.heading}
						</h2>
						<p data-sb-field-path="audiences.intro" className="paragraph font-NeueMontreal text-white/75 max-w-[760px] pt-[22px]">
							{content.audiences.intro}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-[14px] pt-[50px] sm:grid-cols-1 xm:grid-cols-1">
					{content.audiences.items.map((item, index) => (
						<article key={item.title} className="rounded-[18px] border border-white/15 p-[28px]">
							<h3 data-sb-field-path={`audiences.items.${index}.title`} className="text-[40px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold">
								{item.title}
							</h3>
							<p data-sb-field-path={`audiences.items.${index}.description`} className="paragraph font-NeueMontreal text-white/75 pt-[16px]">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="padding-x padding-y bg-[#f1f1f1]">
				<p data-sb-field-path="process.eyebrow" className="small-text uppercase tracking-[0.12em] text-secondry/55 font-NeueMontreal">
					{content.process.eyebrow}
				</p>
				<h2 data-sb-field-path="process.heading" className="sub-heading font-NeueMontreal pt-[16px] max-w-[860px]">
					{content.process.heading}
				</h2>
				<div className="mt-[40px] border-t border-[#21212133]">
					{content.process.items.map((item, index) => (
						<div key={item.number} className="grid grid-cols-12 gap-[20px] py-[26px] border-b border-[#21212133] sm:flex sm:flex-col xm:flex xm:flex-col">
							<p data-sb-field-path={`process.items.${index}.number`} className="col-span-1 small-text font-NeueMontreal text-[#fd4402]">
								{item.number}
							</p>
							<h3 data-sb-field-path={`process.items.${index}.title`} className="col-span-3 text-[40px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold">
								{item.title}
							</h3>
							<p data-sb-field-path={`process.items.${index}.description`} className="col-span-8 paragraph font-NeueMontreal text-secondry/75">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="padding-x padding-y bg-[#fd4402] text-white">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4">
						<p data-sb-field-path="local.eyebrow" className="small-text uppercase tracking-[0.12em] text-white/70 font-NeueMontreal">
							{content.local.eyebrow}
						</p>
						<h2 data-sb-field-path="local.heading" className="sub-heading font-NeueMontreal pt-[16px]">
							{content.local.heading}
						</h2>
					</div>
					<div className="col-span-8 flex flex-col gap-[22px]">
						{content.local.paragraphs.map((paragraph, index) => (
							<p key={index} data-sb-field-path={`local.paragraphs.${index}`} className="paragraph font-NeueMontreal text-white/90">
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</section>

			<section className="padding-x padding-y">
				<h2 data-sb-field-path="related.heading" className="sub-heading font-NeueMontreal max-w-[800px]">
					{content.related.heading}
				</h2>
				<p data-sb-field-path="related.intro" className="paragraph font-NeueMontreal text-secondry/75 max-w-[720px] pt-[18px]">
					{content.related.intro}
				</p>
				<ul className="pt-[28px] border-t border-[#2121212f] mt-[28px]">
					{content.related.links.map((link, index) => (
						<li key={link.url} className="border-b border-[#2121212f]">
							<Link
								href={link.url}
								data-sb-field-path={`related.links.${index}.label`}
								className="flex items-center justify-between gap-[20px] py-[18px] paragraph font-NeueMontreal hover:text-[#fd4402] transition-colors">
								{link.label}
								<ArrowUpRight size={18} strokeWidth={1.5} />
							</Link>
						</li>
					))}
				</ul>
			</section>

			<section className="padding-x padding-y border-t border-[#2121212f]">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<h2 data-sb-field-path="faqsHeading" className="col-span-4 sub-heading font-NeueMontreal">
						{content.faqsHeading}
					</h2>
					<div className="col-start-6 col-span-7 border-t border-[#2121212f]">
						{content.faqs.map((faq, index) => (
							<details key={faq.question} className="group border-b border-[#2121212f] py-[24px]">
								<summary data-sb-field-path={`faqs.${index}.question`} className="paragraph font-NeueMontreal font-medium cursor-pointer list-none flex justify-between gap-[20px]">
									{faq.question}
									<span className="text-[#fd4402] group-open:rotate-45 transition-transform">+</span>
								</summary>
								<p data-sb-field-path={`faqs.${index}.answer`} className="paragraph font-NeueMontreal text-secondry/70 max-w-[850px] pt-[20px] pr-[45px]">
									{faq.answer}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<section className="padding-x pb-[90px]">
				<div className="rounded-[20px] bg-[#212121] text-white p-[55px] min-h-[380px] flex flex-col justify-between sm:p-[28px] xm:p-[24px]">
					<p data-sb-field-path="closing.eyebrow" className="small-text uppercase tracking-[0.12em] font-NeueMontreal text-white/60">
						{content.closing.eyebrow}
					</p>
					<div className="flex justify-between items-end gap-[30px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
						<div className="max-w-[900px]">
							<h2 data-sb-field-path="closing.heading" className="text-[72px] leading-[0.88] lg:text-[60px] md:text-[50px] sm:text-[42px] xm:text-[36px] uppercase font-FoundersGrotesk font-semibold">
								{content.closing.heading}
							</h2>
							<p data-sb-field-path="closing.text" className="paragraph font-NeueMontreal text-white/70 pt-[20px] max-w-[640px]">
								{content.closing.text}{" "}
								<PhoneLink className="text-white hover:text-[#fd4402]" />.
							</p>
						</div>
						<Link
							href={content.closing.ctaUrl}
							data-sb-field-path="closing.ctaLabel"
							className="group inline-flex items-center gap-[14px] rounded-full bg-[#fd4402] text-white px-[22px] py-[14px] uppercase small-text font-NeueMontreal shrink-0">
							{content.closing.ctaLabel}
							<ArrowUpRight size={20} strokeWidth={1.5} />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
