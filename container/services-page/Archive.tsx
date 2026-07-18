import { TextMask } from "@/animation";

type ArchiveProps = {
	content: {
		heading: string;
		image: string;
		imageAlt: string;
		stats: Array<{ value: string; label: string }>;
	};
};

export default function Archive({ content }: ArchiveProps) {
	return (
		<section className="w-full">
			<div className="padding-x w-full">
				<img
					data-sb-field-path="archive.image"
					src={content.image}
					alt={content.imageAlt}
					className="w-full rounded-[20px] object-cover"
				/>
			</div>
			<div className="w-full padding-y">
				<div className="w-full padding-x pt-[20px] border-t border-[#21212155] flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
					<div className="w-[35%] sm:w-full xm:w-full">
						<h3 data-sb-field-path="archive.heading" className="paragraph font-medium font-NeueMontreal">
							{content.heading}
						</h3>
					</div>
					<div className="w-[65%] sm:w-full xm:w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px]">
						{content.stats.map((stat, index) => (
							<div key={`${stat.value}-${index}`} className="bg-[#E1E1E1] w-full flex flex-col gap-y-[150px] rounded-[20px] px-[30px] py-[20px]">
								<h1 data-sb-field-path={`archive.stats.${index}.value`} className="sub-heading font-normal font-NeueMontreal">
									<TextMask>{[stat.value]}</TextMask>
								</h1>
								<p data-sb-field-path={`archive.stats.${index}.label`} className="paragraph font-normal font-NeueMontreal">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
