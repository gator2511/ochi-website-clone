import Head from "next/head";
import { Curve, Ready } from "@/components";
import CaseStudyGrid from "@/components/CaseStudyGrid";

export default function CaseStudiesPage() {
	return (
		<>
			<Head>
				<title>Marketing Case Studies | GT Marketing</title>
				<meta
					name="description"
					content="Explore performance marketing, lead generation and growth case studies drawn from the founder experience behind GT Marketing."
				/>
			</Head>
			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-[#f1f1f1] text-black">
					<section className="padding-x pt-[150px] pb-20 border-b border-black/20">
						<p className="text-sm uppercase tracking-[0.18em] text-black/60">GT Marketing</p>
						<h1 className="mt-5 text-[96px] leading-[0.9] lg:text-[76px] md:text-[58px] sm:text-[44px]">
							Case Studies
						</h1>
						<p className="mt-8 max-w-4xl text-2xl leading-relaxed md:text-xl">
							Commercial marketing experience across real estate, product growth, hospitality, retail and SaaS — translated into the performance methodology behind GT Marketing.
						</p>
					</section>
					<CaseStudyGrid />
				</main>
				<Ready />
			</Curve>
		</>
	);
}
