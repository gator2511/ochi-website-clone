import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudyGrid() {
	return (
		<section className="w-full bg-[#f1f1f1] text-black border-t border-black/20">
			<div className="padding-x padding-y">
				<div className="grid grid-cols-12 gap-y-10 md:grid-cols-1">
					<div className="col-span-4 md:col-span-1">
						<p className="text-sm uppercase tracking-[0.18em]">Case studies</p>
					</div>
					<div className="col-span-8 md:col-span-1">
						<h2 className="text-[64px] leading-[0.95] lg:text-[52px] md:text-[42px] sm:text-[34px] max-w-5xl">
							The performance experience behind GT Marketing.
						</h2>
						<p className="mt-6 max-w-3xl text-lg leading-relaxed">
							Selected results from founder-led consultancy work and previous senior marketing roles, showing the acquisition, conversion and growth methodology now applied through GT Marketing.
						</p>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
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

				<p className="mt-8 max-w-4xl text-sm leading-relaxed text-black/55">
					These case studies distinguish prior founder experience from direct GT Marketing client engagements so the source of each result is clear.
				</p>
			</div>
		</section>
	);
}
