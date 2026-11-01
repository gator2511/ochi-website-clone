import site from "@/content/data/site.json";

export default function TrustSignals({ variant = "home" }: { variant?: "home" | "contact" }) {
	const compact = variant === "contact";
	const phoneLocation = compact ? "contact_trust" : "home_trust";

	return (
		<section
			aria-label="GT Marketing trust signals"
			className={
				compact
					? "rounded-[20px] border border-[#21212133] bg-white p-[22px]"
					: "w-full bg-[#f1f1f1] text-[#212121] padding-x py-[90px] md:py-[70px] sm:py-[56px] xm:py-[48px] border-b border-[#21212122]"
			}>
			<div className={compact ? "" : "grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col"}>
				<div className={compact ? "" : "col-span-5"}>
					<p className="small-text uppercase text-[#21212188]">Darwin office</p>
					<div className="mt-[18px] flex items-center gap-[14px]">
						<div
							aria-hidden="true"
							className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#212121] text-[22px] font-FoundersGrotesk font-semibold text-white">
							GT
						</div>
						<div>
							<p className="text-[28px] leading-[1] font-FoundersGrotesk font-semibold uppercase">Gundeep Thethy</p>
							<p className="paragraph pt-[6px]">Marketing Strategist &amp; Founder</p>
						</div>
					</div>
					<p className="text-[14px] leading-[1.5] text-[#21212199] pt-[16px]">
						{site.addressLines.join(", ")}.{" "}
						<a href={`tel:${site.phoneTel}`} data-track-location={phoneLocation} className="underline underline-offset-4 hover:text-[#fd4402]">
							{site.phoneDisplay}
						</a>
					</p>
					<a
						href="https://share.google/lxoORj0c6PjUcTRij"
						target="_blank"
						rel="noopener"
						className="mt-[16px] inline-flex underline underline-offset-4 hover:text-[#fd4402] paragraph font-medium">
						Read our Google reviews
					</a>
				</div>

			</div>
		</section>
	);
}
