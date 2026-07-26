"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FeaturedBlog = {
	eyebrow: string;
	issue: string;
	category: string;
	readTime: string;
	title: string;
	summary: string;
	image: string;
	imageAlt: string;
	ctaLabel: string;
	url: string;
};

export default function InsightsBlogFeature({
	content,
	index = 0,
	fieldPath = `featuredBlogs.${index}`,
}: {
	content: FeaturedBlog;
	index?: number;
	fieldPath?: string;
}) {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const reverse = index % 2 === 1;
	const wordX = useTransform(scrollYProgress, [0, 1], reverse ? ["-22%", "8%"] : ["8%", "-28%"]);
	const imageY = useTransform(scrollYProgress, [0, 1], reverse ? ["4%", "-4%"] : ["-4%", "4%"]);
	const backgroundText = reverse ? "Local Search Local" : "Blog Journal Blog";
	const sectionColours = reverse ? "bg-[#f1f1f1] text-[#212121]" : "bg-[#111] text-white";
	const borderColour = reverse ? "border-[#21212144]" : "border-white/25";
	const mutedColour = reverse ? "text-[#21212199]" : "text-white/65";
	const bodyColour = reverse ? "text-[#212121bb]" : "text-white/72";

	return (
		<section
			ref={sectionRef}
			className={`relative overflow-hidden rounded-t-[20px] py-[90px] md:py-[70px] sm:py-[55px] xm:py-[55px] ${sectionColours}`}>
			<motion.p
				aria-hidden="true"
				style={{ x: wordX }}
				className="absolute top-[5%] left-0 whitespace-nowrap text-[34vw] leading-[0.72] font-semibold font-FoundersGrotesk uppercase text-[#fd4402] opacity-[0.13] pointer-events-none select-none">
				{backgroundText}
			</motion.p>

			<div className="relative z-10 padding-x">
				<div className={`flex items-center justify-between border-b pb-[18px] ${borderColour}`}>
					<p data-sb-field-path={`${fieldPath}.eyebrow`} className="small-text font-NeueMontreal uppercase">
						{content.eyebrow}
					</p>
					<p data-sb-field-path={`${fieldPath}.issue`} className={`small-text font-NeueMontreal uppercase ${mutedColour}`}>
						Issue {content.issue}
					</p>
				</div>

				<Link
					href={content.url}
					data-cursor="interactive"
					className="group grid grid-cols-12 gap-[28px] pt-[34px] md:gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className={`col-span-7 relative overflow-hidden rounded-[14px] min-h-[620px] lg:min-h-[560px] md:min-h-[480px] sm:min-h-[420px] xm:min-h-[350px] bg-[#252525] ${reverse ? "order-2 sm:order-none xm:order-none" : ""}`}>
						<motion.img
							style={{ y: imageY, scale: 1.08 }}
							data-sb-field-path={`${fieldPath}.image`}
							src={content.image}
							alt={content.imageAlt}
							className="absolute inset-[-5%] w-[110%] h-[110%] object-cover transition duration-[1.2s] ease-[.4,0,.2,1] group-hover:scale-[1.13]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
						<div className="absolute top-[22px] left-[22px] right-[22px] flex justify-between small-text font-NeueMontreal uppercase text-white">
							<span data-sb-field-path={`${fieldPath}.category`} className="rounded-full bg-[#fd4402] px-[14px] py-[8px]">
								{content.category}
							</span>
							<span data-sb-field-path={`${fieldPath}.readTime`} className="rounded-full bg-black/50 backdrop-blur-md px-[14px] py-[8px]">
								{content.readTime}
							</span>
						</div>
					</div>

					<div className={`col-span-5 flex flex-col justify-between border-t pt-[24px] sm:min-h-[520px] xm:min-h-[480px] ${borderColour} ${reverse ? "order-1 sm:order-none xm:order-none" : ""}`}>
						<div>
							<p className="small-text font-NeueMontreal uppercase text-[#fd4402] pb-[24px]">From the GT Marketing blog</p>
							<h2
								data-sb-field-path={`${fieldPath}.title`}
								className="text-[78px] leading-[0.88] lg:text-[66px] md:text-[54px] sm:text-[58px] xm:text-[48px] font-semibold font-FoundersGrotesk uppercase tracking-[-1px] group-hover:text-[#fd4402] transition-colors duration-500">
								{content.title}
							</h2>
							<p
								data-sb-field-path={`${fieldPath}.summary`}
								className={`paragraph font-NeueMontreal max-w-[650px] pt-[30px] ${bodyColour}`}>
								{content.summary}
							</p>
						</div>

						<div className={`flex items-center justify-between border-t pt-[22px] mt-[45px] ${borderColour}`}>
							<span data-sb-field-path={`${fieldPath}.ctaLabel`} className="paragraph font-NeueMontreal uppercase">
								{content.ctaLabel}
							</span>
							<span className="w-[64px] h-[64px] rounded-full bg-[#fd4402] text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
								<ArrowUpRight size={30} strokeWidth={1.5} />
							</span>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}
