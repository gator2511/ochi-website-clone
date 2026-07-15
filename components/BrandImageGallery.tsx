"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type GalleryVariant =
	| "home"
	| "services"
	| "work"
	| "about"
	| "insights"
	| "contact";

type BrandImageGalleryProps = {
	variant: GalleryVariant;
};

type ImageItem = {
	src: string;
	alt: string;
};

const images: ImageItem[] = [
	{
		src: "https://images.pexels.com/photos/13788166/pexels-photo-13788166.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Orange architectural interior with geometric light",
	},
	{
		src: "https://images.pexels.com/photos/12915530/pexels-photo-12915530.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Modern yellow building under dramatic clouds",
	},
	{
		src: "https://images.pexels.com/photos/36835822/pexels-photo-36835822.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Orange interior with blue geometric skylight",
	},
	{
		src: "https://images.pexels.com/photos/17719825/pexels-photo-17719825.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Abstract orange architectural curve",
	},
	{
		src: "https://images.pexels.com/photos/7577937/pexels-photo-7577937.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Orange ink cloud against a white background",
	},
	{
		src: "https://images.pexels.com/photos/28963148/pexels-photo-28963148.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Orange contemporary building facade",
	},
	{
		src: "https://images.pexels.com/photos/11588266/pexels-photo-11588266.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Fashion portrait in a vivid orange suit",
	},
	{
		src: "https://images.pexels.com/photos/3923546/pexels-photo-3923546.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Creative portrait holding oranges over the eyes",
	},
	{
		src: "https://images.pexels.com/photos/7350058/pexels-photo-7350058.jpeg?auto=compress&cs=tinysrgb&w=1600",
		alt: "Abstract red and orange architectural lines",
	},
];

const galleryConfig: Record<
	GalleryVariant,
	{
		eyebrow: string;
		title: string;
		indexes: [number, number, number];
	}
> = {
	home: {
		eyebrow: "Designed to move",
		title: "Bold ideas. Structured growth.",
		indexes: [0, 5, 4],
	},
	services: {
		eyebrow: "Built as a system",
		title: "Strategy and execution working together.",
		indexes: [2, 5, 8],
	},
	work: {
		eyebrow: "Distinct by design",
		title: "Creative work that earns attention.",
		indexes: [6, 7, 1],
	},
	about: {
		eyebrow: "Clear direction",
		title: "Growth without the marketing noise.",
		indexes: [0, 3, 4],
	},
	insights: {
		eyebrow: "See the pattern",
		title: "Ideas shaped by commercial reality.",
		indexes: [1, 2, 8],
	},
	contact: {
		eyebrow: "Start a conversation",
		title: "Bring the ambition. We will build the system.",
		indexes: [7, 0, 6],
	},
};

export default function BrandImageGallery({
	variant,
}: BrandImageGalleryProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});
	const firstY = useTransform(scrollYProgress, [0, 1], [70, -70]);
	const secondY = useTransform(scrollYProgress, [0, 1], [120, -40]);
	const thirdY = useTransform(scrollYProgress, [0, 1], [40, -100]);
	const config = galleryConfig[variant];
	const selectedImages = config.indexes.map((index) => images[index]);

	return (
		<section
			ref={sectionRef}
			className="w-full overflow-hidden bg-[#f1f1f1] padding-x padding-y">
			<div className="w-full border-t border-[#21212155] pt-[20px]">
				<div className="grid grid-cols-12 gap-[20px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4 sm:w-full xm:w-full">
						<p className="paragraph font-medium font-NeueMontreal text-secondry">
							{config.eyebrow}
						</p>
					</div>
					<div className="col-span-8 sm:w-full xm:w-full">
						<h2 className="sub-heading font-medium font-NeueMontreal text-secondry max-w-[900px]">
							{config.title}
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-[20px] pt-[90px] lg:pt-[70px] md:pt-[60px] sm:pt-[45px] xm:pt-[45px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<motion.figure
						style={{ y: firstY }}
						initial={{ opacity: 0, y: 70 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
						className="col-span-7 overflow-hidden rounded-[20px] h-[680px] lg:h-[560px] md:h-[460px] sm:w-full sm:h-[520px] xm:w-full xm:h-[430px]">
						<motion.img
							src={selectedImages[0].src}
							alt={selectedImages[0].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.035 }}
							transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
							className="w-full h-full object-cover"
						/>
					</motion.figure>

					<motion.figure
						style={{ y: secondY }}
						initial={{ opacity: 0, y: 90 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
						className="col-span-5 mt-[150px] lg:mt-[110px] md:mt-[80px] sm:mt-0 xm:mt-0 overflow-hidden rounded-[20px] h-[560px] lg:h-[470px] md:h-[390px] sm:w-full sm:h-[500px] xm:w-full xm:h-[420px]">
						<motion.img
							src={selectedImages[1].src}
							alt={selectedImages[1].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.035 }}
							transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
							className="w-full h-full object-cover"
						/>
					</motion.figure>

					<motion.figure
						style={{ y: thirdY }}
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.12 }}
						transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
						className="col-start-5 col-span-8 mt-[40px] overflow-hidden rounded-[20px] h-[620px] lg:h-[520px] md:h-[430px] sm:w-full sm:h-[500px] xm:w-full xm:h-[420px]">
						<motion.img
							src={selectedImages[2].src}
							alt={selectedImages[2].alt}
							loading="lazy"
							decoding="async"
							whileHover={{ scale: 1.035 }}
							transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
							className="w-full h-full object-cover"
						/>
					</motion.figure>
				</div>
			</div>
		</section>
	);
}
