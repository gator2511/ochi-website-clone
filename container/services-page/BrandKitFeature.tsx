"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type BrandKitFeatureProps = {
	content: {
		eyebrow: string;
		heading: string;
		intro: string;
		ctaLabel: string;
		ctaUrl: string;
		items: Array<{ number: string; title: string; description: string }>;
	};
};

export default function BrandKitFeature({ content }: BrandKitFeatureProps) {
	return (
		<section className="w-full padding-x padding-y">
			<div className="rounded-[20px] overflow-hidden bg-[#212121] text-white">
				<div className="grid grid-cols-12 gap-[20px] px-[30px] md:px-[24px] sm:px-[20px] xm:px-[18px] pt-[28px] pb-[42px] border-b border-white/20 sm:flex sm:flex-col xm:flex xm:flex-col">
					<p data-sb-field-path="brandKit.eyebrow" className="col-span-3 small-text uppercase font-NeueMontreal text-white/70">
						{content.eyebrow}
					</p>
					<div className="col-span-9">
						<h2 data-sb-field-path="brandKit.heading" className="text-[92px] leading-[0.88] lg:text-[78px] md:text-[64px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]">
							{content.heading}
						</h2>
						<p data-sb-field-path="brandKit.intro" className="paragraph font-NeueMontreal text-white/70 max-w-[820px] pt-[28px]">
							{content.intro}
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-5 min-h-[620px] md:min-h-[520px] sm:min-h-[410px] xm:min-h-[360px] relative overflow-hidden bg-[#fd4402] flex items-center justify-center">
						<motion.div
							initial={{ rotate: -10, scale: 0.92 }}
							whileInView={{ rotate: 0, scale: 1 }}
							viewport={{ once: true, margin: "-20%" }}
							transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
							className="relative w-[72%] aspect-square">
							<div className="absolute inset-[4%] rounded-full border border-white/50" />
							<div className="absolute inset-[17%] rounded-full border border-white/35" />
							<div className="absolute inset-[30%] rounded-full bg-white text-[#fd4402] flex items-center justify-center">
								<span className="text-[78px] lg:text-[62px] md:text-[50px] sm:text-[48px] xm:text-[42px] leading-none font-FoundersGrotesk font-semibold uppercase">GT</span>
							</div>
							<span className="absolute top-[9%] left-[4%] small-text font-NeueMontreal uppercase">Logo</span>
							<span className="absolute top-[16%] right-[-4%] small-text font-NeueMontreal uppercase">Colour</span>
							<span className="absolute bottom-[20%] right-[0%] small-text font-NeueMontreal uppercase">Type</span>
							<span className="absolute bottom-[7%] left-[15%] small-text font-NeueMontreal uppercase">Voice</span>
							<span className="absolute top-[43%] left-[-8%] small-text font-NeueMontreal uppercase">Rules</span>
						</motion.div>
					</div>

					<div className="col-span-7 px-[30px] md:px-[24px] sm:px-[20px] xm:px-[18px] py-[18px]">
						{content.items.map((item, index) => (
							<motion.div
								key={`${item.number}-${item.title}`}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-10%" }}
								transition={{ duration: 0.55, delay: index * 0.05 }}
								className="grid grid-cols-12 gap-[18px] py-[24px] border-b border-white/20 sm:flex sm:flex-col xm:flex xm:flex-col">
								<p data-sb-field-path={`brandKit.items.${index}.number`} className="col-span-2 small-text font-NeueMontreal text-white/50">
									{item.number}
								</p>
								<div className="col-span-10">
									<h3 data-sb-field-path={`brandKit.items.${index}.title`} className="text-[42px] leading-[0.95] md:text-[36px] sm:text-[36px] xm:text-[32px] font-FoundersGrotesk font-semibold uppercase">
										{item.title}
									</h3>
									<p data-sb-field-path={`brandKit.items.${index}.description`} className="paragraph font-NeueMontreal text-white/65 max-w-[720px] pt-[12px]">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}

						<div className="pt-[28px] pb-[12px] flex justify-end">
							<Link href={content.ctaUrl} data-cursor="interactive" className="group flex items-center gap-[8px]">
								<span data-sb-field-path="brandKit.ctaLabel" className="px-[18px] py-[10px] border border-white rounded-full small-text font-NeueMontreal uppercase group-hover:bg-[#fd4402] group-hover:border-[#fd4402] transition-colors duration-300">
									{content.ctaLabel}
								</span>
								<span className="w-[42px] h-[42px] rounded-full border border-white flex items-center justify-center group-hover:bg-[#fd4402] group-hover:border-[#fd4402] transition-colors duration-300">
									<ArrowUpRight size={22} strokeWidth={1.4} />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
