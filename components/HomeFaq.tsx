type FaqItem = {
	question: string;
	answer: string;
};

export default function HomeFaq({ heading, items }: { heading: string; items: FaqItem[] }) {
	return (
		<section className="w-full bg-background text-secondry padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<h2
				data-sb-field-path="faq.heading"
				className="sub-heading padding-x font-medium font-NeueMontreal pb-[40px]">
				{heading}
			</h2>
			<div className="border-t border-[#21212155]">
				{items.map((item, index) => (
					<article
						key={item.question}
						className="grid grid-cols-12 gap-[24px] border-b border-[#21212155] padding-x py-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<h3
							data-sb-field-path={`faq.items.${index}.question`}
							className="col-span-5 paragraph font-medium font-NeueMontreal">
							{item.question}
						</h3>
						<p
							data-sb-field-path={`faq.items.${index}.answer`}
							className="col-span-7 paragraph font-NeueMontreal text-secondry">
							{item.answer}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
