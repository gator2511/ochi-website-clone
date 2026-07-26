import Link from "next/link";
import { Curve } from "@/components";
import content from "@/content/pages/privacy.json";
import site from "@/content/data/site.json";

const documentId = "content/pages/privacy.json";

export default function PrivacyPolicy() {
	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-background text-secondry padding-x pt-[150px] pb-[140px] md:pt-[120px] sm:pt-[100px] xm:pt-[100px]">
					<header className="w-full border-b border-[#21212155] pb-[70px] md:pb-[55px] sm:pb-[40px] xm:pb-[40px]">
						<p data-sb-field-path="eyebrow" className="paragraph font-NeueMontreal font-medium uppercase pb-[24px]">
							{content.eyebrow}
						</p>
						<h1 className="text-[150px] leading-[0.82] lg:text-[120px] md:text-[92px] sm:text-[64px] xm:text-[54px] font-semibold font-FoundersGrotesk uppercase tracking-[-2px]">
							{content.headingLines.map((line, index) => (
								<span key={`${line}-${index}`} data-sb-field-path={`headingLines.${index}`}>
									{line}{index < content.headingLines.length - 1 && <br />}
								</span>
							))}
						</h1>
						<div className="flex justify-between gap-[30px] pt-[55px] sm:flex-col xm:flex-col">
							<p data-sb-field-path="summary" className="paragraph font-NeueMontreal max-w-[680px]">
								{content.summary}
							</p>
							<p data-sb-field-path="effectiveDate" className="paragraph font-NeueMontreal whitespace-nowrap">
								{content.effectiveDate}
							</p>
						</div>
					</header>

					<div className="w-full grid grid-cols-12 gap-[30px] pt-[60px] sm:block xm:block">
						<aside className="col-span-3 sm:hidden xm:hidden">
							<div data-sb-object-id="content/data/site.json" className="sticky top-[110px]">
								<p data-sb-object-id={documentId} data-sb-field-path="contactLabel" className="paragraph font-NeueMontreal font-medium pb-[20px]">
									{content.contactLabel}
								</p>
								<Link data-sb-field-path="email" href={`mailto:${site.email}`} className="paragraph font-NeueMontreal underline underline-offset-4">
									{site.email}
								</Link>
								<p className="paragraph font-NeueMontreal pt-[16px]">
									{site.addressLines.map((line, index) => (
										<span key={`${line}-${index}`} data-sb-field-path={`addressLines.${index}`}>
											{line}<br />
										</span>
									))}
								</p>
							</div>
						</aside>

						<div className="col-span-9">
							{content.sections.map((section, index) => (
								<section key={`${section.number}-${index}`} className="grid grid-cols-9 gap-[25px] border-b border-[#21212155] py-[42px] sm:block xm:block">
									<p data-sb-field-path={`sections.${index}.number`} className="col-span-1 paragraph font-NeueMontreal font-medium sm:pb-[12px] xm:pb-[12px]">
										{section.number}
									</p>
									<h2 data-sb-field-path={`sections.${index}.title`} className="col-span-3 text-[38px] leading-[1] md:text-[32px] sm:text-[30px] xm:text-[28px] font-FoundersGrotesk font-semibold uppercase sm:pb-[20px] xm:pb-[20px]">
										{section.title}
									</h2>
									<div className="col-span-5 space-y-[18px] paragraph font-NeueMontreal">
										{section.paragraphs.map((paragraph, paragraphIndex) => (
											<p key={`${paragraph}-${paragraphIndex}`} data-sb-field-path={`sections.${index}.paragraphs.${paragraphIndex}`}>
												{paragraph}
											</p>
										))}
										{section.bullets.length > 0 && (
											<ul className="list-disc pl-[22px] space-y-[8px]">
												{section.bullets.map((bullet, bulletIndex) => (
													<li key={`${bullet}-${bulletIndex}`} data-sb-field-path={`sections.${index}.bullets.${bulletIndex}`}>
														{bullet}
													</li>
												))}
											</ul>
										)}
									</div>
								</section>
							))}
						</div>
					</div>
				</main>
			</Curve>
		</div>
	);
}
