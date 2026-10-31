"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Curve, Ready } from "@/components";
import site from "@/content/data/site.json";

/**
 * GT still to confirm on this page:
 * - Start date. Visible copy: "Talk to us about start dates."
 * - What happens after November 2026, beyond the stated price window.
 * Not stated, and not to be invented: a guarantee or a results figure.
 * Confirmed by GT: $595 a month excludes GST. Ad spend is paid separately, directly to Google.
 * The $595 is only the management fee. Confirmed: 3-month minimum commitment, framed as the
 * time it takes to see visible results. That minimum is not part of the price.
 */

const INCLUDED = [
	"Local SEO",
	"Google Business Profile optimisation",
	"Website updates",
	"A monthly performance report",
	"Lead capture",
	"A monthly growth strategy and action plan",
	"Social media content",
	"Basic automation",
	"Ad campaign guidance",
];

export default function MarketingPackagesDarwin() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<main className="bg-[#f1f1f1] text-[#212121]">
				<section className="padding-x pt-[150px] pb-[70px] sm:pt-[120px] xm:pt-[110px]">
					<p className="small-text uppercase text-[#21212188]">Darwin and the Northern Territory</p>
					<h1 className="pt-[18px] max-w-[1100px] font-FoundersGrotesk font-semibold text-[76px] leading-[0.92] lg:text-[64px] md:text-[52px] sm:text-[40px] xm:text-[34px]">
						All Your Marketing. One Simple Monthly Fee.
					</h1>
					<p className="pt-[22px] max-w-[760px] text-[28px] leading-[1.25] md:text-[24px] sm:text-[20px] xm:text-[18px] font-NeueMontreal">
						From $595 + GST a month until the end of November 2026.
					</p>
					<p className="paragraph max-w-[760px] pt-[18px]">
						A monthly marketing offer for small businesses in Darwin, Palmerston, Casuarina and the NT. There is a 3-month minimum commitment. That is the time it takes to see visible results. The $595 is only the management fee. Ad spend is paid separately, directly to Google.
					</p>
					<div className="pt-[28px] flex flex-wrap items-center gap-[16px]">
						<a
							href={`tel:${site.phoneTel}`}
							data-track-location="offer"
							className="inline-flex items-center justify-center rounded-full bg-[#fd4402] px-[22px] py-[14px] text-[28px] leading-[1] font-FoundersGrotesk font-semibold text-white hover:bg-[#212121] transition-colors">
							{site.phoneDisplay}
						</a>
						<Link href="/contact" className="inline-flex items-center gap-[10px] rounded-full border border-[#212121] px-[20px] py-[14px] small-text uppercase hover:bg-[#212121] hover:text-white transition-colors">
							Book a call
							<ArrowUpRight size={18} />
						</Link>
					</div>
				</section>

				<section className="padding-x pb-[40px]">
					<h2 className="text-[48px] leading-[0.95] font-FoundersGrotesk font-semibold uppercase">Included</h2>
					<ul className="pt-[18px] grid grid-cols-2 gap-[12px] sm:grid-cols-1 xm:grid-cols-1">
						{INCLUDED.map((item) => (
							<li key={item} className="rounded-[16px] border border-[#21212133] p-[18px] paragraph font-medium">
								{item}
							</li>
						))}
					</ul>
					<p className="paragraph pt-[18px] font-medium">The $595 is only the management fee. Ad spend is paid separately, directly to Google.</p>
				</section>

				<section className="padding-x pb-[80px]">
					<h2 className="text-[48px] leading-[0.95] font-FoundersGrotesk font-semibold uppercase">Before we start</h2>
					<p className="paragraph max-w-[760px] border-t border-[#21212122] py-[12px]">Talk to us about start dates.</p>
					<p className="paragraph max-w-[760px] border-t border-[#21212122] py-[12px]">Talk to us about what happens after November 2026.</p>
				</section>
			</main>
			<Ready />
		</Curve>
	);
}
