"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type HeroProps = {
  content: {
    headingLine1: string;
    headingAccent: string;
    headingLine3: string;
    accentImage: string;
    accentImageAlt: string;
    introLeft: string;
    introRight: string;
    ctaLabel: string;
    ctaUrl: string;
    scrollLabel: string;
  };
};

export default function Hero({ content }: HeroProps) {
  const accentImage = content.accentImage === "/ochi-side.jpg" ? "/gt-hero-pattern.svg" : content.accentImage;
  const accentImageAlt = content.accentImage === "/ochi-side.jpg" ? "GT Marketing orange brand pattern" : content.accentImageAlt;

  return (
    <section className="w-full min-h-screen bg-[#f1f1f1]" data-scroll data-scroll-speed="-.3">
      <div className="min-h-screen flex flex-col justify-end pt-[130px]">
        <div className="padding-x pb-[48px]">
          <p className="small-text uppercase text-[#21212188] mb-[28px]">GT Marketing · Darwin, NT</p>
          <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1, delay: .8 }} className="mb-[22px] inline-block overflow-hidden">
            <Image data-sb-field-path="hero.accentImage" width={180} height={92} src={accentImage} alt={accentImageAlt} className="w-[180px] h-[92px] lg:w-[150px] lg:h-[76px] md:w-[120px] md:h-[60px] sm:w-[88px] sm:h-[46px] xm:w-[74px] xm:h-[40px] object-cover rounded-[10px]" />
          </motion.span>
          <h1 className="max-w-[1100px] text-[#212121]">
            <span className="block pb-[14px] font-NeueMontreal font-medium normal-case tracking-normal text-[28px] leading-[1.3] md:text-[22px] sm:text-[18px] xm:text-[18px]">
              Darwin marketing agency
            </span>
            <span className="block font-FoundersGrotesk font-semibold uppercase tracking-[-2px] text-[72px] leading-[0.9] lg:text-[60px] md:text-[48px] sm:text-[36px] xm:text-[32px]">
              for local SEO, websites and lead generation for Darwin small businesses
            </span>
          </h1>
        </div>

        <div className="border-t border-[#21212144] padding-x py-[24px] grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <p data-sb-field-path="hero.introLeft" className="col-span-4 paragraph">{content.introLeft}</p>
          <p data-sb-field-path="hero.introRight" className="col-span-5 paragraph text-[#212121aa]">{content.introRight}</p>
          <div className="col-span-3 flex flex-col items-end gap-[12px] sm:items-start xm:items-start">
            <Link href={content.ctaUrl} className="inline-flex items-center gap-[12px] rounded-full bg-[#212121] text-white px-[20px] py-[13px] small-text uppercase hover:bg-[#fd4402] transition-colors">
              <span data-sb-field-path="hero.ctaLabel">{content.ctaLabel}</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/marketing-packages-darwin" className="paragraph underline underline-offset-4 hover:text-[#fd4402] text-right sm:text-left xm:text-left">
              All Your Marketing. One Simple Monthly Fee.
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center py-[14px] sm:hidden xm:hidden">
          <motion.p data-sb-field-path="hero.scrollLabel" initial={{ y: "-35%", opacity: 0 }} animate={{ y: "35%", opacity: .5 }} transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }} className="small-text uppercase text-[#21212188]">
            {content.scrollLabel}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
