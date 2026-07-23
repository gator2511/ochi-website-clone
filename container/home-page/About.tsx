"use client";

import Image from "next/image";
import { useState } from "react";
import { LinkHover } from "@/animation";
import { Heading, RoundButton } from "@/components";
import site from "@/content/data/site.json";

type AboutProps = {
	content: {
		intro: string;
		expectationLabel: string;
		paragraphs: string[];
		socialLabel: string;
		approachHeading: string;
		approachCtaLabel: string;
		approachCtaUrl: string;
		approachImage: string;
		approachImageAlt: string;
	};
};

export default function About({ content }: AboutProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2
					data-sb-field-path="about.intro"
					className="sub-heading font-medium font-NeueMontreal text-secondry max-w-[1500px]">
					{content.intro}
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3
							data-sb-field-path="about.expectationLabel"
							className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							{content.expectationLabel}
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[55%] sm:w-full xm:w-full">
								{content.paragraphs.map((paragraph, index) => (
									<p
										key={`${paragraph}-${index}`}
										data-sb-field-path={`about.paragraphs.${index}`}
										className={`sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide ${index > 0 ? "pt-[30px]" : ""}`}>
										{paragraph}
									</p>
								))}
							</div>
							<div
								data-sb-object-id="content/data/site.json"
								className="w-[45%] flex justify-end flex-col sm:w-full xm:w-full">
								<h1
									data-sb-object-id="content/pages/home.json"
									data-sb-field-path="about.socialLabel"
									className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									{content.socialLabel}:
								</h1>
								<div className="flex flex-col">
									{site.socialLinks.map((item, index) => (
										<span key={`${item.label}-${index}`} data-sb-field-path={`socialLinks.${index}.label`}>
											<LinkHover
												className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
												title={item.label}
												href={item.url}
											/>
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<div data-sb-field-path="about.approachHeading">
						<Heading title={content.approachHeading} />
					</div>
					<div
						data-sb-field-path="about.approachCtaLabel"
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/about-us"
							title={content.approachCtaLabel}
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`relative w-[50%] h-[610px] lg:h-[560px] md:h-[500px] sm:w-full sm:h-[540px] xm:w-full xm:h-[470px] transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden bg-[#e9e5df] ${hovered ? "scale-[0.96]" : ""}`}>
					<Image
						data-sb-field-path="about.approachImage"
						src={content.approachImage}
						alt={content.approachImageAlt}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className={`object-cover object-[center_32%] transition transform duration-[2s] ease-[.215,.61,.355,1] ${hovered ? "scale-[1.09]" : ""}`}
					/>
				</div>
			</div>
		</section>
	);
}
