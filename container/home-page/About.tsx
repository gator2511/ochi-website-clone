"use client";
import Image from "next/image";
import { useState } from "react";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					GT Marketing is a strategic partner for fast-grow­ing tech
					<br className="sm:hidden xm:hidden" /> businesses that need to&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						raise funds,
					</span>
					&nbsp;sell prod­ucts, <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						ex­plain com­plex ideas,
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						hire great peo­ple.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									We create tailored presentations to help you persuade your
									colleagues, clients, or investors. Whether it’s live or
									digital, delivered for one or a hundred people.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									We believe the mix of strategy and design (with a bit of
									coffee) is what makes your message clear, convincing, and
									captivating.
								</p>
							</div>
							<div className="w-[60%] flex justify-end flex-col sm:w-full xm:w-full">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									S:
								</h1>
								<div className="flex flex-col">
									{footerItems.map((item) => (
										<LinkHover
											key={item.id}
											className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href="/"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Our approach:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/ochi-team"
							title="read more"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`relative w-[50%] h-[610px] lg:h-[560px] md:h-[500px] sm:w-full sm:h-[540px] xm:w-full xm:h-[470px] transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden bg-[#e9e5df] ${
						hovered && "scale-[0.96]"
					}`}>
					<Image
						src="/gt-home-approach.svg"
						alt="GT Marketing portrait"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className={`object-cover object-[center_32%] transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
					/>
				</div>
			</div>
		</section>
	);
}
