import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FreeSeoAuditCta({ className = "" }: { className?: string }) {
	return (
		<section className={`padding-x ${className}`}>
			<div className="rounded-[20px] border border-[#21212133] bg-white p-[28px] sm:p-[22px] xm:p-[20px] flex items-end justify-between gap-[24px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
				<div className="max-w-[720px] min-w-0">
					<h2 className="text-[40px] leading-[0.95] md:text-[34px] sm:text-[32px] xm:text-[28px] uppercase font-FoundersGrotesk font-semibold">
						Get a free local SEO audit
					</h2>
					<p className="paragraph pt-[12px] text-[#212121aa]">
						A short written report on your Google Business Profile, Google Maps, website, reviews and nearby competitors. No obligation.
					</p>
				</div>
				<Link
					href="/free-seo-audit-darwin"
					className="inline-flex shrink-0 items-center gap-[10px] rounded-full bg-[#fd4402] px-[20px] py-[14px] text-white small-text uppercase hover:bg-[#212121] transition-colors">
					Get a free local SEO audit
					<ArrowUpRight size={18} />
				</Link>
			</div>
		</section>
	);
}
