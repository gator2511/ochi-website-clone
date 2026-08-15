"use client";

import Link from "next/link";
import { useRef, useState } from "react";
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

const WEB_POINTS = [
	{ label: "Logo", x: 105, y: 105, align: "start" },
	{ label: "Colour", x: 395, y: 105, align: "end" },
	{ label: "Type", x: 455, y: 275, align: "end" },
	{ label: "Voice", x: 350, y: 445, align: "end" },
	{ label: "Applications", x: 145, y: 445, align: "start" },
	{ label: "Rules", x: 45, y: 275, align: "start" },
];

const WEB_RINGS = [0.34, 0.56, 0.78, 1];

function ringPoints(scale: number, offsetX = 0, offsetY = 0) {
	const centreX = 250 + offsetX;
	const centreY = 275 + offsetY;
	return WEB_POINTS.map((point) => {
		const x = centreX + (point.x - 250) * scale;
		const y = centreY + (point.y - 275) * scale;
		return `${x},${y}`;
	}).join(" ");
}

export default function BrandKitFeature({ content }: BrandKitFeatureProps) {
	const webRef = useRef<HTMLDivElement>(null);
	const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

	const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
		const bounds = webRef.current?.getBoundingClientRect();
		if (!bounds) return;

		const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
		const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
		setPointer({ x, y, active: true });
	};

	const resetPointer = () => setPointer({ x: 0, y: 0, active: false });
	const warpX = pointer.x * 14;
	const warpY = pointer.y * 14;

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
					<div
						ref={webRef}
						onPointerMove={handlePointerMove}
						onPointerEnter={handlePointerMove}
						onPointerLeave={resetPointer}
						data-cursor="interactive"
						className="brand-web col-span-5 min-h-[620px] md:min-h-[520px] sm:min-h-[430px] xm:min-h-[390px] relative overflow-hidden bg-[#fd4402] flex items-center justify-center">
						<div className="absolute inset-0 opacity-[0.12] brand-web-grid" />

						<motion.div
							initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
							whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
							viewport={{ once: true, margin: "-15%" }}
							transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
							className="relative w-[94%] max-w-[610px] aspect-[5/5.5]">
							<svg
								viewBox="0 0 500 550"
								className="absolute inset-0 w-full h-full overflow-visible"
								aria-hidden="true">
								<defs>
									<filter id="webGlow" x="-50%" y="-50%" width="200%" height="200%">
										<feGaussianBlur stdDeviation="5" result="blur" />
									</filter>
								</defs>

								<motion.g
									animate={{ x: warpX * 0.2, y: warpY * 0.2 }}
									transition={{ type: "spring", stiffness: 115, damping: 18 }}>
									{WEB_POINTS.map((point, index) => (
										<line
											key={`spoke-${point.label}`}
											x1={250}
											y1={275}
											x2={point.x}
											y2={point.y}
											stroke="rgba(255,255,255,.48)"
											strokeWidth={index % 2 === 0 ? 1.4 : 1}
										/>
									))}

									{WEB_RINGS.map((scale, index) => (
										<motion.polygon
											key={`ring-${scale}`}
											points={ringPoints(scale, warpX * scale * 0.12, warpY * scale * 0.12)}
											fill="none"
											stroke={index === WEB_RINGS.length - 1 ? "rgba(255,255,255,.62)" : "rgba(255,255,255,.36)"}
											strokeWidth={index === WEB_RINGS.length - 1 ? 1.5 : 1}
											animate={{ opacity: pointer.active ? [0.45, 0.9, 0.45] : 0.65 }}
											transition={{ duration: 2.2 + index * 0.25, repeat: pointer.active ? Infinity : 0, ease: "easeInOut" }}
										/>
									))}
								</motion.g>

								{WEB_POINTS.map((point, index) => (
									<motion.g
										key={`node-${point.label}`}
										animate={{
											x: warpX * (0.12 + index * 0.018),
											y: warpY * (0.12 + index * 0.014),
										}}
										transition={{ type: "spring", stiffness: 125, damping: 16 }}>
										<circle cx={point.x} cy={point.y} r="4" fill="white" />
										<circle cx={point.x} cy={point.y} r="11" fill="none" stroke="rgba(255,255,255,.32)" />
									</motion.g>
								))}

								{pointer.active && (
									<motion.circle
										cx={250 + pointer.x * 135}
										cy={275 + pointer.y * 150}
										r="30"
										fill="rgba(255,255,255,.28)"
										filter="url(#webGlow)"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
									/>
								)}
							</svg>

							<motion.div
								animate={{ x: warpX * 0.28, y: warpY * 0.28, scale: pointer.active ? 1.045 : 1 }}
								transition={{ type: "spring", stiffness: 140, damping: 18 }}
								className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[31%] aspect-square rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,.35),0_25px_60px_rgba(0,0,0,.14)] flex items-center justify-center z-10">
								<img
									src="/logo.svg"
									alt="GT Marketing logo"
									className="h-[67%] w-auto object-contain"
								/>
							</motion.div>

							{WEB_POINTS.map((point, index) => {
								const labelPosition: Record<string, string> = {
									Logo: "left-[4%] top-[14%]",
									Colour: "right-[2%] top-[14%]",
									Type: "right-[0%] top-[48%]",
									Voice: "right-[12%] bottom-[8%]",
									Applications: "left-[7%] bottom-[8%]",
									Rules: "left-[0%] top-[48%]",
								};

								return (
									<motion.span
										key={point.label}
										animate={{ x: warpX * (0.1 + index * 0.01), y: warpY * (0.1 + index * 0.01) }}
										transition={{ type: "spring", stiffness: 120, damping: 18 }}
										className={`absolute ${labelPosition[point.label]} small-text font-NeueMontreal uppercase tracking-[0.02em] text-white`}>
										{point.label}
									</motion.span>
								);
							})}
						</motion.div>

						<p className="absolute left-[24px] bottom-[20px] small-text font-NeueMontreal uppercase text-white/60 pointer-events-none">
							Move your cursor through the system
						</p>
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

			<style jsx>{`
				.brand-web-grid {
					background-image:
						linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px);
					background-size: 42px 42px;
					mask-image: radial-gradient(circle at center, black, transparent 76%);
				}

				.brand-web::after {
					content: "";
					position: absolute;
					inset: 0;
					pointer-events: none;
					background: radial-gradient(circle at center, transparent 25%, rgba(94, 19, 0, .11) 100%);
				}

				@media (hover: none), (pointer: coarse) {
					.brand-web-grid { opacity: .08; }
				}
			`}</style>
		</section>
	);
}
