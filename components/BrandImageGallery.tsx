"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type BrandImageGalleryProps = {
	content: {
		eyebrow: string;
		title: string;
		images: Array<{ src: string; alt: string }>;
	};
	fieldPath: string;
};

export default function BrandImageGallery({
	content,
	fieldPath,
}: BrandImageGalleryProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const firstY = useTransform(scrollYProgress, [0, 1], [70, -70]);
	const secondY = useTransform(scrollYProgress, [0, 1], [120, -40]);
	const thirdY = useTransform(scrollYProgress, [0, 1], [40, -100]);
	const images = content.images.slice(0, 3);
	const positions = [
		{
			style: { y: firstY },
			className:
				"col-span-7 overflow-hidden rounded-[20px] h-[680px] lg:h-[560px] md:h-[460px] sm:w-full sm:h-[520px] xm:w-full xm:h-[430px]",
			initialY: 70,
			delay: 0,
		},
		{
			style: { y: secondY },
			className:
				"col-span-5 mt-[150px] lg:mt-[110px] md:mt-[80px] sm:mt-0 xm:mt-0 overflow-hidden rounded-[20px] h-[560px] lg:h-[470px] md:h-[390px] sm:w-full sm:h-[500px] xm:w-full xm:h-[420px]",
			initialY: 90,
			delay: 0.08,
		},
		{
			style: { y: thirdY },
			className:
				"col-start-5 col-span-8 mt-[40px] overflow-hidden rounded-[20px] h-[620px] lg:h-[520px] md:h-[430px] sm:w-full sm:h-[500px] xm:w-full xm:h-[420px]",
			initialY: 80,
			delay: 0.12,
		},
	];

	return (
		<section
			ref={sectionRef}
			className="w-full overflow-hidden bg-[#f1f1f1] padding-x padding-y">
			<div className="w-full border-t border-[#21212155] pt-[20px]">
				<div className="grid grid-cols-12 gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4 sm:w-full xm:w-full">
						<p
							data-sb-field-path={`${fieldPath}.eyebrow`}
							className="paragraph font-medium font-NeueMontreal text-secondry">
							{content.eyebrow}
						</p>
					</div>
					<div className="col-span-8 sm:w-full xm:w-full">
						<h2
							data-sb-field-path={`${fieldPath}.title`}
							className="sub-heading font-medium font-NeueMontreal text-secondry max-w-[900px]">
							{content.title}
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-[20px] pt-[90px] lg:pt-[70px] md:pt-[60px] sm:pt-[45px] xm:pt-[45px] sm:flex sm:flex-col xm:flex xm:flex-col">
					{images.map((image, index) => {
						const position = positions[index];
						return (
							<motion.figure
								key={`${image.src}-${index}`}
								style={position.style}
								initial={{ opacity: 0, y: position.initialY }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.15 }}
								transition={{
									duration: 0.9 + index * 0.05,
									delay: position.delay,
									ease: [0.22, 1, 0.36, 1],
								}}
								className={position.className}>
								<motion.img
									data-sb-field-path={`${fieldPath}.images.${index}.src`}
									src={image.src}
									alt={image.alt}
									loading="lazy"
									decoding="async"
									whileHover={{ scale: 1.035 }}
									transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
									className="w-full h-full object-cover"
								/>
							</motion.figure>
						);
					})}
				</div>
			</div>
		</section>
	);
}
