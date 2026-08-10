"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { Button, Curve, Ready } from "@/components";

const CONTACT_URL = "https://gtmarketing.io/contact";

const services = [
	{
		number: "01",
		title: "Local SEO & Google visibility",
		description:
			"Show up when nearby customers search for coffee, breakfast, brunch and cafes. We strengthen local search visibility, Google Business Profile performance and location-led website SEO.",
	},
	{
		number: "02",
		title: "Social media that creates appetite",
		description:
			"Build a social presence around the product, people and atmosphere that make your venue worth visiting — from Reels and launches to seasonal specials and always-on content.",
	},
	{
		number: "03",
		title: "Cafe websites built to convert",
		description:
			"Make menus, opening hours, directions, bookings, catering and ordering effortless to find. Fast, mobile-first websites turn interest into action before customers arrive.",
	},
	{
		number: "04",
		title: "Paid local acquisition",
		description:
			"Use Google and Meta campaigns to reach people who can realistically visit your venue, support new launches, fill quieter trading periods and promote high-value offers.",
	},
	{
		number: "05",
		title: "Retention & loyalty marketing",
		description:
			"Turn first-time visitors into regulars with customer databases, email campaigns, loyalty promotions, seasonal communications and smart reactivation offers.",
	},
	{
		number: "06",
		title: "Measurement that informs decisions",
		description:
			"Connect website analytics, campaign performance and conversion signals so your marketing decisions are based on commercial activity rather than vanity metrics.",
	},
];

const system = [
	{
		number: "01",
		title: "Discovery",
		description: "Understand the market, catchment area, customer behaviour, competitors and commercial priorities.",
	},
	{
		number: "02",
		title: "Visibility",
		description: "Build stronger discovery across Google, local search, social media and paid channels.",
	},
	{
		number: "03",
		title: "Conversion",
		description: "Turn attention into visits, bookings, orders, catering enquiries and other meaningful actions.",
	},
	{
		number: "04",
		title: "Retention",
		description: "Create reasons for customers to return, remember the brand and bring other people with them.",
	},
];

const promotions = [
	"Morning coffee",
	"Breakfast offers",
	"Weekend brunch",
	"Seasonal drinks",
	"New menu launches",
	"Lunch specials",
	"Events",
	"Catering",
	"Gift cards",
	"Loyalty campaigns",
	"Office worker offers",
	"Customer reactivation",
];

