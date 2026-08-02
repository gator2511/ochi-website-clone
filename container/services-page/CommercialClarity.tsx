"use client";

import { motion } from "framer-motion";

type CommercialClarityProps = {
	content: {
		eyebrow: string;
		heading: string;
		intro: string;
		marquee: string;
		items: Array<{
			number: string;
			title: string;
			description: string;
			accent: string;
		}>;
	};
};

export default function CommercialClarity({ content }: CommercialClarityProps) {
	return (
		<section className="w-full bg-background rounded-t-[20px] overflow-hidden border-t border-[#21212133]">
			<div className="padding-x pt-[70px] md:pt-[55px] sm:pt-[45px] xm:pt-[40px]">
				<div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<p
						data-sb-field-path="commercialClarity.eyebrow"
						className="col-span-4 paragraph font-NeueMontreal text-secondry">
						{content.eyebrow}
					</p>
					<div className="col-span-8">
						<motion.h2
							data-sb-field-path="commercialClarity.heading"
							initial={{ y: 55, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true, margin: "-12%" }}
							transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
							className="text-[82px] leading-[0.92] lg:text-[70px] md:text-[58px] sm:text-[52px] xm:text-[43px] font-FoundersGrotesk font-semibold uppercase text-secondry max-w-[980px]">
							{content.heading}
						</motion.h2>
						<p
							data-sb-field-path="commercialClarity.intro"
							className="sub-heading font-NeueMontreal text-secondry max-w-[900px] pt-[34px] sm:pt-[25px] xm:pt-[22px]">
							{content.intro}
						</p>
					</div>
				</div>
			</div>

			<div className="commercial-marquee mt-[75px] md:mt-[60px] sm:mt-[45px] xm:mt-[40px] border-y border-[#21212133] py-[18px] overflow-hidden">
				<div className="commercial-marquee-track">
					{[0, 1].map((repeat) => (
						<p
							key={repeat}
							data-sb-field-path={repeat === 0 ? "commercialClarity.marquee" : undefined}
							aria-hidden={repeat === 1}
							className="whitespace-nowrap text-[54px] leading-none md:text-[46px] sm:text-[38px] xm:text-[32px] font-FoundersGrotesk font-semibold uppercase text-[#fd4402] pr-[55px]">
							{content.marquee}
						</p>
					))}
				</div>
			</div>

			<div className="padding-x py-[75px] md:py-[60px] sm:py-[45px] xm:py-[40px] grid grid-cols-2 gap-[16px] sm:grid-cols-1 xm:grid-cols-1">
				{content.items.map((item, index) => (
					<motion.article
						key={`${item.number}-${item.title}`}
						initial={{ y: 55, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: "-8%" }}
						transition={{ duration: 0.65, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
						className="group min-h-[390px] md:min-h-[350px] sm:min-h-[320px] xm:min-h-[300px] rounded-[18px] border border-[#21212133] bg-[#e9e9e9] p-[30px] md:p-[25px] sm:p-[24px] xm:p-[22px] flex flex-col justify-between transition-colors duration-500 hover:bg-[#fd4402]">
						<div className="flex items-start justify-between gap-[20px]">
							<p
								data-sb-field-path={`commercialClarity.items.${index}.number`}
								className="paragraph font-NeueMontreal text-secondry group-hover:text-white transition-colors duration-500">
								{item.number}
							</p>
							<p
								data-sb-field-path={`commercialClarity.items.${index}.accent`}
								className="small-text uppercase tracking-[0.08em] font-NeueMontreal text-[#fd4402] border border-[#fd4402] rounded-full px-[12px] py-[7px] group-hover:text-white group-hover:border-white transition-colors duration-500 text-right">
								{item.accent}
							</p>
						</div>
						<div>
							<h3
								data-sb-field-path={`commercialClarity.items.${index}.title`}
								className="text-[56px] leading-[0.94] lg:text-[48px] md:text-[42px] sm:text-[43px] xm:text-[37px] font-FoundersGrotesk font-semibold uppercase text-secondry group-hover:text-white transition-colors duration-500">
								{item.title}
							</h3>
							<p
								data-sb-field-path={`commercialClarity.items.${index}.description`}
								className="paragraph font-NeueMontreal text-secondry/80 group-hover:text-white/90 transition-colors duration-500 max-w-[620px] pt-[20px]">
								{item.description}
							</p>
						</div>
					</motion.article>
				))}
			</div>

			<style jsx global>{`
				.commercial-marquee-track {
					display: flex;
					width: max-content;
					animation: commercial-marquee 24s linear infinite;
					will-change: transform;
				}
				.commercial-marquee:hover .commercial-marquee-track {
					animation-play-state: paused;
				}
				@keyframes commercial-marquee {
					from { transform: translate3d(0, 0, 0); }
					to { transform: translate3d(-50%, 0, 0); }
				}
				@media (prefers-reduced-motion: reduce) {
					.commercial-marquee-track { animation: none; }
				}
			`}</style>
		</section>
	);
}
