"use client";

import { useRef } from "react";
import { ProjectCard, Tags } from "@/components";

type Project = {
	title: string;
	url?: string;
	image: string;
	imageAlt: string;
	seoTitle?: string;
	seoDescription?: string;
	description?: string;
	tags: Array<{ label: string; url?: string }>;
};

export default function Projects({
	intro,
	projects,
}: {
	intro: string;
	projects: Project[];
}) {
	const container = useRef(null);
	return (
		<div className="w-full" ref={container}>
			<div className="w-full flex flex-col items-center justify-center bg-about">
				<div data-scroll data-scroll-speed="-.2" className="bg-[#BFDA62] w-[75%] py-[20px] rounded-t-[10px]" />
				<div className="bg-[#B8D25E] relative z-20 w-[90%] py-[20px] rounded-t-[10px]" data-scroll data-scroll-speed="-.1" />
			</div>
			<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
				<h2 data-sb-field-path="intro" className="sub-heading font-normal padding-x font-NeueMontreal text-secondry">
					{intro}
				</h2>
				<div className="w-full flex justify-between gap-y-[70px] padding-x padding-y flex-wrap">
					{projects.map((item, index) => (
						<article className="w-[49%] sm:w-full xm:w-full" key={`${item.title}-${index}`}>
							<div className="flex gap-x-[10px] items-center pb-[10px]">
								<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
								<h3 data-sb-field-path={`projects.${index}.title`} className="small-text uppercase font-medium font-NeueMontreal text-secondry">
									{item.title}
								</h3>
							</div>
							<ProjectCard item={item} index={index} fieldPath={`projects.${index}`} />
							<div className="flex flex-wrap items-center gap-[10px] mt-[20px]">
								{item.tags.map((tag, tagIndex) => (
									<div key={`${tag.label}-${tagIndex}`} data-sb-field-path={`projects.${index}.tags.${tagIndex}.label`}>
										<Tags bgcolor="#212121" item={{ id: tagIndex, title: tag.label, href: tag.url || undefined }} className="hover:text-white" />
									</div>
								))}
							</div>
							{item.description && (
								<p data-sb-field-path={`projects.${index}.description`} className="paragraph font-NeueMontreal text-secondry pt-[18px] max-w-[680px]">
									{item.description}
								</p>
							)}
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
