import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee, ProjectCard, Rounded, Tags } from "@/components";

type RelatedProps = {
	content: {
		marquee: string;
		projects: Array<{
			title: string;
			url: string;
			image: string;
			imageAlt: string;
			tags: Array<{ label: string; url: string }>;
		}>;
		ctaLabel: string;
		ctaUrl: string;
	};
};

export default function Works({ content }: RelatedProps) {
	return (
		<section className="w-full bg-marquee rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<Marquee
					title={content.marquee}
					fieldPath="related.marquee"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full flex justify-between gap-y-[30px] padding-x py-[20px] flex-wrap">
				{content.projects.map((item, index) => (
					<div className="w-[49%] sm:w-full xm:w-full" key={`${item.title}-${index}`}>
						<div className="flex gap-x-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-white" />
							<h1 data-sb-field-path={`related.projects.${index}.title`} className="text-[18px] leading-[21px] uppercase font-medium font-NeueMontreal text-white">
								{item.title}
							</h1>
						</div>
						<ProjectCard item={item} index={index} fieldPath={`related.projects.${index}`} />
						<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
							{item.tags.map((tag, tagIndex) => (
								<div key={`${tag.label}-${tagIndex}`} data-sb-field-path={`related.projects.${index}.tags.${tagIndex}.label`}>
									<Tags className="text-white hover:text-secondry" bgcolor="#fff" item={{ id: tagIndex, title: tag.label, href: tag.url }} />
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex padding-y justify-center">
				<div data-sb-field-path="related.ctaLabel" className="flex items-center justify-between bg-white cursor-pointer rounded-full group">
					<Link className="paragraph text-secondry uppercase font-normal font-NeueMontreal" href={content.ctaUrl}>
						<Rounded className="py-[6px]" backgroundColor="#212121">
							<p className="text-secondry z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white">{content.ctaLabel}</p>
							<div className="bg-secondry p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 text-secondry group-hover:bg-white duration-300 ease-in-out">
								<ArrowUpRight strokeWidth={1.5} size={30} className="scale-[0] group-hover:scale-[1]" />
							</div>
						</Rounded>
					</Link>
				</div>
			</div>
		</section>
	);
}
