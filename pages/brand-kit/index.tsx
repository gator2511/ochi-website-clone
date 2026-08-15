"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Curve, Ready } from "@/components";
import content from "@/content/pages/brand-kit.json";

const documentId = "content/pages/brand-kit.json";

export default function BrandKitPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<section className="min-h-screen padding-x pt-[150px] pb-[70px] flex flex-col justify-between bg-[#f1f1f1]">
					<div className="flex justify-between gap-[30px] sm:flex-col xm:flex-col">
						<p data-sb-field-path="hero.eyebrow" className="small-text font-NeueMontreal uppercase text-secondry/65">
							{content.hero.eyebrow}
						</p>
						<p data-sb-field-path="hero.intro" className="paragraph font-NeueMontreal text-secondry max-w-[620px]">
							{content.hero.intro}
						</p>
					</div>

					<div className="py-[70px] sm:py-[50px] xm:py-[45px]">
						<h1 className="font-FoundersGrotesk font-semibold uppercase text-[185px] leading-[0.72] lg:text-[150px] md:text-[115px] sm:text-[86px] xm:text-[70px] tracking-[-4px] text-secondry">
							<span data-sb-field-path="hero.headingLine1" className="block">{content.hero.headingLine1}</span>
							<span data-sb-field-path="hero.headingLine2" className="block text-[#fd4402] text-right">{content.hero.headingLine2}</span>
						</h1>
					</div>

					<div className="border-t border-[#21212155] pt-[22px] flex justify-between items-end gap-[30px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
						<div className="flex gap-[10px] flex-wrap">
							{["Logo", "Colour", "Typography", "Voice", "Applications"].map((item) => (
								<span key={item} className="border border-[#21212199] rounded-full px-[13px] py-[6px] small-text font-NeueMontreal uppercase text-secondry">
									{item}
								</span>
							))}
						</div>
						<Link href={content.hero.ctaUrl} data-cursor="interactive" className="group flex items-center gap-[7px]">
							<span data-sb-field-path="hero.ctaLabel" className="border border-[#21212199] rounded-full px-[15px] py-[8px] small-text font-NeueMontreal uppercase group-hover:bg-[#212121] group-hover:text-white transition-colors duration-300">
								{content.hero.ctaLabel}
							</span>
							<span className="w-[38px] h-[38px] rounded-full border border-[#21212199] flex items-center justify-center group-hover:bg-[#fd4402] group-hover:border-[#fd4402] group-hover:text-white transition-colors duration-300">
								<ArrowUpRight size={21} strokeWidth={1.4} />
							</span>
						</Link>
					</div>
				</section>

				<section className="bg-[#212121] text-white rounded-t-[20px] padding-x py-[110px] md:py-[90px] sm:py-[70px] xm:py-[65px]">
					<div className="grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<p data-sb-field-path="why.eyebrow" className="col-span-3 small-text font-NeueMontreal uppercase text-white/55">
							{content.why.eyebrow}
						</p>
						<div className="col-span-9">
							<h2 data-sb-field-path="why.heading" className="text-[96px] leading-[0.87] lg:text-[82px] md:text-[68px] sm:text-[56px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]">
								{content.why.heading}
							</h2>
							<p data-sb-field-path="why.intro" className="paragraph font-NeueMontreal text-white/65 max-w-[850px] pt-[35px]">
								{content.why.intro}
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-[14px] mt-[80px] sm:grid-cols-1 xm:grid-cols-1 sm:mt-[55px] xm:mt-[50px]">
						{content.why.items.map((item, index) => (
							<motion.article
								key={item.number}
								initial={{ opacity: 0, y: 35 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-10%" }}
								transition={{ duration: 0.55, delay: index * 0.06 }}
								className="min-h-[350px] rounded-[16px] border border-white/20 p-[28px] flex flex-col justify-between group hover:bg-[#fd4402] hover:border-[#fd4402] transition-colors duration-500">
								<p data-sb-field-path={`why.items.${index}.number`} className="small-text font-NeueMontreal text-white/50 group-hover:text-white/75">{item.number}</p>
								<div>
									<h3 data-sb-field-path={`why.items.${index}.title`} className="text-[54px] leading-[0.92] md:text-[46px] sm:text-[42px] xm:text-[38px] font-FoundersGrotesk font-semibold uppercase">
										{item.title}
									</h3>
									<p data-sb-field-path={`why.items.${index}.description`} className="paragraph font-NeueMontreal text-white/65 group-hover:text-white/85 pt-[18px] max-w-[650px]">
										{item.description}
									</p>
								</div>
							</motion.article>
						))}
					</div>
				</section>

				<section className="bg-[#f1f1f1] padding-x py-[110px] md:py-[90px] sm:py-[70px] xm:py-[65px]">
					<div className="grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<p data-sb-field-path="included.eyebrow" className="col-span-3 small-text font-NeueMontreal uppercase text-secondry/60">{content.included.eyebrow}</p>
						<h2 data-sb-field-path="included.heading" className="col-span-9 text-[90px] leading-[0.88] lg:text-[76px] md:text-[62px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px] text-secondry">
							{content.included.heading}
						</h2>
					</div>

					<div className="mt-[70px] border-t border-[#21212155]">
						{content.included.items.map((item, index) => (
							<div key={item.title} className="grid grid-cols-12 gap-[20px] py-[26px] border-b border-[#21212133] sm:flex sm:flex-col xm:flex xm:flex-col group">
								<p className="col-span-1 small-text font-NeueMontreal text-secondry/45">{String(index + 1).padStart(2, "0")}</p>
								<h3 data-sb-field-path={`included.items.${index}.title`} className="col-span-4 text-[46px] leading-[0.95] md:text-[40px] sm:text-[38px] xm:text-[34px] font-FoundersGrotesk font-semibold uppercase text-secondry group-hover:text-[#fd4402] transition-colors duration-300">
									{item.title}
								</h3>
								<p data-sb-field-path={`included.items.${index}.description`} className="col-span-7 paragraph font-NeueMontreal text-secondry/70 max-w-[800px]">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</section>

				<section className="padding-x py-[110px] md:py-[90px] sm:py-[70px] xm:py-[65px] bg-[#fd4402] text-white rounded-[20px]">
					<div className="grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<p data-sb-field-path="businessImpact.eyebrow" className="col-span-3 small-text font-NeueMontreal uppercase text-white/70">{content.businessImpact.eyebrow}</p>
						<div className="col-span-9">
							<h2 data-sb-field-path="businessImpact.heading" className="text-[96px] leading-[0.86] lg:text-[80px] md:text-[65px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]">
								{content.businessImpact.heading}
							</h2>
							<div className="grid grid-cols-2 gap-[25px] mt-[45px] sm:grid-cols-1 xm:grid-cols-1">
								{content.businessImpact.paragraphs.map((paragraph, index) => (
									<p key={index} data-sb-field-path={`businessImpact.paragraphs.${index}`} className="paragraph font-NeueMontreal text-white/85">{paragraph}</p>
								))}
							</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-[10px] mt-[70px]">
						{content.businessImpact.signals.map((signal, index) => (
							<span key={signal} data-sb-field-path={`businessImpact.signals.${index}`} className="border border-white rounded-full px-[18px] py-[9px] small-text font-NeueMontreal uppercase">
								{signal}
							</span>
						))}
					</div>
				</section>

				<section className="padding-x py-[110px] md:py-[90px] sm:py-[70px] xm:py-[65px] bg-[#f1f1f1]">
					<div className="grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<p data-sb-field-path="process.eyebrow" className="col-span-3 small-text font-NeueMontreal uppercase text-secondry/60">{content.process.eyebrow}</p>
						<h2 data-sb-field-path="process.heading" className="col-span-9 text-[90px] leading-[0.88] lg:text-[76px] md:text-[62px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px] text-secondry">
							{content.process.heading}
						</h2>
					</div>
					<div className="grid grid-cols-4 gap-[12px] mt-[70px] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1">
						{content.process.items.map((item, index) => (
							<div key={item.number} className="min-h-[360px] rounded-[16px] bg-[#e1e1e1] p-[24px] flex flex-col justify-between hover:bg-[#212121] hover:text-white transition-colors duration-500 group">
								<p data-sb-field-path={`process.items.${index}.number`} className="small-text font-NeueMontreal opacity-50">{item.number}</p>
								<div>
									<h3 data-sb-field-path={`process.items.${index}.title`} className="text-[48px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase group-hover:text-[#fd4402] transition-colors duration-300">{item.title}</h3>
									<p data-sb-field-path={`process.items.${index}.description`} className="paragraph font-NeueMontreal opacity-70 pt-[17px]">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="padding-x py-[120px] md:py-[95px] sm:py-[75px] xm:py-[70px] bg-[#212121] text-white rounded-t-[20px]">
					<p data-sb-field-path="closing.eyebrow" className="small-text font-NeueMontreal uppercase text-white/55">{content.closing.eyebrow}</p>
					<h2 data-sb-field-path="closing.heading" className="max-w-[1300px] pt-[38px] text-[108px] leading-[0.84] lg:text-[88px] md:text-[70px] sm:text-[58px] xm:text-[49px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]">
						{content.closing.heading}
					</h2>
					<div className="grid grid-cols-12 gap-[24px] mt-[55px] border-t border-white/20 pt-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<p data-sb-field-path="closing.text" className="col-start-6 col-span-5 paragraph font-NeueMontreal text-white/70">{content.closing.text}</p>
						<Link href={content.closing.ctaUrl} data-cursor="interactive" className="col-span-2 justify-self-end self-end group flex items-center gap-[7px] sm:justify-self-start xm:justify-self-start">
							<span data-sb-field-path="closing.ctaLabel" className="border border-white rounded-full px-[15px] py-[9px] small-text font-NeueMontreal uppercase group-hover:bg-[#fd4402] group-hover:border-[#fd4402] transition-colors duration-300">{content.closing.ctaLabel}</span>
							<span className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center group-hover:bg-[#fd4402] group-hover:border-[#fd4402] transition-colors duration-300"><ArrowUpRight size={22} strokeWidth={1.4} /></span>
						</Link>
					</div>
				</section>

				<Ready />
			</Curve>
		</div>
	);
}
