type CreditProps = {
	content: {
		heading: string;
		label: string;
		items: Array<{ label: string; value: string }>;
	};
};

export default function Credit({ content }: CreditProps) {
	return (
		<section className="w-full pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
			<div className="w-full flex flex-col">
				<h1 data-sb-field-path="credit.heading" className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					{content.heading}
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[15px] padding-x">
						<h3 data-sb-field-path="credit.label" className="w-1/2 sm:w-full xm:w-full paragraph font-medium text-secondry font-NeueMontreal">
							{content.label}
						</h3>
						<div className="w-1/2 sm:w-full xm:w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[25px]">
							{content.items.map((item, index) => (
								<div className="flex flex-col" key={`${item.label}-${index}`}>
									<p data-sb-field-path={`credit.items.${index}.label`} className="paragraph font-NeueMontreal text-secondry underline">{item.label}:</p>
									<p data-sb-field-path={`credit.items.${index}.value`} className="paragraph font-NeueMontreal text-secondry">{item.value}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
