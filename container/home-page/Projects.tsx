import { Heading, ProjectCard, RoundButton, Tags } from "@/components";

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

type ProjectsProps = {
	content: {
		heading: string;
		ctaLabel?: string;
		ctaUrl?: string;
		items: Project[];
	};
};

export default function Projects({ content }: ProjectsProps) {
	return (
		<section className="w-full rounded-t-[20px]">
			<div data-sb-field-path="projects.heading">
				<Heading
					title={content.heading}
					className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
				/>
			</div>
			<div className="w-full flex justify-between gap-y-[70px] padding-x padding-y flex-wrap">
				{content.items.map((item, index) => (
					<article className="w-[49%] sm:w-full xm:w-full" key={`${item.title}-${index}`}>
						<div className="flex gap-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
							<h3
								data-sb-field-path={`projects.items.${index}.title`}
								className="small-text uppercase font-medium font-NeueMontreal text-secondry">
								{item.title}
							</h3>
						</div>
						<ProjectCard item={item} index={index} fieldPath={`projects.items.${index}`} />
						<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
							{item.tags.map((tag, tagIndex) => (
								<div
									key={`${tag.label}-${tagIndex}`}
									data-sb-field-path={`projects.items.${index}.tags.${tagIndex}.label`}>
									<Tags
										className="hover:text-white"
										bgcolor="#212121"
										item={{ id: tagIndex, title: tag.label, href: tag.url || undefined }}
									/>
								</div>
							))}
						</div>
						{item.description && (
							<p
								data-sb-field-path={`projects.items.${index}.description`}
								className="paragraph font-NeueMontreal text-secondry pt-[18px] max-w-[680px]">
								{item.description}
							</p>
						)}
					</article>
				))}
			</div>
			{content.ctaLabel && content.ctaUrl && (
				<div className="w-full flex justify-center">
					<div
						data-sb-field-path="projects.ctaLabel"
						className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href={content.ctaUrl}
							title={content.ctaLabel}
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			)}
		</section>
	);
}
