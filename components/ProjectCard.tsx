"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
	item: {
		title: string;
		url?: string;
		href?: string;
		image?: string;
		src?: string | any;
		imageAlt?: string;
		seoTitle?: string;
		seoDescription?: string;
		id?: number;
	};
	fieldPath?: string;
	index?: number;
};

const industryLandingPages: Record<string, string> = {
	Hospitality: "/cafe-marketing",
};

export default function ProjectCard({ item, fieldPath, index = 0 }: ProjectCardProps) {
	const [hovered, setHovered] = useState(false);
	const image = item.image ?? item.src;
	const href = item.url ?? item.href ?? industryLandingPages[item.title];
	const mediaClass =
		"rounded-[10px] overflow-hidden hover:scale-[0.95] transition transform duration-[1s] ease-[.4,0,.2,1] block";

	const media = (
		<Image
			data-sb-field-path={fieldPath ? `${fieldPath}.image` : undefined}
			src={image}
			alt={item.imageAlt ?? `${item.title} industry website concept`}
			title={item.seoTitle ?? item.title}
			width={1600}
			height={1000}
			className="w-full aspect-[8/5] object-cover rounded-[10px] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
		/>
	);

	return (
		<div>
			<div
				className="relative w-full group"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				aria-label={item.seoDescription ?? item.imageAlt ?? item.title}>
				{href ? (
					<Link href={href} className={`${mediaClass} cursor-pointer`}>
						{media}
					</Link>
				) : (
					<div className={`${mediaClass} cursor-default`}>{media}</div>
				)}
				<div
					style={{ left: (item.id ?? index + 1) % 2 === 0 ? "-15%" : "90%" }}
					className="absolute w-fit flex top-[50%] sm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] xm:hidden">
					{item.title.split("").map((character, characterIndex) => (
						<motion.span
							initial={{ y: "100%" }}
							animate={hovered ? { y: 0 } : { y: "100%" }}
							transition={{
								delay: characterIndex * 0.02,
								duration: 0.5,
								ease: [0.4, 0, 0.2, 1],
							}}
							className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-[#fd4402] font-bold text-center pointer-events-none"
							key={`${character}-${characterIndex}`}>
							{character}
						</motion.span>
					))}
				</div>
			</div>
		</div>
	);
}
