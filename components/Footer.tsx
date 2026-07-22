import Link from "next/link";
import Image from "next/image";
import { LinkHover, TextMask } from "@/animation";
import site from "@/content/data/site.json";

const siteDocumentId = "content/data/site.json";

export default function Footer() {
	return (
		<footer
			data-sb-object-id={siteDocumentId}
			className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1
						data-sb-field-path="footerHeading"
						className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
						<TextMask>{[site.footerHeading]}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1
							data-sb-field-path="footerHeadingAccent"
							className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
							<TextMask>{[site.footerHeadingAccent]}</TextMask>
						</h1>
						<div className="pt-[50px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">S:</h1>
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
						<div className="flex justify-between sm:flex-col xm:flex-col sm:gap-[10px] xm:gap-[10px]">
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">L:</h1>
								<div className="flex flex-col gap-y-[10px]">
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
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">M:</h1>
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
						<div className="pt-[50px] flex gap-x-[20px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-secondry">E:</h1>
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
							className="max-w-[920px] pt-[34px] text-[15px] leading-[1.55] md:text-[14px] sm:text-[13px] xm:text-[13px] font-NeueMontreal italic text-secondry opacity-80">
							{site.acknowledgement}
						</p>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center py-[55px] md:py-[45px] sm:py-[35px] xm:py-[35px]">
				<Image
					data-sb-field-path="footerFlags.image"
					src={site.footerFlags.image}
					alt={site.footerFlags.alt}
					width={183}
					height={287}
					className="w-[165px] h-auto md:w-[145px] sm:w-[125px] xm:w-[115px] object-contain"
				/>
			</div>

			<div className="w-full pt-[20px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href="/" aria-label={`${site.brandName} home`}>
						<Image
							data-sb-field-path="logo"
							src={site.logo}
							alt={site.logoAlt}
							width={38}
							height={56}
							className="h-[52px] w-auto object-contain"
						/>
					</Link>
				</div>
				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 data-sb-field-path="copyright" className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
							{site.copyright}
						</h1>
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
