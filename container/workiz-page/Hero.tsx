import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rounded } from "@/components";

type HeroProps = {
	content: {
		heading: string;
		accentImage: string;
		accentImageAlt: string;
		descriptionLabel: string;
		description: string;
		tags: Array<{ label: string; url: string }>;
		mainImage: string;
		mainImageAlt: string;
	};
};

export default function Hero({ content }: HeroProps) {
	return (
		<section className="w-full rounded-b-[20px]">
			<div className="w-full pb-[200px]">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
							<span className="flex items-center gap-[5px]">
								<motion.span initial={{ width: 0 }} animate={{ width: "auto" }} transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1, delay: 1.5 }} className="leading-[130px]">
									<Image data-sb-field-path="hero.accentImage" width={120} height={95} src={content.accentImage} alt={content.accentImageAlt} className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]" />
								</motion.span>
								<span data-sb-field-path="hero.heading">{content.heading}</span>
							</span>
						</h1>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between sm:gap-[25px] xm:gap-[25px] padding-x sm:flex-col xm:flex-col">
							<h3 data-sb-field-path="hero.descriptionLabel" className="w-[50%] sm:w-full xm:w-full paragraph font-medium text-secondry font-NeueMontreal">
								{content.descriptionLabel}
							</h3>
							<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[20px]">
								<p data-sb-field-path="hero.description" className="w-[50%] sm:w-full xm:w-full paragraph font-NeueMontreal text-secondry">
									{content.description}
								</p>
								<div className="flex flex-col gap-[10px]">
									{content.tags.map((tag, index) => (
										<div key={`${tag.label}-${index}`} data-sb-field-path={`hero.tags.${index}.label`} className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
											<Link className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white" href={tag.url}>
												<Rounded className="py-[3px]" backgroundColor="#000"><p className="z-10 px-[15px]">{tag.label}</p></Rounded>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px] padding-x">
				<img data-sb-field-path="hero.mainImage" src={content.mainImage} alt={content.mainImageAlt} className="w-full rounded-[20px] object-cover" />
			</div>
		</section>
	);
}
