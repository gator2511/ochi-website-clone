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

export default function InsightsBlogFeature({ content }: { content: FeaturedBlog }) {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const wordX = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);
	const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

	return (
		<section ref={sectionRef} className="relative overflow-hidden bg-[#111] text-white rounded-t-[20px] py-[90px] md:py-[70px] sm:py-[55px] xm:py-[55px]">
			<motion.p
				aria-hidden="true"
				style={{ x: wordX }}
				className="absolute top-[5%] left-0 whitespace-nowrap text-[34vw] leading-[0.72] font-semibold font-FoundersGrotesk uppercase text-[#fd4402] opacity-[0.13] pointer-events-none select-none">
				Blog Journal Blog
			</motion.p>

			<div className="relative z-10 padding-x">
				<div className="flex items-center justify-between border-b border-white/25 pb-[18px]">
					<p data-sb-field-path="featuredBlog.eyebrow" className="small-text font-NeueMontreal uppercase text-white">
						{content.eyebrow}
					</p>
					<p data-sb-field-path="featuredBlog.issue" className="small-text font-NeueMontreal uppercase text-white/65">
						Issue {content.issue}
					</p>
				</div>

				<Link
					href={content.url}
					data-cursor="interactive"
					className="group grid grid-cols-12 gap-[28px] pt-[34px] md:gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-7 relative overflow-hidden rounded-[14px] min-h-[620px] lg:min-h-[560px] md:min-h-[480px] sm:min-h-[420px] xm:min-h-[350px] bg-[#252525]">
						<motion.img
							style={{ y: imageY, scale: 1.08 }}
							data-sb-field-path="featuredBlog.image"
							src={content.image}
							alt={content.imageAlt}
							className="absolute inset-[-5%] w-[110%] h-[110%] object-cover transition duration-[1.2s] ease-[.4,0,.2,1] group-hover:scale-[1.13]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
						<div className="absolute top-[22px] left-[22px] right-[22px] flex justify-between small-text font-NeueMontreal uppercase">
							<span data-sb-field-path="featuredBlog.category" className="rounded-full bg-[#fd4402] px-[14px] py-[8px] text-white">
								{content.category}
							</span>
							<span data-sb-field-path="featuredBlog.readTime" className="rounded-full bg-black/50 backdrop-blur-md px-[14px] py-[8px] text-white">
								{content.readTime}
							</span>
						</div>
					</div>

					<div className="col-span-5 flex flex-col justify-between border-t border-white/25 pt-[24px] sm:min-h-[520px] xm:min-h-[480px]">
						<div>
							<p className="small-text font-NeueMontreal uppercase text-[#fd4402] pb-[24px]">From the GT Marketing blog</p>
							<h2
								data-sb-field-path="featuredBlog.title"
								className="text-[78px] leading-[0.88] lg:text-[66px] md:text-[54px] sm:text-[58px] xm:text-[48px] font-semibold font-FoundersGrotesk uppercase tracking-[-1px] text-white group-hover:text-[#fd4402] transition-colors duration-500">
								{content.title}
							</h2>
							<p
								data-sb-field-path="featuredBlog.summary"
								className="paragraph font-NeueMontreal text-white/72 max-w-[650px] pt-[30px]">
								{content.summary}
							</p>
						</div>

						<div className="flex items-center justify-between border-t border-white/25 pt-[22px] mt-[45px]">
							<span data-sb-field-path="featuredBlog.ctaLabel" className="paragraph font-NeueMontreal uppercase text-white">
								{content.ctaLabel}
							</span>
							<span className="w-[64px] h-[64px] rounded-full bg-[#fd4402] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
								<ArrowUpRight size={30} strokeWidth={1.5} />
							</span>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}
