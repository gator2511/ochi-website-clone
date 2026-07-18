"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqProps = {
	content: {
		heading: string;
		items: Array<{
			question: string;
			title: string;
			description: string;
			buttonLabel: string;
			links: Array<{ title: string; description: string }>;
		}>;
	};
};

export default function Faq({ content }: FaqProps) {
	const [activeAccordion, setActiveAccordion] = useState(0);
	return (
		<section className="w-full padding-y mt-[-10px] bg-background z-30 relative rounded-t-[20px]">
			<h1 data-sb-field-path="faq.heading" className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
				{content.heading}
			</h1>
			{content.items.map((item, index) => (
				<div key={`${item.question}-${index}`} className={`w-full flex py-[10px] flex-col ${index === 0 ? "border-y" : "border-b"} border-[#21212155]`}>
					<div className="w-full flex items-center justify-between sm:gap-[15px] xm:gap-[15px] py-[10px] padding-x">
						<h1 data-sb-field-path={`faq.items.${index}.question`} className="w-[50%] paragraph font-normal font-NeueMontreal text-secondry">
							{item.question}
						</h1>
						<div className="w-[50%] flex items-center justify-between">
							<h3 data-sb-field-path={`faq.items.${index}.title`} className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.title}
							</h3>
							<button className={`paragraph uppercase ${activeAccordion === index ? "text-gray-300" : "text-secondry link-flash"}`} onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}>
								{item.buttonLabel}
							</button>
						</div>
					</div>
					<div className="w-full flex justify-between padding-x">
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[50%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === index && (
									<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<p data-sb-field-path={`faq.items.${index}.description`} className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
												{item.description}
											</p>
											{item.links.map((link, linkIndex) => (
												<div key={`${link.title}-${linkIndex}`} className="flex pt-[20px] sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] justify-between gap-[80px]">
													<span data-sb-field-path={`faq.items.${index}.links.${linkIndex}.title`} className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">{link.title}</span>
													<p data-sb-field-path={`faq.items.${index}.links.${linkIndex}.description`} className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">{link.description}</p>
												</div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
