"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type Content = {
  hero:{eyebrow:string;headingLine1:string;headingLine2:string;intro:string;ctaLabel:string;ctaUrl:string};
  audiences:{eyebrow:string;heading:string;items:Array<{title:string;description:string}>};
  support:{eyebrow:string;heading:string;intro:string;items:Array<{number:string;title:string;description:string}>};
  principles:{eyebrow:string;heading:string;paragraphs:string[];signals:string[]};
  remote:{eyebrow:string;heading:string;text:string;ctaLabel:string;ctaUrl:string};
  trust:{eyebrow:string;heading:string;text:string};
  closing:{eyebrow:string;heading:string;text:string;ctaLabel:string;ctaUrl:string};
};

export default function AboriginalOrganisationsLanding({content,documentId}:{content:Content;documentId:string}) {
  return (
    <main data-sb-object-id={documentId} className="overflow-hidden bg-[#f1f1f1] text-[#212121]">
      <section className="min-h-[92vh] padding-x pt-[165px] pb-[70px] flex flex-col justify-between sm:pt-[135px] xm:pt-[125px]">
        <div>
          <p data-sb-field-path="hero.eyebrow" className="small-text uppercase tracking-[0.12em] text-[#21212199]">{content.hero.eyebrow}</p>
          <h1 className="pt-[25px] uppercase font-FoundersGrotesk font-semibold text-[150px] leading-[0.78] lg:text-[124px] md:text-[98px] sm:text-[72px] xm:text-[58px] tracking-[-2px]">
            <span data-sb-field-path="hero.headingLine1" className="block">{content.hero.headingLine1}</span>
            <span data-sb-field-path="hero.headingLine2" className="block text-[#fd4402]">{content.hero.headingLine2}</span>
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-[30px] items-end pt-[65px] sm:flex sm:flex-col sm:items-start xm:flex xm:flex-col xm:items-start">
          <p data-sb-field-path="hero.intro" className="col-start-5 col-span-6 sub-heading max-w-[900px]">{content.hero.intro}</p>
          <Link href={content.hero.ctaUrl} className="col-span-2 justify-self-end inline-flex items-center gap-[12px] rounded-full bg-[#212121] text-white px-[22px] py-[14px] small-text uppercase hover:bg-[#fd4402] transition-colors">
            <span data-sb-field-path="hero.ctaLabel">{content.hero.ctaLabel}</span><ArrowUpRight size={18}/>
          </Link>
        </div>
      </section>

      <section className="bg-[#212121] text-white rounded-t-[22px] padding-x py-[105px]">
        <p className="small-text uppercase text-white/55" data-sb-field-path="audiences.eyebrow">{content.audiences.eyebrow}</p>
        <h2 className="text-[100px] leading-[0.84] lg:text-[84px] md:text-[70px] sm:text-[56px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase max-w-[1200px] pt-[18px]" data-sb-field-path="audiences.heading">{content.audiences.heading}</h2>
        <div className="grid grid-cols-3 gap-[10px] mt-[60px] md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1">
          {content.audiences.items.map((item,index)=>(
            <motion.article key={item.title} initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:index*.05}} className="border border-white/18 rounded-[16px] p-[24px] min-h-[290px] flex flex-col justify-end hover:bg-[#fd4402] transition-colors duration-500">
              <h3 className="text-[42px] leading-[.92] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path={`audiences.items.${index}.title`}>{item.title}</h3>
              <p className="text-[15px] leading-[1.5] text-white/70 pt-[18px]" data-sb-field-path={`audiences.items.${index}.description`}>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="padding-x py-[110px]">
        <div className="grid grid-cols-12 gap-[30px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <div className="col-span-7">
            <p className="small-text uppercase text-[#21212188]" data-sb-field-path="support.eyebrow">{content.support.eyebrow}</p>
            <h2 className="text-[105px] leading-[.82] lg:text-[88px] md:text-[72px] sm:text-[58px] xm:text-[48px] font-FoundersGrotesk font-semibold uppercase pt-[18px]" data-sb-field-path="support.heading">{content.support.heading}</h2>
          </div>
          <p className="col-span-5 paragraph self-end" data-sb-field-path="support.intro">{content.support.intro}</p>
        </div>
        <div className="mt-[70px] border-t border-[#21212133]">
          {content.support.items.map((item,index)=>(
            <div key={item.number} className="grid grid-cols-12 gap-[20px] py-[28px] border-b border-[#21212133] sm:flex sm:flex-col xm:flex xm:flex-col">
              <span className="col-span-1 small-text text-[#fd4402]">{item.number}</span>
              <h3 className="col-span-4 text-[48px] leading-[.92] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path={`support.items.${index}.title`}>{item.title}</h3>
              <p className="col-span-7 paragraph max-w-[780px] text-[#212121bb]" data-sb-field-path={`support.items.${index}.description`}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fd4402] text-white padding-x py-[105px]">
        <div className="grid grid-cols-12 gap-[32px] sm:flex sm:flex-col xm:flex xm:flex-col">
          <div className="col-span-6">
            <p className="small-text uppercase text-white/70" data-sb-field-path="principles.eyebrow">{content.principles.eyebrow}</p>
            <h2 className="text-[92px] leading-[.84] lg:text-[78px] md:text-[66px] sm:text-[54px] xm:text-[46px] font-FoundersGrotesk font-semibold uppercase pt-[18px]" data-sb-field-path="principles.heading">{content.principles.heading}</h2>
          </div>
          <div className="col-span-6 space-y-[20px]">
            {content.principles.paragraphs.map((p,index)=><p key={p} className="paragraph text-white/82" data-sb-field-path={`principles.paragraphs.${index}`}>{p}</p>)}
            <div className="grid grid-cols-2 gap-[10px] pt-[18px] sm:grid-cols-1 xm:grid-cols-1">
              {content.principles.signals.map((signal,index)=><div key={signal} className="flex items-center gap-[9px] border border-white/35 rounded-full px-[14px] py-[10px]"><CheckCircle2 size={16}/><span className="small-text uppercase" data-sb-field-path={`principles.signals.${index}`}>{signal}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="padding-x py-[105px]">
        <div className="grid grid-cols-2 gap-[14px] sm:grid-cols-1 xm:grid-cols-1">
          <div className="rounded-[18px] bg-[#212121] text-white p-[32px] min-h-[440px] flex flex-col justify-between">
            <p className="small-text uppercase text-[#fd4402]" data-sb-field-path="remote.eyebrow">{content.remote.eyebrow}</p>
            <div>
              <h2 className="text-[66px] leading-[.86] md:text-[56px] sm:text-[50px] xm:text-[44px] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path="remote.heading">{content.remote.heading}</h2>
              <p className="paragraph text-white/70 pt-[22px]" data-sb-field-path="remote.text">{content.remote.text}</p>
              <Link href={content.remote.ctaUrl} className="mt-[26px] inline-flex items-center gap-[10px] rounded-full border border-white/50 px-[18px] py-[11px] small-text uppercase hover:bg-[#fd4402] hover:border-[#fd4402] transition-colors"><span data-sb-field-path="remote.ctaLabel">{content.remote.ctaLabel}</span><ArrowUpRight size={17}/></Link>
            </div>
          </div>
          <div className="rounded-[18px] border border-[#21212133] p-[32px] min-h-[440px] flex flex-col justify-between">
            <p className="small-text uppercase text-[#21212177]" data-sb-field-path="trust.eyebrow">{content.trust.eyebrow}</p>
            <div>
              <h2 className="text-[66px] leading-[.86] md:text-[56px] sm:text-[50px] xm:text-[44px] font-FoundersGrotesk font-semibold uppercase" data-sb-field-path="trust.heading">{content.trust.heading}</h2>
              <p className="paragraph text-[#212121bb] pt-[22px]" data-sb-field-path="trust.text">{content.trust.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-x pb-[90px]">
        <div className="rounded-[20px] bg-[#fd4402] text-white p-[50px] min-h-[430px] flex flex-col justify-between sm:p-[28px] xm:p-[24px]">
          <p className="small-text uppercase text-white/70" data-sb-field-path="closing.eyebrow">{content.closing.eyebrow}</p>
          <div>
            <h2 className="text-[88px] leading-[.84] lg:text-[74px] md:text-[62px] sm:text-[52px] xm:text-[44px] font-FoundersGrotesk font-semibold uppercase max-w-[1100px]" data-sb-field-path="closing.heading">{content.closing.heading}</h2>
            <p className="paragraph text-white/80 max-w-[760px] pt-[22px]" data-sb-field-path="closing.text">{content.closing.text}</p>
            <Link href={content.closing.ctaUrl} className="mt-[28px] inline-flex items-center gap-[12px] rounded-full bg-white text-[#212121] px-[20px] py-[13px] small-text uppercase hover:bg-[#212121] hover:text-white transition-colors"><span data-sb-field-path="closing.ctaLabel">{content.closing.ctaLabel}</span><ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
