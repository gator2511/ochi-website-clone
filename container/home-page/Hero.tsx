"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type HeroProps = {
  content: {
    eyebrow?: string;
    headingLine1: string;
    headingAccent: string;
    headingLine3: string;
    accentImage: string;
    accentImageAlt: string;
    introLeft: string;
    introRight: string;
    ctaLabel: string;
    ctaUrl: string;
    secondaryLabel?: string;
    secondaryUrl?: string;
    scrollLabel: string;
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="w-full min-h-screen bg-[#f1f1f1]" data-scroll data-scroll-speed="-.3">
      <div className="min-h-screen flex flex-col justify-end pt-[130px]">
        <div className="padding-x pb-[34px]">
          <p data-sb-field-path="hero.eyebrow" className="small-text uppercase text-[#21212188] mb-[26px]">
            {content.eyebrow || "GT Marketing · Darwin, NT"}
          </p>

          <h1 className="text-[#212121] font-FoundersGrotesk font-semibold uppercase tracking-[-2px] text-[112px] leading-[0.82] lg:text-[94px] md:text-[74px] sm:text-[56px] xm:text-[47px] max-w-[1450px]">
            <span data-sb-field-path="hero.headingLine1" className="block">{content.headingLine1}</span>
            <span data-sb-field-path="hero.headingAccent" className="block text-[#fd4402]">{content.headingAccent}</span>
            <span data-sb-field-path="hero.headingLine3" className="block">{content.headingLine3}</span>
          </h1>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ ease: [0.86, 0, 0.07, 0.995], duration: 1.15, delay: .45 }}
            className="w-full overflow-hidden rounded-[18px] mt-[42px]">
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: .35 }}>
              <Image
                data-sb-field-path="hero.accentImage"
                width={1800}
                height={950}
                src={content.accentImage}
                alt={content.accentImageAlt}
                className="w-full h-[560px] lg:h-[500px] md:h-[420px] sm:h-[340px] xm:h-[300px] object-cover object-center"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-[#21212144] padding-x py-[24px] grid grid-cols-12 gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <p data-sb-field-path="hero.introLeft" className="col-span-4 paragraph">{content.introLeft}</p>
          <p data-sb-field-path="hero.introRight" className="col-span-5 paragraph text-[#212121aa]">{content.introRight}</p>
          <div className="col-span-3 flex flex-col items-end gap-[12px] sm:items-start xm:items-start">
            <Link href={content.ctaUrl} className="inline-flex items-center gap-[12px] rounded-full bg-[#212121] text-white px-[20px] py-[13px] small-text uppercase hover:bg-[#fd4402] transition-colors">
              <span data-sb-field-path="hero.ctaLabel">{content.ctaLabel}</span>
              <ArrowUpRight size={18} />
            </Link>
            {content.secondaryLabel && content.secondaryUrl ? (
              <Link href={content.secondaryUrl} data-sb-field-path="hero.secondaryLabel" className="paragraph underline underline-offset-4 hover:text-[#fd4402] text-right sm:text-left xm:text-left">
                {content.secondaryLabel}
              </Link>
            ) : null}
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
