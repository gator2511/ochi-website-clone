"use client";

import { motion } from "framer-motion";

type HeroProps = {
	content: {
		heading: string;
		image: string;
		imageAlt: string;
		imageCaption: string;
		intro: string;
		approachLabel: string;
		approachItems: Array<{ title: string; description: string }>;
	};
};

export default function Hero({ content }: HeroProps) {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<h1
							data-sb-field-path="hero.heading"
							className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
							{content.heading}
						</h1>
					</div>

					<div className="w-full padding-x pb-[70px] lg:pb-[60px] md:pb-[50px] sm:pb-[35px] xm:pb-[35px]">
						<motion.figure
							initial={{ opacity: 0, y: 60, scale: 0.98 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
							className="group relative w-full h-[68vh] min-h-[520px] max-h-[820px] md:h-[58vh] md:min-h-[440px] sm:h-[420px] sm:min-h-0 xm:h-[360px] xm:min-h-0 overflow-hidden rounded-[20px]">
							<motion.img
								data-sb-field-path="hero.image"
								src={content.image}
								alt={content.imageAlt}
								loading="eager"
								decoding="async"
								whileHover={{ scale: 1.035 }}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
							<div className="absolute left-[30px] bottom-[28px] sm:left-[20px] sm:bottom-[20px] xm:left-[18px] xm:bottom-[18px] max-w-[620px]">
								<p
									data-sb-field-path="hero.imageCaption"
									className="paragraph font-NeueMontreal text-white">
									{content.imageCaption}
								</p>
							</div>
						</motion.figure>
					</div>

					<div className="w-full border-t border-[#21212155]">
						<p
							data-sb-field-path="hero.intro"
							className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							{content.intro}
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[40%] sm:w-full xm:w-full">
								<p
									data-sb-field-path="hero.approachLabel"
									className="paragraph font-NeueMontreal text-secondry">
									{content.approachLabel}
								</p>
							</div>
							<div className="w-[60%] sm:w-full xm:w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[40px]">
								{content.approachItems.map((item, index) => (
									<div className="flex flex-col gap-[20px]" key={`${item.title}-${index}`}>
										<p
											data-sb-field-path={`hero.approachItems.${index}.title`}
											className="paragraph font-NeueMontreal text-secondry underline">
											{item.title}
										</p>
										<p
											data-sb-field-path={`hero.approachItems.${index}.description`}
											className="paragraph font-NeueMontreal text-secondry">
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
