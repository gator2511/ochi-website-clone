import Image from "next/image";
import { motion } from "framer-motion";
import TopicLine from "@/components/TopicLine";
import site from "@/content/data/site.json";

type HeroProps = {
	content: {
		headingLine1: string;
		headingLine2: string;
		image: string;
		imageAlt: string;
		formIntro: string;
	};
};

export default function Hero({ content }: HeroProps) {
	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<div className="w-full margin">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						<TopicLine>Contact GT Marketing in Darwin</TopicLine>
						<span className="flex items-center gap-[5px]">
							<motion.span
								initial={{ width: 0 }}
								animate={{ width: "auto" }}
								transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1, delay: 1.5 }}>
								<Image
									data-sb-field-path="hero.image"
									width={120}
									height={95}
									src={content.image}
									alt={content.imageAlt}
									className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
								/>
							</motion.span>
							<span data-sb-field-path="hero.headingLine1">{content.headingLine1}</span>
						</span>
						<span data-sb-field-path="hero.headingLine2">{content.headingLine2}</span>
					</h1>
				</div>
				<div className="w-full pb-[15px] flex flex-wrap items-center gap-x-[28px] gap-y-[10px]">
					<h2 data-sb-field-path="hero.formIntro" className="paragraph font-medium text-secondry font-NeueMontreal">
						{content.formIntro}
					</h2>
					<a href={`tel:${site.phoneTel}`} data-track-location="contact_hero" className="paragraph font-medium font-NeueMontreal text-secondry underline underline-offset-4 hover:text-[#fd4402]">
						{site.phoneDisplay}
					</a>
				</div>
			</div>
		</section>
	);
}
