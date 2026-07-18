"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProcessProps = {
	content: {
		heading: string;
		items: Array<{
			phase: string;
			name: string;
			image: string;
			description: string;
			buttonLabel: string;
		}>;
	};
};

export default function Process({ content }: ProcessProps) {
	const [activeAccordion, setActiveAccordion] = useState(0);
	return (
		<section className="w-full padding-y">
			<div className="w-full padding-x mb-[40px]">
				<h1 data-sb-field-path="process.heading" className="sub-heading font-medium font-NeueMontreal text-secondry">
					{content.heading}
				</h1>
			</div>
			{content.items.map((item, index) => (
				<div
					key={`${item.phase}-${index}`}
					className={`w-full flex py-[10px] flex-col ${index === 0 ? "border-y" : "border-b"} border-[#21212155]`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<h3 data-sb-field-path={`process.items.${index}.phase`} className="w-[50%] paragraph font-normal font-NeueMontreal text-secondry">
							{item.phase}
						</h3>
						<h3 data-sb-field-path={`process.items.${index}.name`} className="w-[40%] paragraph font-normal font-NeueMontreal text-secondry">
							{item.name}
						</h3>
						<div className="w-[10%] flex justify-end">
							<button
								className={`paragraph uppercase ${activeAccordion === index ? "text-gray-300" : "text-secondry link-flash"}`}
								onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}>
								{item.buttonLabel}
							</button>
						</div>
					</div>
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col">
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === index && (
									<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<img data-sb-field-path={`process.items.${index}.image`} src={item.image} alt={item.name} className="w-[130px] h-[130px] object-cover rounded-[10px]" />
											<p data-sb-field-path={`process.items.${index}.description`} className="paragraph tracking-wider font-NeueMontreal text-secondry">
												{item.description}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
		</section>
	);
}
