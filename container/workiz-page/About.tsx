type AboutProps = {
	content: {
		heading: string;
		label: string;
		description: string;
		details: Array<{ label: string; value: string }>;
		image: string;
		imageAlt: string;
	};
};

export default function About({ content }: AboutProps) {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h2 data-sb-field-path="company.heading" className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					{content.heading}
				</h2>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
						<h3 data-sb-field-path="company.label" className="w-1/2 sm:w-full xm:w-full paragraph font-medium text-secondry font-NeueMontreal">
							{content.label}
						</h3>
						<div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[30px] sm:flex-col xm:flex-col">
							<p data-sb-field-path="company.description" className="paragraph font-NeueMontreal text-secondry max-w-[520px]">
								{content.description}
							</p>
							<div className="flex flex-col gap-y-[18px]">
								{content.details.map((detail, index) => (
									<div key={`${detail.label}-${index}`}>
										<p data-sb-field-path={`company.details.${index}.label`} className="paragraph font-NeueMontreal text-secondry underline">{detail.label}:</p>
										<p data-sb-field-path={`company.details.${index}.value`} className="paragraph font-NeueMontreal text-secondry">{detail.value}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<img data-sb-field-path="company.image" src={content.image} alt={content.imageAlt} className="w-full rounded-[20px] object-cover" />
			</div>
		</section>
	);
}
