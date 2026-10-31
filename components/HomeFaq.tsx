type FaqItem = {
	question: string;
	answer: string;
};

export default function HomeFaq({ heading, items }: { heading: string; items: FaqItem[] }) {
	return (
		<section className="w-full bg-[#f1f1f1] text-[#212121] padding-x py-[90px] border-b border-[#21212122]">
			<h2 className="text-[72px] leading-[0.88] md:text-[58px] sm:text-[46px] xm:text-[40px] font-FoundersGrotesk font-semibold uppercase max-w-[900px]">
				{heading}
			</h2>
			<div className="mt-[36px] border-t border-[#21212133]">
				{items.map((item) => (
					<article key={item.question} className="grid grid-cols-12 gap-[20px] border-b border-[#21212133] py-[22px] sm:flex sm:flex-col xm:flex xm:flex-col">
						<h3 className="col-span-5 text-[28px] leading-[1.15] font-FoundersGrotesk font-semibold uppercase">{item.question}</h3>
						<p className="col-span-7 paragraph">{item.answer}</p>
					</article>
				))}
			</div>
		</section>
	);
}
