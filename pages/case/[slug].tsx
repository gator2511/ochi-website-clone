import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Curve, Ready } from "@/components";
import {
	caseStudies,
	getCaseStudyBySlug,
	type CaseStudy,
} from "@/content/caseStudies";

type CaseStudyPageProps = {
	caseStudy: CaseStudy;
};

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
	return (
		<>
			<Head>
				<title>{caseStudy.seoTitle}</title>
				<meta name="description" content={caseStudy.seoDescription} />
			</Head>

			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-[#f1f1f1] text-black">
					<section className="padding-x pt-[150px] pb-16 border-b border-black/20">
						<Link href="/presentation" className="text-sm uppercase tracking-[0.16em]">
							← Back to work
						</Link>
						<p className="mt-16 text-sm uppercase tracking-[0.18em] text-black/60">
							{caseStudy.eyebrow}
						</p>
						<h1 className="mt-5 max-w-6xl text-[96px] leading-[0.9] lg:text-[76px] md:text-[58px] sm:text-[44px]">
							{caseStudy.company}
						</h1>
						<p className="mt-8 max-w-4xl text-3xl leading-tight md:text-2xl">
							{caseStudy.headline}
						</p>
						<p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/70">
							{caseStudy.summary}
						</p>
					</section>

					<section className="padding-x padding-y border-b border-black/20">
						<div className="grid grid-cols-12 gap-8 md:grid-cols-1">
							<p className="col-span-3 text-sm uppercase tracking-[0.16em] md:col-span-1">Context</p>
							<p className="col-span-9 max-w-4xl text-2xl leading-relaxed md:col-span-1 md:text-xl">
								{caseStudy.context}
							</p>
						</div>
					</section>

					<section className="padding-x padding-y border-b border-black/20">
						<div className="grid grid-cols-12 gap-8 md:grid-cols-1">
							<p className="col-span-3 text-sm uppercase tracking-[0.16em] md:col-span-1">Challenge</p>
							<p className="col-span-9 max-w-4xl text-2xl leading-relaxed md:col-span-1 md:text-xl">
								{caseStudy.challenge}
							</p>
						</div>
					</section>

					<section className="padding-x padding-y bg-black text-white">
						<div className="grid grid-cols-12 gap-8 md:grid-cols-1">
							<p className="col-span-3 text-sm uppercase tracking-[0.16em] md:col-span-1">Approach</p>
							<div className="col-span-9 md:col-span-1">
								{caseStudy.approach.map((item, index) => (
									<div key={item} className="grid grid-cols-[70px_1fr] gap-4 border-t border-white/25 py-6 first:border-t-0">
										<span className="text-sm text-white/50">0{index + 1}</span>
										<p className="text-2xl leading-snug md:text-xl">{item}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="padding-x padding-y bg-[#ff5c00] text-black">
						<p className="text-sm uppercase tracking-[0.16em]">Results</p>
						<div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-1">
							{caseStudy.results.map((metric) => (
								<div key={metric.label} className="rounded-[24px] border border-black/30 bg-[#f1f1f1] p-7 min-h-[260px]">
									<p className="text-[72px] leading-none lg:text-[58px] sm:text-[48px]">{metric.value}</p>
									<p className="mt-4 text-2xl">{metric.label}</p>
									<p className="mt-6 max-w-xl leading-relaxed text-black/65">{metric.detail}</p>
								</div>
							))}
						</div>
					</section>

					<section className="padding-x padding-y border-b border-black/20">
						<div className="grid grid-cols-12 gap-8 md:grid-cols-1">
							<p className="col-span-3 text-sm uppercase tracking-[0.16em] md:col-span-1">Capabilities</p>
							<div className="col-span-9 flex flex-wrap gap-3 md:col-span-1">
								{caseStudy.services.map((service) => (
									<span key={service} className="rounded-full border border-black/30 px-4 py-2 text-sm uppercase tracking-[0.08em]">
										{service}
									</span>
								))}
							</div>
						</div>
						<p className="mt-14 max-w-4xl border-t border-black/20 pt-6 text-sm leading-relaxed text-black/60">
							{caseStudy.note}
						</p>
					</section>
				</main>
				<Ready />
			</Curve>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: caseStudies.map((caseStudy) => ({ params: { slug: caseStudy.slug } })),
	fallback: false,
});

export const getStaticProps: GetStaticProps<CaseStudyPageProps> = async ({ params }) => {
	const slug = params?.slug;

	if (typeof slug !== "string") {
		return { notFound: true };
	}

	const caseStudy = getCaseStudyBySlug(slug);

	if (!caseStudy) {
		return { notFound: true };
	}

	return {
		props: {
			caseStudy,
		},
	};
};
