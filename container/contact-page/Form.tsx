"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import site from "@/content/data/site.json";
import { isAcceptedNetlifyFormResponse, trackSuccessfulContactSubmit } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "success" | "error";

type FormContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  needLabel: string;
  needPlaceholder: string;
  privacyNote: string;
  privacyLabel: string;
  submitLabel: string;
  sendingLabel: string;
  successHeading: string;
  successMessage: string;
  errorFallback: string;
  servicesLabel: string;
  services: string[];
  processLabel: string;
  process: Array<{ number: string; title: string; text: string }>;
};

const FORM_ENDPOINT = "/__forms.html";

export default function Form({ content }: { content: FormContent }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Array.from(formData.entries()).map(([key, value]) => [key, String(value)])).toString(),
      });
      const body = await response.text();
      if (!isAcceptedNetlifyFormResponse(response.status, body)) throw new Error(content.errorFallback);

      form.reset();
      trackSuccessfulContactSubmit();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : content.errorFallback);
    }
  };

  const inputClass =
    "w-full rounded-[14px] border border-[#21212122] bg-white px-[16px] py-[15px] text-[17px] leading-[1.35] font-NeueMontreal text-[#212121] outline-none transition focus:border-[#fd4402] focus:ring-2 focus:ring-[#fd440222] placeholder:text-[#21212166]";
  const labelClass = "block pb-[8px] text-[14px] uppercase tracking-[0.08em] font-NeueMontreal text-[#21212199]";

  return (
    <section id="project-form" className="w-full bg-[#212121] text-white padding-x py-[110px] md:py-[90px] sm:py-[70px] xm:py-[65px] rounded-t-[28px] scroll-mt-[20px]">
      <div className="grid grid-cols-12 gap-[28px] sm:flex sm:flex-col xm:flex xm:flex-col">
        <div className="col-span-5">
          <p data-sb-field-path="form.eyebrow" className="small-text uppercase tracking-[0.12em] text-white/55">{content.eyebrow}</p>
          <h2 data-sb-field-path="form.heading" className="pt-[18px] text-[86px] leading-[0.86] lg:text-[74px] md:text-[62px] sm:text-[54px] xm:text-[46px] uppercase font-FoundersGrotesk font-semibold">
            {content.heading}
          </h2>
          <p data-sb-field-path="form.intro" className="paragraph max-w-[560px] pt-[24px] text-white/65">
            {content.intro}
          </p>

          <div className="pt-[38px] space-y-[14px]">
            <a href={`tel:${site.phoneTel}`} data-track-location="contact_form" className="group flex items-center gap-[12px] w-fit hover:text-[#fd4402] transition-colors">
              <span className="h-[42px] w-[42px] rounded-full border border-white/20 flex items-center justify-center"><Phone size={18} /></span>
              <span className="paragraph">{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} className="group flex items-center gap-[12px] w-fit hover:text-[#fd4402] transition-colors">
              <span className="h-[42px] w-[42px] rounded-full border border-white/20 flex items-center justify-center"><Mail size={18} /></span>
              <span className="paragraph">{site.email}</span>
            </a>
            <a href={site.addressUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-[12px] w-fit hover:text-[#fd4402] transition-colors">
              <span className="h-[42px] w-[42px] rounded-full border border-white/20 flex items-center justify-center"><MapPin size={18} /></span>
              <span className="paragraph">{site.addressLines[0]}</span>
            </a>
          </div>

          <div className="pt-[48px]">
            <p data-sb-field-path="form.servicesLabel" className="small-text uppercase tracking-[0.12em] text-white/45">{content.servicesLabel}</p>
            <div className="flex flex-wrap gap-[8px] pt-[16px]">
              {content.services.map((service, index) => (
                <span key={service} data-sb-field-path={`form.services.${index}`} className="rounded-full border border-white/20 px-[13px] py-[8px] text-[13px] uppercase font-NeueMontreal text-white/75">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .15 }}
          transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-7">
          <div className="rounded-[24px] bg-[#f1f1f1] p-[34px] md:p-[28px] sm:p-[22px] xm:p-[20px] text-[#212121]">
            {submitState === "success" ? (
              <div role="status" aria-live="polite" className="min-h-[520px] flex flex-col justify-between">
                <div>
                  <div className="h-[58px] w-[58px] rounded-full bg-[#fd4402] text-white flex items-center justify-center"><Check size={28} /></div>
                  <h3 className="pt-[28px] text-[64px] leading-[0.9] sm:text-[50px] xm:text-[44px] uppercase font-FoundersGrotesk font-semibold">{content.successHeading}</h3>
                  <p className="paragraph max-w-[560px] pt-[18px] text-[#212121aa]">{content.successMessage}</p>
                </div>
                <a href={`tel:${site.phoneTel}`} data-track-location="contact_success" className="mt-[30px] inline-flex w-fit items-center gap-[10px] rounded-full bg-[#212121] px-[20px] py-[13px] text-white small-text uppercase hover:bg-[#fd4402] transition-colors">
                  Call {site.phoneDisplay}<ArrowUpRight size={18} />
                </a>
              </div>
            ) : (
              <form
                name="gt-marketing-contact"
                method="POST"
                action={FORM_ENDPOINT}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="gt-marketing-contact" />
                <input type="hidden" name="subject" value="New GT Marketing enquiry" />
                <p className="absolute overflow-hidden h-px w-px -m-px p-0 border-0 [clip:rect(0_0_0_0)]">
                  <label>Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                </p>

                <div className="grid grid-cols-2 gap-[16px] sm:grid-cols-1 xm:grid-cols-1">
                  <label>
                    <span className={labelClass}>{content.nameLabel}</span>
                    <input type="text" name="name" placeholder={content.namePlaceholder} required autoComplete="name" className={inputClass} />
                  </label>
                  <label>
                    <span className={labelClass}>{content.emailLabel}</span>
                    <input type="email" name="email" placeholder={content.emailPlaceholder} required autoComplete="email" className={inputClass} />
                  </label>
                  <label>
                    <span className={labelClass}>{content.phoneLabel}</span>
                    <input type="tel" name="phone" placeholder={content.phonePlaceholder} autoComplete="tel" className={inputClass} />
                  </label>
                  <div className="rounded-[14px] border border-[#21212118] bg-[#e9e5df] px-[16px] py-[14px] flex items-center">
                    <p className="text-[14px] leading-[1.4] font-NeueMontreal text-[#21212199]">No long brief needed. A few lines is enough to start.</p>
                  </div>
                </div>

                <label className="block pt-[18px]">
                  <span className={labelClass}>{content.needLabel}</span>
                  <textarea name="need" placeholder={content.needPlaceholder} required rows={6} className={`${inputClass} resize-y min-h-[170px]`} />
                </label>

                <div className="pt-[22px] flex items-end justify-between gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
                  <p className="max-w-[430px] text-[13px] leading-[1.5] font-NeueMontreal text-[#21212188]">
                    {content.privacyNote}{" "}
                    <Link href="/privacy" className="underline underline-offset-4 hover:text-[#fd4402]">{content.privacyLabel}</Link>.
                  </p>

                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="group inline-flex min-w-[180px] items-center justify-center gap-[12px] rounded-full bg-[#fd4402] px-[22px] py-[15px] text-white small-text uppercase hover:bg-[#212121] transition-colors disabled:cursor-not-allowed disabled:opacity-60">
                    {submitState === "submitting" ? content.sendingLabel : content.submitLabel}
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </button>
                </div>

                {submitState === "error" && (
                  <div role="alert" aria-live="polite" className="mt-[20px] rounded-[14px] border border-red-500 bg-red-50 px-[16px] py-[14px] text-red-700">
                    <p className="text-[14px] font-NeueMontreal">{errorMessage || content.errorFallback}</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/15 mt-[90px] pt-[28px]">
        <p data-sb-field-path="form.processLabel" className="small-text uppercase tracking-[0.12em] text-white/45">{content.processLabel}</p>
        <div className="grid grid-cols-3 gap-[14px] pt-[18px] sm:grid-cols-1 xm:grid-cols-1">
          {content.process.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: index * .07 }}
              className="rounded-[18px] border border-white/15 p-[22px] min-h-[190px] flex flex-col justify-between">
              <span data-sb-field-path={`form.process.${index}.number`} className="small-text text-[#fd4402]">{step.number}</span>
              <div>
                <h3 data-sb-field-path={`form.process.${index}.title`} className="text-[36px] leading-[0.95] uppercase font-FoundersGrotesk font-semibold">{step.title}</h3>
                <p data-sb-field-path={`form.process.${index}.text`} className="pt-[10px] text-[14px] leading-[1.5] font-NeueMontreal text-white/60">{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
