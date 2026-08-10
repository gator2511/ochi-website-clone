import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudyGrid() {
	return (
		<section className="relative z-[50] isolate w-full overflow-hidden border-t border-black/20 bg-[#f1f1f1] text-black">
			<div className="padding-x">
				<div className="case-study-static-header block w-full pt-[96px] pb-[72px] md:pt-[72px] md:pb-[52px] sm:pt-[58px] sm:pb-[44px]">
					<p className="case-study-static-text text-sm uppercase tracking-[0.18em]">
						Case studies
					</p>

					<h2 className="case-study-static-text mt-8 max-w-5xl text-[64px] leading-[0.95] lg:text-[52px] md:text-[42px] sm:text-[34px]">
						The performance experience behind GT Marketing.
					</h2>

					<p className="case-study-static-text mt-6 max-w-3xl text-lg leading-relaxed">
						Selected results from founder-led consultancy work and previous senior marketing roles, showing the acquisition, conversion and growth methodology now applied through GT Marketing.
					</p>
				</div>

				<div className="grid grid-cols-3 gap-5 pb-[96px] lg:grid-cols-2 md:grid-cols-1 md:pb-[72px]">
					{caseStudies.map((caseStudy) => (
						<Link
							key={caseStudy.slug}
							href={`/case/${caseStudy.slug}`}
							className="group flex min-h-[520px] flex-col justify-between rounded-[24px] border border-black/20 bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
						>
							<div>
								<p className="text-xs uppercase tracking-[0.16em] text-black/60">{caseStudy.eyebrow}</p>
								<h3 className="mt-5 text-4xl leading-none">{caseStudy.company}</h3>
								<p className="mt-6 text-xl leading-snug">{caseStudy.headline}</p>
							</div>

							<div>
								<div className="grid grid-cols-2 gap-3 border-t border-black/20 pt-5">
									{caseStudy.results.slice(0, 2).map((metric) => (
										<div key={`${caseStudy.slug}-${metric.label}`}>
											<p className="text-4xl leading-none">{metric.value}</p>
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

				<p className="case-study-static-text -mt-[54px] max-w-4xl pb-[72px] text-sm leading-relaxed text-black/55 md:-mt-[34px]">
					These case studies distinguish prior founder experience from direct GT Marketing client engagements so the source of each result is clear.
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
			`}</style>
		</section>
	);
}