export default function CafeMarketing() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Cafe and Coffee Shop Marketing",
		url: "https://gtmarketing.io/cafe-marketing",
		description:
			"Marketing services for cafes and coffee shops including local SEO, social media, websites, paid advertising, customer retention and analytics.",
		provider: {
			"@type": "ProfessionalService",
			name: "GT Marketing",
			url: "https://gtmarketing.io",
		},
		areaServed: {
			"@type": "Country",
			name: "Australia",
		},
	};

	return (
		<>
			<Head>
				<title>Cafe Marketing Agency Australia | GT Marketing</title>
				<meta
					name="description"
					content="Marketing for cafes and coffee shops. Grow local visibility, foot traffic and repeat customers with SEO, social media, websites, Google Ads and digital campaigns."
				/>
				<meta name="robots" content="index,follow" />
				<link rel="canonical" href="https://gtmarketing.io/cafe-marketing" />
				<meta property="og:title" content="Cafe Marketing Agency Australia | GT Marketing" />
				<meta
					property="og:description"
					content="Grow local visibility, foot traffic and repeat customers with connected marketing for cafes and coffee shops."
				/>
				<meta property="og:url" content="https://gtmarketing.io/cafe-marketing" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://gtmarketing.io/industries/hospitality.svg" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
				/>
			</Head>

			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-background text-secondry overflow-hidden">
					<section className="min-h-screen padding-x pt-[170px] lg:pt-[150px] md:pt-[130px] sm:pt-[120px] xm:pt-[110px] pb-[70px] flex flex-col justify-between gap-[70px]">
						<div>
							<p className="small-text uppercase font-NeueMontreal mb-[28px]">
								Cafe & coffee shop marketing
							</p>
							<h1 className="heading uppercase font-bold font-FoundersGrotesk tracking-[-2px] max-w-[1500px]">
								Turn local searches into
								<span className="text-[#fd4402]"> customers at your counter.</span>
							</h1>
						</div>

						<div className="grid grid-cols-12 gap-[20px] items-end md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<div className="col-span-4 md:w-full sm:w-full xm:w-full">
								<p className="sub-paragraph font-NeueMontreal max-w-[560px] mb-[28px]">
									Great coffee gets people talking. Great marketing gets them through the door. GT Marketing helps cafes build stronger local visibility, attract new customers and turn occasional visitors into regulars.
								</p>
								<Button href={CONTACT_URL} title="Get more customers" />
							</div>
							<div className="col-span-8 md:w-full sm:w-full xm:w-full">
								<div className="rounded-[14px] overflow-hidden bg-[#fd4402]">
									<Image
										src="/industries/hospitality.svg"
										alt="Cafe and coffee shop marketing concept by GT Marketing"
										width={1600}
										height={1000}
										priority
										className="w-full aspect-[8/5] object-cover"
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="bg-[#fd4402] rounded-t-[20px] padding-x padding-y text-white">
						<div className="grid grid-cols-12 gap-[20px] md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<p className="col-span-3 small-text uppercase font-NeueMontreal">
								The local visibility problem
							</p>
							<div className="col-span-9">
								<h2 className="sub-heading font-NeueMontreal max-w-[1200px]">
									Good coffee is not enough if people cannot find you.
								</h2>
								<p className="sub-paragraph font-NeueMontreal max-w-[760px] mt-[32px]">
									Your next customer may already be searching for coffee near me, breakfast nearby, specialty coffee or somewhere for brunch. The commercial question is whether they discover your cafe — or the one down the road.
								</p>
								<div className="mt-[32px]">
									<Button href={CONTACT_URL} title="Improve my visibility" />
								</div>
							</div>
						</div>
					</section>

					<section className="padding-y">
						<div className="padding-x pb-[45px] border-b border-[#21212155]">
							<p className="small-text uppercase font-NeueMontreal mb-[20px]">What we build</p>
							<h2 className="sub-heading font-NeueMontreal max-w-[1100px]">
								Marketing built around how cafe customers actually choose where to go.
							</h2>
						</div>

						<div className="padding-x grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1">
							{services.map((service, index) => (
								<article
									key={service.number}
									className={`py-[48px] min-h-[300px] border-b border-[#21212155] ${index % 2 === 0 ? "pr-[45px] border-r sm:border-r-0 xm:border-r-0" : "pl-[45px] sm:pl-0 xm:pl-0"}`}>
									<div className="flex justify-between gap-[20px] mb-[45px]">
										<p className="small-text font-NeueMontreal">{service.number}</p>
										<span className="w-[10px] h-[10px] bg-[#fd4402] rounded-full mt-[5px]" />
									</div>
									<h3 className="text-[38px] leading-[42px] md:text-[32px] md:leading-[36px] sm:text-[30px] sm:leading-[34px] xm:text-[28px] xm:leading-[32px] font-NeueMontreal mb-[20px]">
										{service.title}
									</h3>
									<p className="paragraph font-NeueMontreal max-w-[650px]">{service.description}</p>
								</article>
							))}
						</div>
					</section>

					<section className="bg-about text-secondry rounded-t-[20px] padding-x padding-y">
						<div className="grid grid-cols-12 gap-[20px] md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<div className="col-span-5">
								<p className="small-text uppercase font-NeueMontreal mb-[22px]">Campaign thinking</p>
								<h2 className="sub-heading font-NeueMontreal max-w-[650px]">
									Turn a quiet Tuesday into a reason to visit.
								</h2>
							</div>
							<div className="col-span-7">
								<p className="sub-paragraph font-NeueMontreal max-w-[760px] mb-[36px]">
									Marketing should do more than tell people you exist. It should create a relevant reason to visit now, without training customers to wait for permanent discounts.
								</p>
								<div className="flex flex-wrap gap-[10px]">
									{promotions.map((promotion) => (
										<span
											key={promotion}
											className="small-text uppercase font-NeueMontreal border border-[#21212155] rounded-full px-[14px] py-[7px]">
											{promotion}
										</span>
									))}
								</div>
								<div className="mt-[38px]">
									<Button href={CONTACT_URL} title="Plan a campaign" />
								</div>
							</div>
						</div>
					</section>

					<section className="padding-x padding-y">
						<p className="small-text uppercase font-NeueMontreal mb-[20px]">One connected system</p>
						<h2 className="sub-heading font-NeueMontreal max-w-[1000px] mb-[70px]">
							Stop managing disconnected marketing activity.
						</h2>

						<div className="border-t border-[#21212155]">
							{system.map((step) => (
								<div
									key={step.number}
									className="grid grid-cols-12 gap-[20px] py-[34px] border-b border-[#21212155] md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
									<p className="col-span-2 small-text font-NeueMontreal">{step.number}</p>
									<h3 className="col-span-4 text-[36px] leading-[40px] font-NeueMontreal">{step.title}</h3>
									<p className="col-span-6 paragraph font-NeueMontreal max-w-[720px]">{step.description}</p>
								</div>
							))}
						</div>
					</section>

					<section className="padding-x pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
						<div className="rounded-[20px] bg-[#fd4402] text-white padding-x padding-y flex items-end justify-between gap-[40px] md:flex-col md:items-start sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div>
								<p className="small-text uppercase font-NeueMontreal mb-[24px]">For independent hospitality</p>
								<h2 className="sub-heading font-NeueMontreal max-w-[900px]">
									Your next regular could be searching right now.
								</h2>
								<p className="sub-paragraph font-NeueMontreal max-w-[760px] mt-[26px]">
									GT Marketing connects strategy, websites, local search, social media, advertising and retention into a clearer system for measurable cafe growth.
								</p>
							</div>
							<div className="shrink-0">
								<Button href={CONTACT_URL} title="Let's grow your cafe" />
							</div>
						</div>
					</section>

					<Ready />
				</main>
			</Curve>
		</>
	);
}
