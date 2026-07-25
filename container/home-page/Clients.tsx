"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Ratings } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

type ReviewItem = {
	website: string;
	url: string;
	serviceLabel: string;
	name: string;
	image: string;
	review: string;
	tags: Array<{ label: string; url: string }>;
};

type ClientsProps = {
	content: {
		heading: string;
		items: ReviewItem[];
	};
};

export default function Clients({ content }: ClientsProps) {
	const [activeAccordion, setActiveAccordion] = useState(0);
	const toggleAccordion = (itemIndex: number) => {
		setActiveAccordion((previous) => (previous === itemIndex ? -1 : itemIndex));
	};

	return (
		<section className="w-full padding-y">
			<h1
				data-sb-field-path="reviews.heading"
				className="sub-heading padding-x font-medium font-NeueMontreal text-[#fd4402] pb-[50px]">
				{content.heading}
			</h1>
			{content.items.map((item, index) => (
				<div
					key={`${item.website}-${index}`}
					className={`w-full flex py-[10px] flex-col ${index === 0 ? "border-y" : "border-b"} border-[#21212155]`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] flex items-center">
							<div className="w-[40%] sm:w-auto xm:w-auto">
								<Link
									data-sb-field-path={`reviews.items.${index}.website`}
									href={item.url}
									className="small-text font-normal font-NeueMontreal text-secondry link-flash">
									{item.website}
								</Link>
							</div>
							<div className="w-auto sm:hidden xm:hidden">
								<motion.h3
									data-sb-field-path={`reviews.items.${index}.serviceLabel`}
									className={`small-text font-normal font-NeueMontreal text-secondry ${activeAccordion === index ? "opacity-100" : "opacity-0"} transition-all duration-200 ease-in-out`}>
									{item.serviceLabel}
								</motion.h3>
							</div>
						</div>
						<div className="w-[50%] flex items-center justify-between">
							<h3
								data-sb-field-path={`reviews.items.${index}.name`}
								className="small-text font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
							<button
								className={`small-text font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${activeAccordion === index ? "text-gray-300" : "text-secondry link-flash"}`}
								onClick={() => toggleAccordion(index)}>
								Read
							</button>
						</div>
					</div>

					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col">
						<div className="w-[20%] sm:w-auto xm:w-auto" />
						<div className="w-[30%] sm:w-auto xm:w-auto sm:flex xm:flex flex-wrap gap-x-[5px] sm:pt-[10px] xm:pt-[10px]">
							{item.tags.map((tag, tagIndex) => (
								<AnimatePresence key={`${tag.label}-${tagIndex}`}>
									{activeAccordion === index && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
											data-sb-field-path={`reviews.items.${index}.tags.${tagIndex}.label`}>
											<Button href={tag.url} title={tag.label} />
										</motion.div>
									)}
								</AnimatePresence>
							))}
						</div>
						<div className="w-[40%] sm:w-auto xm:w-auto">
							<AnimatePresence>
								{activeAccordion === index && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ ease: [0.4, 0, 0.2, 1], duration: 1.3 }}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="w-[130px] h-[130px]">
												<img
													data-sb-field-path={`reviews.items.${index}.image`}
													src={item.image}
													alt={`${item.name} review`}
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<p
												data-sb-field-path={`reviews.items.${index}.review`}
												className="small-text tracking-wider font-normal font-NeueMontreal text-secondry">
												{item.review}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%] sm:w-auto xm:w-auto" />
					</div>
				</div>
			))}
			<div className="padding-x pt-[80px]">
				<Ratings />
			</div>
		</section>
	);
}
