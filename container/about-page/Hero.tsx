"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full min-h-screen padding-x pt-[140px] pb-[100px] lg:pt-[120px] md:pt-[100px] sm:pt-[90px] xm:pt-[90px]">
			<div className="w-full flex flex-col">
				<div className="w-full pb-[70px] lg:pb-[60px] md:pb-[50px] sm:pb-[40px] xm:pb-[40px]">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						ABOUT <br />
						GT MARKETING
					</h1>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 70 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
					className="w-full flex justify-end pb-[80px] lg:pb-[70px] md:pb-[60px] sm:pb-[45px] xm:pb-[45px]">
					<div className="group relative w-[62%] h-[760px] lg:w-[66%] lg:h-[680px] md:w-[72%] md:h-[590px] sm:w-full sm:h-[560px] xm:w-full xm:h-[500px] overflow-hidden rounded-[20px] bg-[#25160e]">
						<Image
							src="/gt-about-founder.svg"
							alt="GT Marketing editorial portrait"
							fill
							sizes="(max-width: 768px) 100vw, 62vw"
							priority
							className="object-cover object-center transition-transform duration-[1400ms] ease-[.215,.61,.355,1] group-hover:scale-[1.035]"
						/>
					</div>
				</motion.div>

				<div className="w-full border-t border-[#21212155] pt-[24px]">
					<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[30px]">
						<div className="w-[20%] sm:w-full xm:w-full">
							<h2 className="paragraph font-medium text-secondry font-NeueMontreal">
								About us:
							</h2>
						</div>

						<div className="w-[58%] lg:w-[62%] md:w-[68%] sm:w-full xm:w-full flex flex-col gap-y-[32px]">
							<p className="text-[32px] leading-[1.15] lg:text-[28px] md:text-[24px] sm:text-[22px] xm:text-[20px] font-NeueMontreal text-secondry">
								GT Marketing is an NT-based growth agency built for businesses
								that want results, not marketing noise. We go beyond traditional
								marketing to design and run complete growth systems such as
								strategy, digital execution, automation, and performance tracking
								— all aligned to drive revenue.
							</p>

							<p className="text-[32px] leading-[1.15] lg:text-[28px] md:text-[24px] sm:text-[22px] xm:text-[20px] font-NeueMontreal text-secondry">
								We work with businesses that are tired of fragmented tactics,
								inconsistent leads, and wasted spend. Instead of chasing vanity
								metrics, we focus on what actually moves the business forward:
								predictable lead flow, stronger brand positioning, and operational
								efficiency.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
