"use client";

import Link from "next/link";
import { useRef } from "react";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudyGrid() {
	const sliderRef = useRef<HTMLDivElement>(null);

	const moveSlider = (direction: -1 | 1) => {
		const slider = sliderRef.current;
		if (!slider) return;

		slider.scrollBy({
			left: slider.clientWidth * 0.82 * direction,
			behavior: "smooth",
		});
	};

	return (
		<section className="relative z-[50] isolate w-full overflow-hidden border-t border-black/20 bg-[#f1f1f1] text-black">
			<div className="padding-x">
				<div className="case-study-static-header block w-full pt-[96px] pb-[64px] md:pt-[72px] md:pb-[52px] sm:pt-[58px] sm:pb-[44px]">
					<p className="case-study-static-text text-sm uppercase tracking-[0.18em]">
						Case studies
					</p>

					<h2 className="case-study-static-text mt-8 max-w-5xl text-[64px] leading-[0.95] lg:text-[52px] md:text-[42px] sm:text-[34px]">
						Work, results and experience behind GT Marketing.
					</h2>

					<p className="case-study-static-text mt-6 max-w-3xl text-lg leading-relaxed">
						Direct GT Marketing projects alongside selected founder-led performance experience across websites, ecommerce, local marketing, lead generation and growth.
					</p>
				</div>

				<div className="case-study-static-text mb-7 flex items-center justify-between gap-5 border-t border-black/20 pt-5">
					<p className="text-sm uppercase tracking-[0.14em] text-black/60">
						{caseStudies.length} case studies
					</p>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => moveSlider(-1)}
							aria-label="Previous case studies"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-black/30 bg-white text-xl transition-colors duration-200 hover:bg-black hover:text-white"
						>
							←
						</button>
						<button
							type="button"
							onClick={() => moveSlider(1)}
							aria-label="Next case studies"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-black/30 bg-white text-xl transition-colors duration-200 hover:bg-black hover:text-white"
						>
							→
						</button>
					</div>
				</div>

				<div
					ref={sliderRef}
					className="case-study-slider flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 pt-2 scroll-smooth"
				>
					{caseStudies.map((caseStudy) => (
						<Link
							key={caseStudy.slug}
							href={`/case/${caseStudy.slug}`}
							className="group flex min-h-[520px] w-[32%] min-w-[360px] shrink-0 snap-start flex-col justify-between rounded-[24px] border border-black/20 bg-white p-7 transition-transform duration-300 hover:-translate-y-1 lg:w-[48%] md:w-[74%] md:min-w-[340px] sm:w-[88%] sm:min-w-[300px] xm:w-[92%] xm:min-w-[275px]"
						>
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-black/60">{caseStudy.eyebrow}</p>
								<h3 className="mt-5 text-4xl leading-none sm:text-[34px]">{caseStudy.company}</h3>
								<p className="mt-6 text-xl leading-snug">{caseStudy.headline}</p>
							</div>

							<div>
								<div className="grid grid-cols-2 gap-3 border-t border-black/20 pt-5">
									{caseStudy.results.slice(0, 2).map((metric) => (
										<div key={`${caseStudy.slug}-${metric.label}`}>
											<p className="text-4xl leading-none sm:text-[32px]">{metric.value}</p>
											<p className="mt-2 text-sm text-black/65">{metric.label}</p>
										</div>
									))}
								</div>
								<div className="mt-8 flex items-center justify-between border-t border-black/20 pt-5 text-sm uppercase tracking-[0.14em]">
									<span>View case study</span>
									<span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				<p className="case-study-static-text max-w-4xl pb-[72px] pt-8 text-sm leading-relaxed text-black/55">
					Case studies include direct GT Marketing engagements and selected founder-led experience. Each case page identifies the source and scope of the work so the results remain transparent.
				</p>
			</div>

			<style jsx global>{`
				.case-study-static-header,
				.case-study-static-text {
					position: static !important;
					transform: none !important;
					translate: none !important;
					animation: none !important;
					transition: none !important;
					opacity: 1 !important;
					visibility: visible !important;
					will-change: auto !important;
				}

				.case-study-slider {
					scrollbar-width: none;
					-webkit-overflow-scrolling: touch;
				}

				.case-study-slider::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</section>
	);
}
