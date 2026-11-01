"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import site from "@/content/data/site.json";

type HeroProps = {
  content: {
    eyebrow: string;
    headingLine1: string;
    headingAccent: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    responseNote: string;
  };
};

export default function Hero({ content }: HeroProps) {
  return (
    <section className="w-full bg-[#f1f1f1] padding-x pt-[150px] pb-[70px] overflow-hidden">
      <div className="grid grid-cols-12 gap-[24px] items-end sm:flex sm:flex-col xm:flex xm:flex-col">
        <div className="col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
            data-sb-field-path="hero.eyebrow"
            className="small-text uppercase tracking-[0.12em] text-[#21212188]">
            {content.eyebrow}
          </motion.p>

          <h1 className="pt-[22px] text-[126px] leading-[0.82] lg:text-[106px] md:text-[84px] sm:text-[62px] xm:text-[50px] tracking-[-2px] uppercase font-FoundersGrotesk font-semibold text-[#212121]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .72, delay: .08, ease: [0.22, 1, 0.36, 1] }}
              data-sb-field-path="hero.headingLine1"
              className="block">
              {content.headingLine1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .72, delay: .16, ease: [0.22, 1, 0.36, 1] }}
              data-sb-field-path="hero.headingAccent"
              className="block text-[#fd4402]">
              {content.headingAccent}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .28 }}
            data-sb-field-path="hero.intro"
            className="max-w-[720px] pt-[34px] text-[24px] leading-[1.3] md:text-[21px] sm:text-[19px] xm:text-[18px] font-NeueMontreal text-[#212121bb]">
            {content.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .36 }}
            className="flex flex-wrap gap-[12px] pt-[32px]">
            <Link
              href="#project-form"
              className="group inline-flex items-center gap-[12px] rounded-full bg-[#212121] px-[24px] py-[15px] text-white small-text uppercase hover:bg-[#fd4402] transition-colors">
              <span data-sb-field-path="hero.primaryCta">{content.primaryCta}</span>
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-[3px]" />
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              data-track-location="contact_hero"
              className="group inline-flex items-center gap-[12px] rounded-full border border-[#212121] px-[24px] py-[15px] small-text uppercase hover:bg-white transition-colors">
              <span data-sb-field-path="hero.secondaryCta">{content.secondaryCta}</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </a>
          </motion.div>

          <p data-sb-field-path="hero.responseNote" className="pt-[18px] text-[14px] font-NeueMontreal text-[#21212188]">
            {content.responseNote}
          </p>
        </div>

        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1, delay: .18, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-5 relative h-[650px] lg:h-[580px] md:h-[500px] sm:w-full sm:h-[430px] xm:w-full xm:h-[360px] rounded-[24px] overflow-hidden bg-[#e7e3dd]">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.35, delay: .18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
              data-sb-field-path="hero.image"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-[24px] left-[24px] right-[24px] flex items-end justify-between gap-[20px]">
            <p className="max-w-[260px] text-white text-[17px] leading-[1.3] font-NeueMontreal">
              Strategy, creative and performance — connected around your next growth move.
            </p>
            <div className="h-[12px] w-[12px] rounded-full bg-[#fd4402] shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
