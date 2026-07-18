type ResultProps = {
	content: {
		heading: string;
		label: string;
		feedbackLabel: string;
		feedback: string;
		resultLabel: string;
		result: string;
	};
};

export default function Result({ content }: ResultProps) {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h1 data-sb-field-path="result.heading" className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					{content.heading}
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<h3 data-sb-field-path="result.label" className="w-1/2 sm:w-full xm:w-full paragraph font-medium text-secondry font-NeueMontreal">
							{content.label}
						</h3>
						<div className="w-1/2 sm:w-full xm:w-full flex sm:flex-col xm:flex-col gap-[30px]">
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p data-sb-field-path="result.feedbackLabel" className="paragraph font-NeueMontreal text-secondry underline">{content.feedbackLabel}</p>
								<p data-sb-field-path="result.feedback" className="paragraph font-NeueMontreal text-secondry">{content.feedback}</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p data-sb-field-path="result.resultLabel" className="paragraph font-NeueMontreal text-secondry underline">{content.resultLabel}</p>
								<p data-sb-field-path="result.result" className="paragraph font-NeueMontreal text-secondry">{content.result}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
