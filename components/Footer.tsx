import Link from "next/link";
import Image from "next/image";
import { LinkHover, TextMask } from "@/animation";
import site from "@/content/data/site.json";

const siteDocumentId = "content/data/site.json";

export default function Footer() {
	return (
		<footer
			data-sb-object-id={siteDocumentId}
			className="w-full padding-x z-30 relative pt-[32px] pb-[24px] bg-background rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[28px] xm:gap-[28px]">
				<div className="sm:w-full xm:w-full w-1/2">
					<h1
						data-sb-field-path="footerHeading"
						className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{[site.footerHeading]}</TextMask>
					</h1>
				</div>

				<div className="sm:w-full xm:w-full w-1/2">
					<h1
						data-sb-field-path="footerHeadingAccent"
						className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-[#fd4402] uppercase">
						<TextMask>{[site.footerHeadingAccent]}</TextMask>
					</h1>

					<div className="pt-[34px]">
						<h2 className="paragraph font-medium font-NeueMontreal text-secondry pb-[14px]">S:</h2>
						{site.socialLinks.map((item, index) => (
							<span key={`${item.label}-${index}`} data-sb-field-path={`socialLinks.${index}.label`}>
								<LinkHover
									title={item.label}
									href={item.url}
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
								/>
							</span>
						))}
					</div>

					<div className="flex justify-between pt-[34px] sm:flex-col xm:flex-col sm:gap-[28px] xm:gap-[28px]">
						<div>
							<h2 className="paragraph font-medium font-NeueMontreal text-secondry pb-[14px]">L:</h2>
							<div className="flex flex-col gap-y-[8px]">
								{site.addressLines.map((line, index) => (
									<span key={`${line}-${index}`} data-sb-field-path={`addressLines.${index}`}>
										<LinkHover
											title={line}
											href={site.addressUrl}
											className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										/>
									</span>
								))}
							</div>
						</div>

						<div>
							<h2 className="paragraph font-medium font-NeueMontreal text-secondry pb-[14px]">M:</h2>
							{site.navigation.map((item, index) => (
								<span key={`${item.label}-${index}`} data-sb-field-path={`navigation.${index}.label`}>
									<LinkHover
										title={item.label}
										href={item.url}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								</span>
							))}
						</div>
					</div>

					<div className="pt-[34px] flex gap-x-[20px]">
						<h2 className="paragraph font-medium font-NeueMontreal text-secondry">E:</h2>
						<span data-sb-field-path="email">
							<LinkHover
								title={site.email}
								href={`mailto:${site.email}`}
								className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</span>
					</div>

					<p
						data-sb-field-path="acknowledgement"
						className="max-w-[920px] pt-[20px] text-[14px] leading-[1.5] md:text-[13px] sm:text-[12px] xm:text-[12px] font-NeueMontreal italic text-secondry opacity-80">
						{site.acknowledgement}
					</p>
					<p
						data-sb-field-path="abn"
						className="pt-[8px] text-[13px] leading-[1.4] sm:text-[12px] xm:text-[12px] font-NeueMontreal font-medium text-secondry opacity-75">
						{site.abn}
					</p>

					<div className="pt-[12px] flex items-center justify-start">
						<Image
							data-sb-field-path="footerFlags.image"
							src={site.footerFlags.image}
							alt={site.footerFlags.alt}
							width={72}
							height={113}
							className="w-[72px] h-auto md:w-[64px] sm:w-[56px] xm:w-[52px] object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="w-full mt-[34px] pt-[18px] border-t border-[#21212122] flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start sm:gap-[18px] xm:gap-[18px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href="/" aria-label={`${site.brandName} home`}>
						<Image
							data-sb-field-path="logo"
							src={site.logo}
							alt={site.logoAlt}
							width={38}
							height={56}
							className="h-[46px] w-auto object-contain"
						/>
					</Link>
				</div>
				<div className="w-1/2 flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<p data-sb-field-path="copyright" className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							{site.copyright}
						</p>
						<span data-sb-field-path="privacyLabel">
							<LinkHover
								title={site.privacyLabel}
								href="/privacy"
								className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
							/>
						</span>
					</div>
					<div data-sb-field-path="websiteCredit">
						<LinkHover
							title={site.websiteCredit}
							href="https://gtmarketing.io"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-secondry opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
