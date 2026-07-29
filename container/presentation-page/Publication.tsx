"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components";

type WebsiteItem = {
	title: string;
	url: string;
	eyebrow: string;
	location: string;
	description: string;
	ctaLabel: string;
	services: string[];
};

type PublicationProps = {
	content: {
		marquee: string;
		heading: string;
		items: WebsiteItem[];
	};
};

function SaltwaterPreview() {
	return (
		<div className="sp-browser" aria-label="Animated preview of the Saltwater Pathways website">
			<div className="sp-browser-bar">
				<div className="sp-browser-dots" aria-hidden="true">
					<span />
					<span />
					<span />
				</div>
				<div className="sp-browser-address">saltwaterpathways.com.au</div>
				<div className="sp-live-label">AUTO SCROLL</div>
			</div>
			<div className="sp-viewport">
				<div className="sp-site-canvas">
					<section className="sp-nav">
						<div className="sp-logo-mark">Saltwater<br />Pathways</div>
						<div className="sp-nav-links">
							<span>Services</span><span>Early Childhood</span><span>About</span><span>FAQs</span>
						</div>
						<div className="sp-nav-button">Get started</div>
					</section>

					<section className="sp-hero">
						<div className="sp-hero-image" />
						<div className="sp-hero-copy">
							<p>EARLY CHILDHOOD INTERVENTION SPECIALIST</p>
							<h3>Support for children and families in the NT.</h3>
							<div className="sp-hero-cta">Explore services</div>
						</div>
					</section>

					<section className="sp-intro">
						<p>PERSON-CENTRED SUPPORT</p>
						<h4>Practical guidance that helps children participate, learn and grow with confidence.</h4>
					</section>

					<section className="sp-services">
						<div className="sp-service-card sp-card-one">
							<span>01</span><h5>Family Capacity &amp; Support</h5><p>Strategies for routines, play, communication, transitions and behaviour.</p>
						</div>
						<div className="sp-service-card sp-card-two">
							<span>02</span><h5>Child Development &amp; Early Learning</h5><p>Support for emotional regulation, independence and participation.</p>
						</div>
						<div className="sp-service-card sp-card-three">
							<span>03</span><h5>Educational Learning Support</h5><p>Early literacy, numeracy and school-readiness foundations.</p>
						</div>
					</section>

					<section className="sp-quote">
						<div className="sp-quote-orbit" aria-hidden="true" />
						<p>“Her patience, expertise and genuine care have made a remarkable difference in my child’s confidence and learning.”</p>
						<span>— Parent testimonial</span>
					</section>

					<section className="sp-contact">
						<div>
							<p>READY TO BEGIN?</p>
							<h4>Support shaped around your child and family.</h4>
						</div>
						<div className="sp-contact-button">Get started</div>
					</section>

					<footer className="sp-footer">
						<div>Saltwater Pathways</div>
						<div>Darwin, NT 0800</div>
						<div>Developed by GT Marketing</div>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default function Publication({ content }: PublicationProps) {
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px] mt-[-10px] z-30 relative overflow-hidden">
			<div className="w-full bg-marquee z-10 relative">
				<Marquee
					title={content.marquee}
					fieldPath="publication.marquee"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[430px] leading-[280px] lg:text-[330px] lg:leading-[220px] md:text-[250px] md:leading-[160px] sm:text-[170px] sm:leading-[115px] xm:text-[105px] xm:leading-[72px]"
				/>
			</div>

			<div className="padding-x pt-[24px]">
				<div className="border-t border-white/30 pt-[28px]">
					<h2 data-sb-field-path="publication.heading" className="sub-heading font-NeueMontreal text-white max-w-[1050px]">
						{content.heading}
					</h2>
				</div>

				<div className="pt-[55px] flex flex-col gap-[90px] sm:pt-[38px] xm:pt-[32px]">
					{content.items.map((item, index) => (
						<article key={`${item.title}-${index}`} className="grid grid-cols-12 gap-[35px] md:gap-[24px] sm:flex sm:flex-col xm:flex xm:flex-col">
							<div className="col-span-4 flex flex-col justify-between min-h-[620px] md:min-h-[540px] sm:min-h-0 xm:min-h-0 sm:gap-[30px] xm:gap-[30px]">
								<div>
									<p data-sb-field-path={`publication.items.${index}.eyebrow`} className="small-text uppercase tracking-[0.08em] text-white/65 font-NeueMontreal">
										{item.eyebrow}
									</p>
									<h3 data-sb-field-path={`publication.items.${index}.title`} className="text-[64px] leading-[0.95] md:text-[50px] sm:text-[48px] xm:text-[42px] uppercase font-FoundersGrotesk font-semibold text-white pt-[22px]">
										{item.title}
									</h3>
									<p data-sb-field-path={`publication.items.${index}.location`} className="paragraph text-[#fd4402] font-NeueMontreal pt-[16px]">
										{item.location}
									</p>
									<p data-sb-field-path={`publication.items.${index}.description`} className="paragraph text-white/78 font-NeueMontreal pt-[28px] max-w-[470px]">
										{item.description}
									</p>
									<div className="flex flex-wrap gap-[8px] pt-[30px]">
										{item.services.map((service, serviceIndex) => (
											<span key={`${service}-${serviceIndex}`} data-sb-field-path={`publication.items.${index}.services.${serviceIndex}`} className="small-text uppercase text-white border border-white/45 rounded-full px-[13px] py-[7px] font-NeueMontreal">
												{service}
											</span>
										))}
									</div>
								</div>

								<Link href={item.url} target="_blank" rel="noopener noreferrer" data-sb-field-path={`publication.items.${index}.ctaLabel`} className="group w-fit inline-flex items-center gap-[14px] rounded-full border border-white px-[20px] py-[13px] text-white font-NeueMontreal uppercase small-text transition-colors duration-300 hover:bg-[#fd4402] hover:border-[#fd4402]">
									{item.ctaLabel}
									<ArrowUpRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
								</Link>
							</div>

							<div className="col-span-8">
								<Link href={item.url} target="_blank" rel="noopener noreferrer" className="block group" aria-label={`Open ${item.title} website`}>
									<SaltwaterPreview />
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>

			<style jsx global>{`
				.sp-browser { overflow: hidden; border-radius: 20px; border: 1px solid rgba(255,255,255,.25); background: #eef1ec; box-shadow: 0 35px 80px rgba(0,0,0,.28); transform: translateZ(0); }
				.sp-browser-bar { height: 54px; display: grid; grid-template-columns: 120px 1fr 120px; align-items: center; gap: 12px; padding: 0 18px; background: #f6f3ec; border-bottom: 1px solid #d8d7d0; }
				.sp-browser-dots { display: flex; gap: 7px; }
				.sp-browser-dots span { width: 10px; height: 10px; border-radius: 999px; background: #b8b8b1; }
				.sp-browser-dots span:first-child { background: #fd4402; }
				.sp-browser-address { justify-self: center; width: min(360px,100%); padding: 8px 15px; border-radius: 999px; background: white; color: #35544d; font-size: 12px; text-align: center; font-family: Arial,sans-serif; }
				.sp-live-label { justify-self: end; color: #35544d; font: 700 10px/1 Arial,sans-serif; letter-spacing: .12em; }
				.sp-viewport { height: 660px; overflow: hidden; background: #f7f4ec; }
				.sp-site-canvas { min-height: 2040px; color: #153d36; background: #f7f4ec; animation: saltwater-scroll 18s cubic-bezier(.65,0,.35,1) infinite; will-change: transform; }
				.sp-browser:hover .sp-site-canvas { animation-play-state: paused; }
				.sp-nav { height: 96px; display: flex; align-items: center; justify-content: space-between; padding: 0 42px; background: #f7f4ec; border-bottom: 1px solid #d8dfd7; font-family: Arial,sans-serif; }
				.sp-logo-mark { font: 700 20px/0.9 Georgia,serif; color: #174f45; }
				.sp-nav-links { display: flex; gap: 24px; font-size: 12px; }
				.sp-nav-button,.sp-hero-cta,.sp-contact-button { border-radius: 999px; background: #174f45; color: white; padding: 13px 20px; font: 700 11px/1 Arial,sans-serif; text-transform: uppercase; letter-spacing: .05em; }
				.sp-hero { position: relative; min-height: 560px; overflow: hidden; display: flex; align-items: flex-end; }
				.sp-hero-image { position: absolute; inset: 0; background: linear-gradient(90deg,rgba(9,46,39,.72),rgba(9,46,39,.08)), url('https://images.squarespace-cdn.com/content/v1/68ce1966e80d053e8a649c8c/7db4ca49-1f00-411d-9809-349fc6a2be7d/Casbeach-001--A4-signed.jpg') center/cover, linear-gradient(135deg,#7ba69b,#d8c59c); }
				.sp-hero-copy { position: relative; z-index: 2; width: 72%; padding: 60px 52px; color: white; }
				.sp-hero-copy p,.sp-intro>p,.sp-contact p { font: 700 11px/1 Arial,sans-serif; letter-spacing: .14em; }
				.sp-hero-copy h3 { margin: 16px 0 28px; font: 500 62px/.92 Georgia,serif; letter-spacing: -.04em; }
				.sp-hero-cta { display: inline-block; background: #f4d46b; color: #174f45; }
				.sp-intro { padding: 86px 52px; background: #f7f4ec; }
				.sp-intro h4 { max-width: 820px; margin-top: 18px; font: 500 48px/1.03 Georgia,serif; letter-spacing: -.035em; }
				.sp-services { padding: 0 42px 86px; display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
				.sp-service-card { min-height: 340px; padding: 28px; border-radius: 18px; display: flex; flex-direction: column; justify-content: flex-end; font-family: Arial,sans-serif; }
				.sp-service-card span { margin-bottom: auto; font-size: 12px; }
				.sp-service-card h5 { font: 600 30px/1 Georgia,serif; margin-bottom: 18px; }
				.sp-service-card p { font-size: 13px; line-height: 1.5; }
				.sp-card-one { background: #d9e5db; }
				.sp-card-two { background: #f4d46b; }
				.sp-card-three { background: #d9c8b6; }
				.sp-quote { min-height: 420px; padding: 75px 12%; background: #174f45; color: white; text-align: center; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
				.sp-quote-orbit { position: absolute; width: 370px; height: 370px; border: 1px solid rgba(244,212,107,.35); border-radius: 50%; }
				.sp-quote p { position: relative; z-index: 2; font: 500 41px/1.1 Georgia,serif; }
				.sp-quote span { position: relative; z-index: 2; margin-top: 22px; font: 700 11px/1 Arial,sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #f4d46b; }
				.sp-contact { min-height: 330px; padding: 65px 52px; display: flex; align-items: center; justify-content: space-between; background: #e3eadd; }
				.sp-contact h4 { margin-top: 16px; max-width: 620px; font: 500 48px/1 Georgia,serif; }
				.sp-contact-button { background: #fd4402; }
				.sp-footer { min-height: 190px; padding: 55px 52px; background: #0f302a; color: white; display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: end; gap: 20px; font: 13px/1.4 Arial,sans-serif; }
				.sp-footer div:last-child { text-align: right; color: #f4d46b; }
				@keyframes saltwater-scroll { 0%,12% { transform: translateY(0); } 44%,58% { transform: translateY(-680px); } 88%,100% { transform: translateY(-1380px); } }
				@media (max-width: 1024px) { .sp-viewport{height:560px}.sp-site-canvas{transform-origin:top left}.sp-nav-links{display:none}.sp-hero-copy h3{font-size:48px}.sp-intro h4{font-size:38px}.sp-service-card h5{font-size:24px} }
				@media (max-width: 640px) { .sp-browser-bar{grid-template-columns:70px 1fr;padding:0 12px}.sp-live-label{display:none}.sp-viewport{height:470px}.sp-nav{height:75px;padding:0 22px}.sp-nav-button{display:none}.sp-hero{min-height:420px}.sp-hero-copy{width:100%;padding:40px 24px}.sp-hero-copy h3{font-size:40px}.sp-intro{padding:55px 24px}.sp-intro h4{font-size:34px}.sp-services{padding:0 20px 60px;grid-template-columns:1fr}.sp-service-card{min-height:230px}.sp-quote{padding:55px 24px}.sp-quote p{font-size:32px}.sp-contact{padding:50px 24px;display:block}.sp-contact h4{font-size:35px}.sp-contact-button{display:inline-block;margin-top:25px}.sp-footer{padding:45px 24px;grid-template-columns:1fr}.sp-footer div:last-child{text-align:left}@keyframes saltwater-scroll { 0%,12% { transform: translateY(0); } 48%,60% { transform: translateY(-820px); } 90%,100% { transform: translateY(-1510px); } } }
				@media (prefers-reduced-motion: reduce) { .sp-site-canvas { animation: none; } }
			`}</style>
		</section>
	);
}
