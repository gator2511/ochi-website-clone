"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type HeroProps = {
	content: {
		headingLine1: string;
		headingAccent: string;
		headingLine3: string;
		accentImage: string;
		accentImageAlt: string;
		badgeImage: string;
		badgeImageAlt: string;
		introLeft: string;
		introRight: string;
		ctaLabel: string;
		ctaUrl: string;
		scrollLabel: string;
	};
};

export default function Hero({ content }: HeroProps) {
	const isLegacyAccentImage = content.accentImage === "/ochi-side.jpg";
	const accentImage = isLegacyAccentImage ? "/gt-hero-pattern.svg" : content.accentImage;
	const accentImageAlt = isLegacyAccentImage
		? "GT Marketing orange brand pattern"
		: content.accentImageAlt;

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								<span data-sb-field-path="hero.headingLine1">{content.headingLine1}</span>
								<br />
								<span className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1, delay: 1.5 }}
										className="leading-[130px]">
										<Image
											data-sb-field-path="hero.accentImage"
											width={180}
											height={95}
											src={accentImage}
											alt={accentImageAlt}
											className="w-[180px] h-[95px] lg:w-[155px] lg:h-[82px] md:w-[130px] md:h-[68px] sm:w-[100px] sm:h-[52px] xm:w-[88px] xm:h-[46px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<span data-sb-field-path="hero.headingAccent">{content.headingAccent}</span>
								</span>
								<span data-sb-field-path="hero.headingLine3" className="text-[#fd4402]">
									{content.headingLine3}
								</span>
							</h1>
						</div>
						<div>
							<Image
								data-sb-field-path="hero.badgeImage"
								src={content.badgeImage}
								alt={content.badgeImageAlt}
								width={60}
								height={60}
								className="xm:hidden sm:hidden"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p data-sb-field-path="hero.introLeft" className="paragraph font-NeueMontreal text-secondry">
									{content.introLeft}
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<p data-sb-field-path="hero.introRight" className="paragraph font-NeueMontreal text-secondry">
									{content.introRight}
								</p>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
										<Link
											data-sb-field-path="hero.ctaLabel"
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href={content.ctaUrl}>
											{content.ctaLabel}
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<ArrowUpRight size={24} strokeWidth={1.25} />
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								data-sb-field-path="hero.scrollLabel"
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{ duration: 1.8, repeat: Infinity, ease: [0.3, 0.86, 0.36, 0.95] }}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								{content.scrollLabel}
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
