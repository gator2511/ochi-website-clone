"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type VaultArticle = {
	eyebrow: string;
	category: string;
	readTime: string;
	title: string;
	summary: string;
	image: string;
	imageAlt: string;
	url: string;
};

export default function VaultArticleArchive({ articles }: { articles: VaultArticle[] }) {
	if (!articles?.length) return null;

	return (
		<section className="vault-journal bg-[#f1f1f1] padding-x py-[110px] md:py-[85px] sm:py-[65px] xm:py-[60px] border-t border-[#21212133]">
			<div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
				<p className="col-span-3 small-text font-NeueMontreal uppercase text-[#21212188]">
					Journal archive
				</p>
				<h2 className="col-span-9 text-[112px] leading-[0.82] lg:text-[94px] md:text-[74px] sm:text-[60px] xm:text-[50px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px] text-secondry">
					Previous articles,<br />kept in The Vault.
				</h2>
			</div>

			<div className="grid grid-cols-2 gap-[16px] mt-[70px] md:mt-[55px] sm:grid-cols-1 xm:grid-cols-1 sm:mt-[45px] xm:mt-[40px]">
				{articles.map((article, index) => (
					<motion.article
						key={article.url}
						initial={{ opacity: 0, y: 45 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-8%" }}
						transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
						<Link
							href={article.url}
							data-cursor="interactive"
							className="group block rounded-[18px] overflow-hidden border border-[#21212133] bg-white">
							<div className="relative aspect-[16/10] overflow-hidden bg-[#d7d7d7]">
								<img
									src={article.image}
									alt={article.imageAlt}
									loading="lazy"
									className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.055]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
								<div className="absolute top-[18px] left-[18px] right-[18px] flex items-center justify-between gap-[15px] text-white small-text font-NeueMontreal uppercase">
									<span>{article.eyebrow}</span>
									<span>{article.readTime}</span>
								</div>
								<span className="absolute right-[18px] bottom-[18px] w-[54px] h-[54px] rounded-full bg-[#fd4402] text-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
									<ArrowUpRight size={27} strokeWidth={1.4} />
								</span>
							</div>
							<div className="p-[26px] md:p-[23px] sm:p-[22px] xm:p-[20px]">
								<p className="small-text font-NeueMontreal uppercase text-[#fd4402] pb-[18px]">
									{article.category}
								</p>
								<h3 className="text-[56px] leading-[0.9] lg:text-[48px] md:text-[40px] sm:text-[42px] xm:text-[36px] font-FoundersGrotesk font-semibold uppercase text-secondry transition-colors duration-300 group-hover:text-[#fd4402]">
									{article.title}
								</h3>
								<p className="paragraph font-NeueMontreal text-secondry/75 pt-[22px] max-w-[680px]">
									{article.summary}
								</p>
							</div>
						</Link>
					</motion.article>
				))}
			</div>
		</section>
	);
}
