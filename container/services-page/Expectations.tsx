"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

const serviceExpectations = expectationsItems.map((item) => {
	if (item.id === 2) {
		return {
			...item,
			para1:
				"Every project has one accountable GT Marketing lead who guides the work from discovery through delivery. We assemble the right creative and technical support for your project, keep communication clear, and translate your commercial goals into focused actions for the team.",
		};
	}

	if (item.id === 3) {
		return {
			...item,
			subTitle1: "Australian Business",
			para1:
				"We are an Australian-based business working with local and international clients. Our Northern Territory perspective gives us a practical, resilient and commercially focused approach. We combine local market understanding with international standards to produce work that helps Australian businesses compete, communicate and grow.",
		};
	}

	return {
		...item,
		subTitle1: item.subTitle1.replace(/Ochi/gi, "GT Marketing"),
		para1: item.para1
			.replace(/Ochi Design/gi, "GT Marketing")
			.replace(/Ochi/gi, "GT Marketing")
			.replace(/Ukrainian-born/gi, "Australian-based")
			.replace(/Ukrainians/gi, "Australians")
			.replace(/Ukrainian/gi, "Australian")
			.replace(/Ukraine/gi, "Australia"),
	};
});

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState(null);

	const handleButtonClick = (id: any) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title="why GT Marketing"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[20px]">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							What you can expect
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap gap-[20px]">
						{serviceExpectations.map((item) => (
							<div
								className="w-[345px] flex justify-between gap-x-[20px] sm:flex-col xm:flex-col gap-[20px]"
								key={item.id}>
								<div className="bg-[#145B52] w-full flex flex-col rounded-[20px] px-[30px] py-[20px]">
									<div className="flex gap-x-[10px] items-center pb-[10px] mb-[100px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white">
											{item.title1}
										</h1>
									</div>
									<div className="w-full flex justify-between items-center">
										<button className="small-text font-normal font-NeueMontreal text-white">
											<TextHover
												titile1={item.subTitle1}
												titile2={item.subTitle1}
											/>
										</button>
										<button
											onClick={() => handleButtonClick(item.id)}
											className="small-text uppercase font-normal font-NeueMontreal text-white">
											{openItemId === item.id ? (
												"hide"
											) : (
												<TextHover
													titile1={item.btn}
													titile2={item.btn}
												/>
											)}
										</button>
									</div>
									<AnimatePresence>
										{openItemId === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1,
												}}>
												<div className="border-t border-[#f1f1f155] pt-[20px] text-background mt-[10px]">
													{item.para1}
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
