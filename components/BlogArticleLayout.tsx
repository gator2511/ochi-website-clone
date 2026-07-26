"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Curve, Ready } from "@/components";
import FAQStructuredData from "@/components/FAQStructuredData";

type BlogArticleContent = {
	type: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	keywords: string[];
	category: string;
	author: string;
	publishedDate: string;
	updatedDate: string;
	readTime: string;
	title: string;
	intro: string;
	heroImage: string;
	heroImageAlt: string;
	sections: Array<{
		number: string;
		heading: string;
		paragraphs: string[];
		fix: string;
	}>;
	bottomLineHeading: string;
	bottomLine: string;
	backdropText: string;
	faqHeading: string;
	faqs: Array<{ question: string; answer: string }>;
	ctaEyebrow: string;
	ctaHeading: string;
	ctaLabel: string;
	ctaUrl: string;
};

export default function BlogArticleLayout({
	content,
	documentId,
}: {
	content: BlogArticleContent;
	documentId: string;
}) {
	const [activeFaq, setActiveFaq] = useState(0);
	const heroRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-13%"]);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<FAQStructuredData
				items={content.faqs.map((item) => ({
					question: item.question,
					description: item.answer,
				}))}
			/>
			<div data-sb-object-id={documentId}>
				<Curve backgroundColor="#f1f1f1">
					<article className="bg-[#f1f1f1] text-[#212121]">
						<section ref={heroRef} className="relative min-h-screen padding-x pt-[125px] pb-[35px] overflow-hidden">
							<div className="flex items-center justify-between border-b border-[#21212144] pb-[18px]">
								<Link href="/insights" className="group flex items-center gap-[8px] small-text font-NeueMontreal uppercase">
									<ArrowLeft size={18} strokeWidth={1.4} className="transition-transform group-hover:-translate-x-[4px]" />
									Back to insights
								</Link>
								<p className="small-text font-NeueMontreal uppercase text-[#21212199]">
									{content.publishedDate} · {content.readTime}
								</p>
							</div>

							<motion.div style={{ y: titleY }} className="relative z-10 pt-[55px] pb-[45px]">
								<p data-sb-field-path="category" className="small-text font-NeueMontreal uppercase text-[#fd4402] pb-[22px]">
									{content.category}
								</p>
								<h1
									data-sb-field-path="title"
									className="max-w-[1450px] text-[150px] leading-[0.78] lg:text-[122px] md:text-[94px] sm:text-[66px] xm:text-[54px] font-semibold font-FoundersGrotesk uppercase tracking-[-2px]">
									{content.title}
								</h1>
							</motion.div>

							<div className="grid grid-cols-12 gap-[28px] items-end pb-[35px] sm:flex sm:flex-col xm:flex xm:flex-col">
								<div className="col-span-7" />
								<p data-sb-field-path="intro" className="col-span-5 sub-heading font-NeueMontreal font-medium">
									{content.intro}
								</p>
							</div>

							<div className="relative h-[72vh] min-h-[620px] sm:h-[55vh] sm:min-h-[420px] xm:h-[52vh] xm:min-h-[360px] overflow-hidden rounded-[18px] bg-[#d7d7d7]">
								<motion.img
									style={{ y: imageY, scale: 1.08 }}
									data-sb-field-path="heroImage"
									src={content.heroImage}
									alt={content.heroImageAlt}
									className="absolute inset-[-7%] w-[114%] h-[114%] object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
								<div className="absolute bottom-[22px] left-[22px] right-[22px] flex items-end justify-between text-white">
									<p className="small-text font-NeueMontreal uppercase">GT Marketing Journal</p>
									<p data-sb-field-path="author" className="small-text font-NeueMontreal uppercase">By {content.author}</p>
								</div>
							</div>
						</section>

						<section className="padding-x py-[110px] md:py-[85px] sm:py-[65px] xm:py-[65px]">
							<div className="grid grid-cols-12 gap-[30px] sm:block xm:block">
								<aside className="col-span-3 sm:hidden xm:hidden">
									<div className="sticky top-[115px] border-t border-[#21212144] pt-[18px]">
										<p className="small-text font-NeueMontreal uppercase text-[#21212188]">Article details</p>
										<div className="pt-[28px] space-y-[18px] paragraph font-NeueMontreal">
											<p><span className="block text-[#21212177]">Category</span>{content.category}</p>
											<p><span className="block text-[#21212177]">Reading time</span>{content.readTime}</p>
											<p><span className="block text-[#21212177]">Published</span>{content.publishedDate}</p>
										</div>
									</div>
								</aside>

								<div className="col-span-9">
									{content.sections.map((section, index) => (
										<section key={section.number} className="grid grid-cols-9 gap-[25px] border-t border-[#21212144] py-[55px] sm:block xm:block">
											<p data-sb-field-path={`sections.${index}.number`} className="col-span-1 paragraph font-NeueMontreal text-[#fd4402] sm:pb-[14px] xm:pb-[14px]">
												{section.number}
											</p>
											<h2
												data-sb-field-path={`sections.${index}.heading`}
												className="col-span-4 text-[60px] leading-[0.94] lg:text-[52px] md:text-[44px] sm:text-[42px] xm:text-[36px] font-semibold font-FoundersGrotesk uppercase tracking-[-1px] sm:pb-[24px] xm:pb-[24px]">
												{section.heading}
											</h2>
											<div className="col-span-4">
												{section.paragraphs.map((paragraph, paragraphIndex) => (
													<p
														key={paragraphIndex}
														data-sb-field-path={`sections.${index}.paragraphs.${paragraphIndex}`}
														className="paragraph font-NeueMontreal leading-[1.45]">
														{paragraph}
													</p>
												))}
												<div className="mt-[28px] rounded-[14px] bg-[#fd4402] p-[26px] text-white">
													<p className="small-text font-NeueMontreal uppercase pb-[12px]">Checklist action</p>
													<p data-sb-field-path={`sections.${index}.fix`} className="paragraph font-NeueMontreal leading-[1.35]">
														{section.fix}
													</p>
												</div>
											</div>
										</section>
									))}
								</div>
							</div>
						</section>

						<section className="relative overflow-hidden bg-[#fd4402] text-white padding-x py-[110px] md:py-[85px] sm:py-[65px] xm:py-[65px] rounded-t-[20px]">
							<p aria-hidden="true" className="absolute -top-[20px] -left-[10px] text-[30vw] leading-[0.7] font-FoundersGrotesk font-semibold uppercase text-white opacity-[0.09] whitespace-nowrap pointer-events-none">
								{content.backdropText}
							</p>
							<div className="relative z-10 grid grid-cols-12 gap-[30px] sm:block xm:block">
								<p data-sb-field-path="bottomLineHeading" className="col-span-3 small-text font-NeueMontreal uppercase sm:pb-[30px] xm:pb-[30px]">
									{content.bottomLineHeading}
								</p>
								<p data-sb-field-path="bottomLine" className="col-span-9 text-[66px] leading-[0.98] lg:text-[58px] md:text-[48px] sm:text-[42px] xm:text-[36px] font-FoundersGrotesk font-semibold">
									{content.bottomLine}
								</p>
							</div>
						</section>

						<section className="padding-x py-[110px] md:py-[85px] sm:py-[65px] xm:py-[65px]">
							<h2 data-sb-field-path="faqHeading" className="text-[110px] leading-[0.82] lg:text-[92px] md:text-[72px] sm:text-[58px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase pb-[55px]">
								{content.faqHeading}
							</h2>
							<div className="border-t border-[#21212144]">
								{content.faqs.map((faq, index) => {
									const open = activeFaq === index;
									return (
										<div key={faq.question} className="border-b border-[#21212144]">
											<button
												type="button"
												className="w-full flex items-center justify-between gap-[30px] text-left py-[28px]"
												onClick={() => setActiveFaq(open ? -1 : index)}>
												<h3 data-sb-field-path={`faqs.${index}.question`} className="text-[42px] leading-[1] md:text-[36px] sm:text-[32px] xm:text-[28px] font-FoundersGrotesk font-semibold uppercase">
													{faq.question}
												</h3>
												<span className={`shrink-0 w-[48px] h-[48px] rounded-full border border-[#21212166] flex items-center justify-center transition-transform duration-300 ${open ? "rotate-45 bg-[#fd4402] text-white border-[#fd4402]" : ""}`}>
													<Plus size={24} strokeWidth={1.5} />
												</span>
											</button>
											<AnimatePresence initial={false}>
												{open && (
													<motion.div
														initial={{ height: 0, opacity: 0 }}
														animate={{ height: "auto", opacity: 1 }}
														exit={{ height: 0, opacity: 0 }}
														transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
														className="overflow-hidden">
														<p data-sb-field-path={`faqs.${index}.answer`} className="paragraph font-NeueMontreal max-w-[850px] ml-auto pb-[34px] leading-[1.45]">
															{faq.answer}
														</p>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									);
								})}
							</div>
						</section>

						<section className="padding-x pb-[120px]">
							<Link href={content.ctaUrl} className="group block rounded-[20px] bg-[#111] text-white p-[55px] sm:p-[30px] xm:p-[26px]">
								<div className="flex justify-between gap-[30px] sm:flex-col xm:flex-col">
									<p data-sb-field-path="ctaEyebrow" className="small-text font-NeueMontreal uppercase text-[#fd4402]">
										{content.ctaEyebrow}
									</p>
									<ArrowUpRight size={44} strokeWidth={1.2} className="transition-transform duration-500 group-hover:rotate-45" />
								</div>
								<h2 data-sb-field-path="ctaHeading" className="max-w-[1200px] text-[100px] leading-[0.85] lg:text-[84px] md:text-[68px] sm:text-[54px] xm:text-[44px] font-FoundersGrotesk font-semibold uppercase pt-[85px] group-hover:text-[#fd4402] transition-colors duration-500">
									{content.ctaHeading}
								</h2>
								<p data-sb-field-path="ctaLabel" className="paragraph font-NeueMontreal uppercase border-t border-white/25 mt-[45px] pt-[20px]">
									{content.ctaLabel}
								</p>
							</Link>
						</section>
					</article>
					<Ready />
				</Curve>
			</div>
		</>
	);
}
