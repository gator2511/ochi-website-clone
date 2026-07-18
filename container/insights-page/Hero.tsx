import Link from "next/link";
import { Tags } from "@/components";

type Article = {
	title: string;
	url: string;
	image: string;
	imageAlt: string;
	author: string;
	date: string;
	tags: string[];
};

type HeroProps = {
	content: {
		heading: string;
		latestLabel: string;
		filters: Array<{ label: string; url: string }>;
		articles: Article[];
	};
};

export default function Hero({ content }: HeroProps) {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<h1 data-sb-field-path="hero.heading" className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
							{content.heading}
						</h1>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<h3 data-sb-field-path="hero.latestLabel" className="paragraph font-medium text-secondry font-NeueMontreal">
									{content.latestLabel}
								</h3>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap items-center gap-[10px]">
								{content.filters.map((filter, index) => (
									<div key={`${filter.label}-${index}`} data-sb-field-path={`hero.filters.${index}.label`}>
										{index === 0 ? (
											<Link href={filter.url} className="block rounded-[50px] border border-[#21212199] bg-black py-[2px] px-[15px] small-text font-NeueMontreal uppercase text-white">
												{filter.label}
											</Link>
										) : (
											<Tags bgcolor="#212121" item={{ id: index, title: filter.label, href: filter.url }} className="hover:text-white" />
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full padding-x">
						<div className="w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px] padding-y">
							{content.articles.map((article, index) => (
								<article key={`${article.title}-${index}`} className="group relative overflow-hidden">
									<Link href={article.url}>
										<div className="overflow-hidden rounded-[15px] transition cursor-pointer transform duration-[1s] ease-[.4,0,.2,1]">
											<img
												data-sb-field-path={`hero.articles.${index}.image`}
												src={article.image}
												alt={article.imageAlt}
												className="w-full hover:scale-[1.09] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
											/>
										</div>
										<div className="flex gap-y-[10px] absolute left-[25px] top-[-100px] group-hover:top-[20px] flex-col">
											{article.tags.map((tag, tagIndex) => (
												<div key={`${tag}-${tagIndex}`} data-sb-field-path={`hero.articles.${index}.tags.${tagIndex}`} className="rounded-[50px] border border-secondry py-[3px] px-[15px] small-text font-NeueMontreal text-secondry uppercase">
													{tag}
												</div>
											))}
										</div>
										<div className="flex flex-col gap-[7px] mt-[10px]">
											<h3 data-sb-field-path={`hero.articles.${index}.title`} className="paragraph font-NeueMontreal font-normal text-secondry">
												{article.title}
											</h3>
											<p data-sb-field-path={`hero.articles.${index}.author`} className="paragraph font-NeueMontreal text-gray-400">{article.author}</p>
											<p data-sb-field-path={`hero.articles.${index}.date`} className="paragraph font-NeueMontreal text-gray-400">{article.date}</p>
										</div>
									</Link>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
