"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type LocationContent = {
	locationName: string;
	locationType: string;
	region: string;
	postcode: string;
	hero: {
		eyebrow: string;
		heading: string;
		accent: string;
		intro: string;
		ctaLabel: string;
		ctaUrl: string;
	};
	proofPoints: string[];
	servicesHeading: string;
	servicesIntro: string;
	services: Array<{ title: string; description: string }>;
	localHeading: string;
	localParagraphs: string[];
	industriesHeading: string;
	industries: string[];
	nearbyHeading: string;
	nearbyAreas: string[];
	serviceAreaNote: string;
	faqsHeading: string;
	faqs: Array<{ question: string; answer: string }>;
	closing: {
		eyebrow: string;
		heading: string;
		ctaLabel: string;
		ctaUrl: string;
	};
};

export default function LocationLanding({
	content,
	documentId,
}: {
	content: LocationContent;
	documentId: string;
}) {
	return (
		<main data-sb-object-id={documentId} className="overflow-hidden bg-background text-secondry">
			<section className="min-h-[92vh] padding-x pt-[170px] pb-[70px] flex flex-col justify-between sm:pt-[135px] xm:pt-[125px]">
				<div>
					<p
						data-sb-field-path="hero.eyebrow"
						className="small-text uppercase tracking-[0.12em] font-NeueMontreal text-secondry/65">
						{content.hero.eyebrow}
					</p>
					<h1 className="pt-[26px] uppercase font-FoundersGrotesk font-semibold text-[168px] leading-[0.77] lg:text-[135px] md:text-[105px] sm:text-[78px] xm:text-[64px]">
						<span data-sb-field-path="hero.heading" className="block">
							{content.hero.heading}
						</span>
						<span data-sb-field-path="hero.accent" className="block text-[#fd4402]">
							{content.hero.accent}
						</span>
					</h1>
				</div>

				<div className="grid grid-cols-12 gap-[30px] items-end pt-[70px] sm:flex sm:flex-col sm:items-start xm:flex xm:flex-col xm:items-start">
					<p
						data-sb-field-path="hero.intro"
						className="col-start-6 col-span-5 sub-heading font-NeueMontreal max-w-[820px] sm:w-full xm:w-full">
						{content.hero.intro}
					</p>
					<Link
						href={content.hero.ctaUrl}
						data-sb-field-path="hero.ctaLabel"
						className="col-span-2 justify-self-end group inline-flex items-center gap-[14px] rounded-full border border-secondry px-[22px] py-[14px] uppercase small-text font-NeueMontreal transition-colors duration-300 hover:bg-[#fd4402] hover:border-[#fd4402] hover:text-white sm:justify-self-start xm:justify-self-start">
						{content.hero.ctaLabel}
						<ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
					</Link>
				</div>
			</section>

			<section className="border-y border-[#2121212f] py-[18px] overflow-hidden">
				<div className="location-ticker flex w-max gap-[16px]">
					{[...content.proofPoints, ...content.proofPoints].map((point, index) => (
						<div key={`${point}-${index}`} className="flex items-center gap-[16px] pr-[16px]">
							<span className="w-[9px] h-[9px] rounded-full bg-[#fd4402]" />
							<span className="paragraph uppercase font-NeueMontreal whitespace-nowrap">{point}</span>
						</div>
					))}
				</div>
			</section>

			<section className="padding-x padding-y">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-5">
						<p className="small-text uppercase tracking-[0.12em] text-secondry/55 font-NeueMontreal">Local growth services</p>
						<h2 data-sb-field-path="servicesHeading" className="sub-heading font-NeueMontreal pt-[18px] max-w-[650px]">
							{content.servicesHeading}
						</h2>
					</div>
					<p data-sb-field-path="servicesIntro" className="col-start-8 col-span-5 paragraph font-NeueMontreal text-secondry/75 max-w-[680px]">
						{content.servicesIntro}
					</p>
				</div>

				<div className="grid grid-cols-2 gap-[14px] pt-[65px] sm:grid-cols-1 xm:grid-cols-1">
					{content.services.map((service, index) => (
						<motion.article
							key={`${service.title}-${index}`}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-10%" }}
							transition={{ duration: 0.65, delay: index * 0.06 }}
							className="min-h-[330px] rounded-[18px] border border-[#2121212f] p-[30px] flex flex-col justify-between transition-colors duration-500 hover:bg-secondry hover:text-white group">
							<span className="small-text font-NeueMontreal text-[#fd4402]">0{index + 1}</span>
							<div>
								<h3 data-sb-field-path={`services.${index}.title`} className="text-[48px] leading-[0.95] md:text-[40px] sm:text-[38px] xm:text-[34px] uppercase font-FoundersGrotesk font-semibold">
									{service.title}
								</h3>
								<p data-sb-field-path={`services.${index}.description`} className="paragraph font-NeueMontreal pt-[22px] max-w-[620px] text-secondry/70 group-hover:text-white/75">
									{service.description}
								</p>
							</div>
						</motion.article>
					))}
				</div>
			</section>

			<section className="bg-secondry text-white rounded-t-[20px] padding-x padding-y">
				<div className="grid grid-cols-12 gap-[35px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-5">
						<p className="small-text uppercase tracking-[0.12em] text-white/55 font-NeueMontreal">Why local context matters</p>
						<h2 data-sb-field-path="localHeading" className="sub-heading font-NeueMontreal pt-[18px]">
							{content.localHeading}
						</h2>
					</div>
					<div className="col-start-7 col-span-6 flex flex-col gap-[24px]">
						{content.localParagraphs.map((paragraph, index) => (
							<p key={`${paragraph}-${index}`} data-sb-field-path={`localParagraphs.${index}`} className="paragraph font-NeueMontreal text-white/78">
								{paragraph}
							</p>
						))}
					</div>
				</div>

				<div className="grid grid-cols-2 gap-[14px] pt-[85px] sm:grid-cols-1 xm:grid-cols-1">
					<div className="rounded-[18px] bg-white/7 border border-white/15 p-[30px]">
						<h3 data-sb-field-path="industriesHeading" className="paragraph uppercase font-NeueMontreal text-white/60">
							{content.industriesHeading}
						</h3>
						<div className="flex flex-wrap gap-[9px] pt-[28px]">
							{content.industries.map((industry, index) => (
								<span key={`${industry}-${index}`} data-sb-field-path={`industries.${index}`} className="small-text uppercase font-NeueMontreal rounded-full border border-white/45 px-[14px] py-[8px]">
									{industry}
								</span>
							))}
						</div>
					</div>
					<div className="rounded-[18px] bg-[#fd4402] p-[30px]">
						<h3 data-sb-field-path="nearbyHeading" className="paragraph uppercase font-NeueMontreal text-white/70">
							{content.nearbyHeading}
						</h3>
						<div className="flex flex-wrap gap-[9px] pt-[28px]">
							{content.nearbyAreas.map((area, index) => (
								<span key={`${area}-${index}`} data-sb-field-path={`nearbyAreas.${index}`} className="small-text uppercase font-NeueMontreal rounded-full border border-white/55 px-[14px] py-[8px]">
									{area}
								</span>
							))}
						</div>
						<p data-sb-field-path="serviceAreaNote" className="paragraph font-NeueMontreal text-white/80 pt-[30px]">
							{content.serviceAreaNote}
						</p>
					</div>
				</div>
			</section>

			<section className="padding-x padding-y">
				<div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<h2 data-sb-field-path="faqsHeading" className="col-span-4 sub-heading font-NeueMontreal">
						{content.faqsHeading}
					</h2>
					<div className="col-start-6 col-span-7 border-t border-[#2121212f]">
						{content.faqs.map((faq, index) => (
							<details key={`${faq.question}-${index}`} className="group border-b border-[#2121212f] py-[24px]">
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
				<div className="rounded-[20px] bg-[#fd4402] text-white p-[55px] min-h-[430px] flex flex-col justify-between sm:p-[28px] xm:p-[24px]">
					<p data-sb-field-path="closing.eyebrow" className="small-text uppercase tracking-[0.12em] font-NeueMontreal text-white/70">
						{content.closing.eyebrow}
					</p>
					<div className="flex justify-between items-end gap-[30px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
						<h2 data-sb-field-path="closing.heading" className="text-[92px] leading-[0.85] lg:text-[76px] md:text-[62px] sm:text-[54px] xm:text-[45px] uppercase font-FoundersGrotesk font-semibold max-w-[1050px]">
							{content.closing.heading}
						</h2>
						<Link href={content.closing.ctaUrl} data-sb-field-path="closing.ctaLabel" className="group inline-flex items-center gap-[14px] rounded-full bg-white text-secondry px-[22px] py-[14px] uppercase small-text font-NeueMontreal">
							{content.closing.ctaLabel}
							<ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
						</Link>
					</div>
				</div>
			</section>

			<style jsx global>{`
				.location-ticker { animation: location-ticker 34s linear infinite; }
				@keyframes location-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
				@media (prefers-reduced-motion: reduce) { .location-ticker { animation: none; } }
			`}</style>
		</main>
	);
}
