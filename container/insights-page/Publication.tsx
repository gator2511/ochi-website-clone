import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee, Rounded } from "@/components";

type PublicationProps = {
	content: {
		marquee: string;
		heading: string;
		description: string;
		profileLabel: string;
		profileHandle: string;
		profileUrl: string;
	};
};

export default function Publication({ content }: PublicationProps) {
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title={content.marquee}
					fieldPath="publication.marquee"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x py-[30px]">
				<div className="w-full border-t border-white/35 pt-[24px] grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
					<div className="col-span-4">
						<h3
							data-sb-field-path="publication.heading"
							className="paragraph font-medium text-white font-NeueMontreal">
							{content.heading}
						</h3>
					</div>
					<div className="col-span-8 flex flex-col gap-[30px] max-w-[880px]">
						<p
							data-sb-field-path="publication.description"
							className="sub-heading font-NeueMontreal text-white">
							{content.description}
						</p>
						<p
							data-sb-field-path="publication.profileHandle"
							className="paragraph font-NeueMontreal text-white/75">
							{content.profileHandle}
						</p>
						<div className="w-fit">
							<Link
								href={content.profileUrl}
								target="_blank"
								rel="noopener noreferrer"
								data-sb-field-path="publication.profileLabel"
								className="flex items-center justify-between bg-white cursor-pointer rounded-full group">
								<Rounded className="py-[6px]" backgroundColor="#212121">
									<p className="small-text uppercase font-normal font-NeueMontreal z-10 px-[10px] ml-[15px] py-[6px] text-secondry group-hover:text-white">
										{content.profileLabel}
									</p>
									<div className="bg-secondry p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 text-white group-hover:bg-white group-hover:text-secondry duration-300 ease-in-out">
										<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1]" />
									</div>
								</Rounded>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
