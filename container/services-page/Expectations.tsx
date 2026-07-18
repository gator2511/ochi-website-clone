"use client";

import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { AnimatePresence, motion } from "framer-motion";

type ExpectationsProps = {
	content: {
		marquee: string;
		heading: string;
		items: Array<{
			number: string;
			title: string;
			buttonLabel: string;
			description: string;
		}>;
	};
};

export default function Expectations({ content }: ExpectationsProps) {
	const [openItemId, setOpenItemId] = useState<number | null>(null);
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title={content.marquee}
					fieldPath="expectations.marquee"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[20px]">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 data-sb-field-path="expectations.heading" className="paragraph font-medium text-white font-NeueMontreal">
							{content.heading}
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap gap-[20px]">
						{content.items.map((item, index) => (
							<div className="w-[345px] flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]" key={`${item.number}-${index}`}>
								<div className="bg-[#145B52] w-full flex flex-col rounded-[20px] px-[30px] py-[20px]">
									<h1 data-sb-field-path={`expectations.items.${index}.number`} className="sub-heading font-normal font-NeueMontreal text-white mb-[100px]">
										{item.number}
									</h1>
									<div className="w-full flex justify-between items-center">
										<span data-sb-field-path={`expectations.items.${index}.title`} className="small-text font-normal font-NeueMontreal text-white">
											<TextHover titile1={item.title} titile2={item.title} />
										</span>
										<button onClick={() => setOpenItemId(openItemId === index ? null : index)} className="small-text uppercase font-normal font-NeueMontreal text-white">
											{openItemId === index ? "Hide" : item.buttonLabel}
										</button>
									</div>
									<AnimatePresence>
										{openItemId === index && (
											<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
												<div data-sb-field-path={`expectations.items.${index}.description`} className="border-t border-[#f1f1f155] pt-[20px] text-background mt-[10px]">
													{item.description}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
