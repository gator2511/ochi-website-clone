"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, PhoneMissed, TimerReset, TrendingDown, Workflow } from "lucide-react";

type GrowthContent = {
  problems: { eyebrow: string; heading: string; intro: string; items: Array<{ title: string; text: string }> };
  system: { eyebrow: string; heading: string; intro: string; steps: Array<{ number: string; title: string; text: string }> };
  proof: { eyebrow: string; heading: string; note: string; stats: Array<{ value: string; label: string }> };
  niches: { eyebrow: string; heading: string; primary: string; primaryText: string; also: string[] };
  offer: { eyebrow: string; heading: string; intro: string; includes: string[]; priceNote: string; ctaLabel: string; ctaUrl: string };
  national: { eyebrow: string; heading: string; text: string };
};

const problemIcons = [PhoneMissed, TimerReset, TrendingDown, Workflow];

export default function LeadBookingSystem({ content }: { content: GrowthContent }) {
  return (
    <div data-sb-field-path="growthSystem">
      <section className="bg-[#212121] text-white padding-x py-[110px] md:py-[85px] sm:py-[65px] xm:py-[60px] rounded-t-[22px]">
        <div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <p className="col-span-3 small-text uppercase text-white/55" data-sb-field-path="problems.eyebrow">{content.problems.eyebrow}</p>
          <div className="col-span-9">
            <h2 className="text-[104px] leading-[0.84] lg:text-[88px] md:text-[72px] sm:text-[58px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]" data-sb-field-path="problems.heading">
              {content.problems.heading}
            </h2>
            <p className="paragraph text-white/65 max-w-[720px] pt-[28px]" data-sb-field-path="problems.intro">{content.problems.intro}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[10px] mt-[65px] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1">
          {content.problems.items.map((item, index) => {
            const Icon = problemIcons[index % problemIcons.length];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .06 }} className="border border-white/18 rounded-[16px] p-[22px] min-h-[260px] flex flex-col justify-between hover:bg-[#fd4402] transition-colors duration-500">
                <Icon size={28} strokeWidth={1.4} />
                <div>
                  <h3 className="text-[38px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path={`problems.items.${index}.title`}>{item.title}</h3>
                  <p className="text-[15px] leading-[1.45] text-white/70 pt-[14px]" data-sb-field-path={`problems.items.${index}.text`}>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f1f1f1] text-[#212121] padding-x py-[115px] md:py-[90px] sm:py-[70px] xm:py-[65px]">
        <p className="small-text uppercase text-[#21212188]" data-sb-field-path="system.eyebrow">{content.system.eyebrow}</p>
        <div className="grid grid-cols-12 gap-[28px] mt-[18px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <h2 className="col-span-8 text-[112px] leading-[0.82] lg:text-[94px] md:text-[76px] sm:text-[60px] xm:text-[50px] font-FoundersGrotesk font-semibold uppercase tracking-[-2px]" data-sb-field-path="system.heading">{content.system.heading}</h2>
          <p className="col-span-4 paragraph self-end pb-[8px]" data-sb-field-path="system.intro">{content.system.intro}</p>
        </div>
        <div className="mt-[70px] border-t border-[#21212133]">
          {content.system.steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .05 }} className="grid grid-cols-12 gap-[20px] py-[26px] border-b border-[#21212133] items-center sm:flex sm:flex-col sm:items-start xm:flex xm:flex-col xm:items-start group">
              <span className="col-span-1 small-text text-[#fd4402]">{step.number}</span>
              <h3 className="col-span-4 text-[52px] leading-[0.9] font-FoundersGrotesk font-semibold uppercase group-hover:text-[#fd4402] transition-colors" data-sb-field-path={`system.steps.${index}.title`}>{step.title}</h3>
              <p className="col-span-7 paragraph max-w-[760px]" data-sb-field-path={`system.steps.${index}.text`}>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#fd4402] text-white padding-x py-[105px] md:py-[85px] sm:py-[65px] xm:py-[60px]">
        <div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <div className="col-span-5">
            <p className="small-text uppercase text-white/75" data-sb-field-path="proof.eyebrow">{content.proof.eyebrow}</p>
            <h2 className="text-[92px] leading-[0.83] lg:text-[78px] md:text-[66px] sm:text-[56px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase pt-[20px]" data-sb-field-path="proof.heading">{content.proof.heading}</h2>
            <p className="text-[13px] leading-[1.45] text-white/70 pt-[28px] max-w-[480px]" data-sb-field-path="proof.note">{content.proof.note}</p>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-[10px] sm:grid-cols-1 xm:grid-cols-1">
            {content.proof.stats.map((stat, index) => (
              <div key={stat.label} className="border border-white/35 rounded-[16px] p-[24px] min-h-[220px] flex flex-col justify-between">
                <p className="text-[92px] leading-[0.8] lg:text-[78px] md:text-[64px] sm:text-[62px] xm:text-[54px] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path={`proof.stats.${index}.value`}>{stat.value}</p>
                <p className="paragraph max-w-[300px]" data-sb-field-path={`proof.stats.${index}.label`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] text-[#212121] padding-x py-[110px]">
        <p className="small-text uppercase text-[#21212188]" data-sb-field-path="niches.eyebrow">{content.niches.eyebrow}</p>
        <h2 className="text-[105px] leading-[0.84] lg:text-[88px] md:text-[72px] sm:text-[58px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase pt-[18px] max-w-[1200px]" data-sb-field-path="niches.heading">{content.niches.heading}</h2>
        <div className="grid grid-cols-12 gap-[16px] mt-[60px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <div className="col-span-7 bg-[#212121] text-white rounded-[18px] p-[28px] min-h-[360px] flex flex-col justify-between">
            <p className="small-text uppercase text-[#fd4402]">Primary focus</p>
            <div>
              <h3 className="text-[78px] leading-[0.82] md:text-[64px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path="niches.primary">{content.niches.primary}</h3>
              <p className="paragraph text-white/65 max-w-[640px] pt-[20px]" data-sb-field-path="niches.primaryText">{content.niches.primaryText}</p>
            </div>
          </div>
          <div className="col-span-5 border border-[#21212133] rounded-[18px] p-[28px]">
            <p className="small-text uppercase text-[#21212188]">Also work with</p>
            <div className="pt-[28px]">
              {content.niches.also.map((item, index) => <p key={item} className="text-[46px] leading-[1] md:text-[40px] sm:text-[38px] xm:text-[34px] font-FoundersGrotesk font-semibold uppercase border-t border-[#21212122] py-[15px]" data-sb-field-path={`niches.also.${index}`}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white padding-x py-[115px]">
        <div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <div className="col-span-7">
            <p className="small-text uppercase text-[#fd4402]" data-sb-field-path="offer.eyebrow">{content.offer.eyebrow}</p>
            <h2 className="text-[112px] leading-[0.82] lg:text-[94px] md:text-[76px] sm:text-[60px] xm:text-[50px] font-FoundersGrotesk font-semibold uppercase pt-[18px]" data-sb-field-path="offer.heading">{content.offer.heading}</h2>
            <p className="paragraph text-white/65 max-w-[720px] pt-[28px]" data-sb-field-path="offer.intro">{content.offer.intro}</p>
          </div>
          <div className="col-span-5 bg-white text-[#212121] rounded-[18px] p-[28px]">
            <p className="small-text uppercase text-[#21212177]">What we review</p>
            <div className="pt-[20px] space-y-[14px]">
              {content.offer.includes.map((item, index) => <div key={item} className="flex gap-[10px] items-start"><Check className="text-[#fd4402] mt-[2px]" size={18}/><p className="text-[17px] leading-[1.35]" data-sb-field-path={`offer.includes.${index}`}>{item}</p></div>)}
            </div>
            <p className="text-[13px] text-[#21212188] pt-[24px]" data-sb-field-path="offer.priceNote">{content.offer.priceNote}</p>
            <Link href={content.offer.ctaUrl} className="mt-[28px] inline-flex items-center gap-[12px] rounded-full bg-[#fd4402] text-white px-[20px] py-[13px] small-text uppercase hover:bg-[#212121] transition-colors">
              <span data-sb-field-path="offer.ctaLabel">{content.offer.ctaLabel}</span><ArrowUpRight size={18}/>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] text-[#212121] padding-x py-[100px] border-b border-[#21212122]">
        <p className="small-text uppercase text-[#21212188]" data-sb-field-path="national.eyebrow">{content.national.eyebrow}</p>
        <h2 className="text-[90px] leading-[0.84] lg:text-[78px] md:text-[66px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase pt-[18px] max-w-[1250px]" data-sb-field-path="national.heading">{content.national.heading}</h2>
        <p className="paragraph max-w-[780px] pt-[28px]" data-sb-field-path="national.text">{content.national.text}</p>
      </section>
    </div>
  );
}
