"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type VisionItem = {
	src: string;
	alt: string;
	label: string;
	title: string;
};

type HomeVisionShowcaseProps = {
	content: {
		eyebrow: string;
		title: string;
		items: VisionItem[];
	};
	fieldPath: string;
};

export default function HomeVisionShowcase({
	content,
	fieldPath,
}: HomeVisionShowcaseProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const yValues = [
		useTransform(scrollYProgress, [0, 1], [90, -90]),
		useTransform(scrollYProgress, [0, 1], [140, -60]),
		useTransform(scrollYProgress, [0, 1], [60, -120]),
		useTransform(scrollYProgress, [0, 1], [120, -80]),
	];
	const classes = [
		"group relative col-span-7 h-[780px] lg:h-[650px] md:h-[540px] sm:w-full sm:h-[600px] xm:w-full xm:h-[500px] overflow-hidden rounded-[24px]",
		"group relative col-span-5 mt-[160px] lg:mt-[120px] md:mt-[80px] sm:mt-0 xm:mt-0 h-[620px] lg:h-[530px] md:h-[450px] sm:w-full sm:h-[580px] xm:w-full xm:h-[480px] overflow-hidden rounded-[24px]",
		"group relative col-span-8 mt-[50px] h-[570px] lg:h-[480px] md:h-[400px] sm:w-full sm:h-[420px] xm:w-full xm:h-[360px] overflow-hidden rounded-[24px]",
		"group relative col-span-4 mt-[170px] lg:mt-[130px] md:mt-[90px] sm:mt-0 xm:mt-0 h-[620px] lg:h-[530px] md:h-[450px] sm:w-full sm:h-[560px] xm:w-full xm:h-[470px] overflow-hidden rounded-[24px]",
	];
	const titleClasses = [
		"text-[56px] leading-[0.95] lg:text-[48px] md:text-[40px] sm:text-[36px] xm:text-[32px] font-semibold font-FoundersGrotesk uppercase pt-[12px] max-w-[620px]",
		"text-[44px] leading-[0.98] lg:text-[38px] md:text-[34px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]",
		"text-[48px] leading-[0.98] lg:text-[42px] md:text-[36px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]",
		"text-[40px] leading-[1] lg:text-[36px] md:text-[32px] sm:text-[34px] xm:text-[30px] font-semibold font-FoundersGrotesk uppercase pt-[10px]",
	];

	return (
		<section
			ref={sectionRef}
			className="w-full overflow-hidden bg-[#f1f1f1] padding-x padding-y">
			<div className="w-full border-t border-[#21212155] pt-[20px]">
				<div className="grid grid-cols-12 gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4">
						<p
							data-sb-field-path={`${fieldPath}.eyebrow`}
							className="paragraph font-medium font-NeueMontreal text-secondry">
							{content.eyebrow}
						</p>
					</div>
					<div className="col-span-8">
						<h2
							data-sb-field-path={`${fieldPath}.title`}
							className="sub-heading max-w-[1050px] font-medium font-NeueMontreal text-secondry">
							{content.title}
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-[20px] pt-[90px] lg:pt-[70px] md:pt-[55px] sm:pt-[40px] xm:pt-[40px] sm:flex sm:flex-col xm:flex xm:flex-col">
					{content.items.slice(0, 4).map((item, index) => (
						<motion.article
							key={`${item.title}-${index}`}
							style={{ y: yValues[index] }}
							initial={{ opacity: 0, y: 80 + index * 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.12 }}
							transition={{ duration: 1, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
							className={classes[index]}>
							<motion.img
								data-sb-field-path={`${fieldPath}.items.${index}.src`}
								src={item.src}
								alt={item.alt}
								loading="lazy"
								decoding="async"
								whileHover={{ scale: 1.045 }}
								transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 p-[30px] md:p-[24px] sm:p-[22px] xm:p-[20px] text-white">
								<p
									data-sb-field-path={`${fieldPath}.items.${index}.label`}
									className="paragraph font-NeueMontreal opacity-80">
									{item.label}
								</p>
								<h3
									data-sb-field-path={`${fieldPath}.items.${index}.title`}
									className={titleClasses[index]}>
									{item.title}
								</h3>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
