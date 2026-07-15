"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const showcaseImages = [
	{
		src: "https://images.pexels.com/photos/8763898/pexels-photo-8763898.jpeg?auto=compress&cs=tinysrgb&w=1800",
		alt: "Fashion portrait in an orange suit with a circular light installation",
		label: "Distinct positioning",
		title: "Stand apart before you scale.",
	},
	{
		src: "https://images.pexels.com/photos/6923559/pexels-photo-6923559.jpeg?auto=compress&cs=tinysrgb&w=1800",
		alt: "Creative fashion portrait in vivid orange",
		label: "Bold creative",
		title: "Make the brand impossible to ignore.",
	},
	{
		src: "https://images.pexels.com/photos/9836458/pexels-photo-9836458.jpeg?auto=compress&cs=tinysrgb&w=1800",
		alt: "Three businesswomen overlooking a calm landscape",
		label: "One direction",
		title: "Align strategy, execution and growth.",
	},
	{
		src: "https://images.pexels.com/photos/3761137/pexels-photo-3761137.jpeg?auto=compress&cs=tinysrgb&w=1800",
		alt: "Woman wearing virtual reality goggles against an orange background",
		label: "Future-focused systems",
		title: "See the opportunity before the market does.",
	},
];

export default function HomeVisionShowcase() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const heroY = useTransform(scrollYProgress, [0, 1], [90, -90]);
	const portraitY = useTransform(scrollYProgress, [0, 1], [140, -60]);
	const landscapeY = useTransform(scrollYProgress, [0, 1], [60, -120]);
	const vrY = useTransform(scrollYProgress, [0, 1], [120, -80]);

	return (
		<section
			ref={sectionRef}
			className="w-full overflow-hidden bg-[#f1f1f1] padding-x padding-y">
			<div className="w-full border-t border-[#21212155] pt-[20px]">
				<div className="grid grid-cols-12 gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4">
						<p className="paragraph font-medium font-NeueMontreal text-secondry">
							A clearer growth perspective
						</p>
					</div>
					<div className="col-span-8">
						<h2 className="sub-heading max-w-[1050px] font-medium font-NeueMontreal text-secondry">
							Marketing should create momentum, not more noise.
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-[20px] pt-[90px] lg:pt-[70px] md:pt-[55px] sm:pt-[40px] xm:pt-[40px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<motion.article
						style={{ y: heroY }}
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
						className="group relative col-span-7 h-[780px] lg:h-[650px] md:h-[540px] sm:w-full sm:h-[600px] xm:w-full xm:h-[500px] overflow-hidden rounded-[24px]">
						<motion.img
							src={showcaseImages[0].src}
							alt={showcaseImages[0].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.045 }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
						<div className="absolute inset-x-0 bottom-0 p-[30px] md:p-[24px] sm:p-[22px] xm:p-[20px] text-white">
							<p className="paragraph font-NeueMontreal opacity-80">
								{showcaseImages[0].label}
							</p>
							<h3 className="text-[56px] leading-[0.95] lg:text-[48px] md:text-[40px] sm:text-[36px] xm:text-[32px] font-semibold font-FoundersGrotesk uppercase pt-[12px] max-w-[620px]">
								{showcaseImages[0].title}
							</h3>
						</div>
					</motion.article>

					<motion.article
						style={{ y: portraitY }}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.12 }}
						transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
						className="group relative col-span-5 mt-[160px] lg:mt-[120px] md:mt-[80px] sm:mt-0 xm:mt-0 h-[620px] lg:h-[530px] md:h-[450px] sm:w-full sm:h-[580px] xm:w-full xm:h-[480px] overflow-hidden rounded-[24px]">
						<motion.img
							src={showcaseImages[1].src}
							alt={showcaseImages[1].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.045 }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
						<div className="absolute inset-x-0 bottom-0 p-[26px] text-white">
							<p className="paragraph font-NeueMontreal opacity-80">
								{showcaseImages[1].label}
							</p>
							<h3 className="text-[44px] leading-[0.98] lg:text-[38px] md:text-[34px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]">
								{showcaseImages[1].title}
							</h3>
						</div>
					</motion.article>

					<motion.article
						style={{ y: landscapeY }}
						initial={{ opacity: 0, y: 90 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.12 }}
						transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
						className="group relative col-span-8 mt-[50px] h-[570px] lg:h-[480px] md:h-[400px] sm:w-full sm:h-[420px] xm:w-full xm:h-[360px] overflow-hidden rounded-[24px]">
						<motion.img
							src={showcaseImages[2].src}
							alt={showcaseImages[2].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.04 }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
						<div className="absolute left-0 bottom-0 p-[28px] text-white max-w-[600px]">
							<p className="paragraph font-NeueMontreal opacity-80">
								{showcaseImages[2].label}
							</p>
							<h3 className="text-[48px] leading-[0.98] lg:text-[42px] md:text-[36px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]">
								{showcaseImages[2].title}
							</h3>
						</div>
					</motion.article>

					<motion.article
						style={{ y: vrY }}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.12 }}
						transition={{ duration: 1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
						className="group relative col-span-4 mt-[170px] lg:mt-[130px] md:mt-[90px] sm:mt-0 xm:mt-0 h-[620px] lg:h-[530px] md:h-[450px] sm:w-full sm:h-[560px] xm:w-full xm:h-[470px] overflow-hidden rounded-[24px]">
						<motion.img
							src={showcaseImages[3].src}
							alt={showcaseImages[3].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.045 }}
							transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
						<div className="absolute inset-x-0 bottom-0 p-[26px] text-white">
							<p className="paragraph font-NeueMontreal opacity-80">
								{showcaseImages[3].label}
							</p>
							<h3 className="text-[40px] leading-[1] lg:text-[36px] md:text-[32px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]">
								{showcaseImages[3].title}
							</h3>
						</div>
					</motion.article>
				</div>
			</div>
		</section>
	);
}
