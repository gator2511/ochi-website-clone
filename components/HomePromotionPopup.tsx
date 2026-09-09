"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Promotion = {
	enabled: boolean;
	eyebrow: string;
	discount: string;
	heading: string;
	description: string;
	expiresAt: string;
	expiresLabel: string;
	ctaLabel: string;
	ctaUrl: string;
	terms: string;
};

const promotionDocumentId = "content/data/promotion.json";

export default function HomePromotionPopup({ content }: { content: Promotion }) {
	const [open, setOpen] = useState(false);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	const close = () => {
		window.sessionStorage.setItem("gt_home_promo_dismissed", "1");
		setOpen(false);
	};

	useEffect(() => {
		if (!content?.enabled) return;

		const expiry = new Date(content.expiresAt).getTime();
		if (!Number.isFinite(expiry) || Date.now() > expiry) return;
		if (window.sessionStorage.getItem("gt_home_promo_dismissed") === "1") return;

		const timer = window.setTimeout(() => setOpen(true), 1200);
		return () => window.clearTimeout(timer);
	}, [content?.enabled, content?.expiresAt]);

	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.setTimeout(() => closeButtonRef.current?.focus(), 50);

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") close();
		};
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed inset-0 z-[9998] flex items-center justify-center p-[22px] sm:p-[12px] xm:p-[10px]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}>
					<button
						type="button"
						aria-label="Close offer"
						onClick={close}
						className="absolute inset-0 bg-[#111]/75 backdrop-blur-[6px] cursor-default"
					/>

					<motion.section
						data-sb-object-id={promotionDocumentId}
						role="dialog"
						aria-modal="true"
						aria-labelledby="gt-promo-title"
						initial={{ opacity: 0, y: 42, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 24, scale: 0.98 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						className="relative z-10 w-full max-w-[980px] overflow-hidden rounded-[22px] bg-[#fd4402] text-white shadow-2xl">
						<div className="grid grid-cols-12 md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<div className="col-span-5 border-r border-white/35 md:border-r-0 md:border-b sm:border-r-0 sm:border-b xm:border-r-0 xm:border-b border-white/35 p-[34px] sm:p-[24px] xm:p-[22px] flex flex-col justify-between min-h-[470px] md:min-h-0 sm:min-h-0 xm:min-h-0">
								<div className="flex items-start justify-between gap-[20px]">
									<p className="small-text uppercase text-white/75" data-sb-field-path="eyebrow">{content.eyebrow}</p>
									<button
										ref={closeButtonRef}
										type="button"
										onClick={close}
										aria-label="Close promotional offer"
										className="w-[42px] h-[42px] shrink-0 rounded-full border border-white/60 flex items-center justify-center transition-colors hover:bg-white hover:text-[#fd4402] focus:outline-none focus:ring-2 focus:ring-white">
										<X size={19} />
									</button>
								</div>

								<div className="pt-[45px] md:pt-[30px] sm:pt-[28px] xm:pt-[25px]">
									<p className="font-FoundersGrotesk font-semibold uppercase text-[168px] leading-[0.7] lg:text-[145px] md:text-[118px] sm:text-[102px] xm:text-[86px] tracking-[-4px]" data-sb-field-path="discount">
										{content.discount}
									</p>
									<p className="small-text uppercase pt-[26px] text-white/80" data-sb-field-path="expiresLabel">{content.expiresLabel}</p>
								</div>
							</div>

							<div className="col-span-7 p-[38px] lg:p-[34px] md:p-[30px] sm:p-[24px] xm:p-[22px] bg-[#f1f1f1] text-[#212121]">
								<h2 id="gt-promo-title" className="font-FoundersGrotesk font-semibold uppercase text-[82px] leading-[0.83] lg:text-[72px] md:text-[66px] sm:text-[58px] xm:text-[50px] tracking-[-2px]" data-sb-field-path="heading">
									{content.heading}
								</h2>
								<p className="paragraph max-w-[610px] pt-[28px] text-[#212121]/80" data-sb-field-path="description">{content.description}</p>

								<Link
									href={content.ctaUrl}
									onClick={close}
									data-cursor="interactive"
									className="mt-[34px] inline-flex items-center gap-[14px] rounded-full bg-[#212121] text-white px-[22px] py-[14px] small-text uppercase transition-colors hover:bg-[#fd4402] focus:outline-none focus:ring-2 focus:ring-[#fd4402] focus:ring-offset-2">
									<span data-sb-field-path="ctaLabel">{content.ctaLabel}</span>
									<ArrowUpRight size={18} strokeWidth={1.5} />
								</Link>

								<p className="mt-[42px] pt-[18px] border-t border-[#212121]/20 text-[12px] leading-[1.45] text-[#212121]/58" data-sb-field-path="terms">
									{content.terms}
								</p>
							</div>
						</div>
					</motion.section>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
