"use client";

import Head from "next/head";
import { useEffect } from "react";
import { Button, Curve, Ready } from "@/components";

const CONTACT_URL = "https://gtmarketing.io/contact";
const HERO_IMAGE = "https://images.pexels.com/photos/11588266/pexels-photo-11588266.jpeg?auto=compress&cs=tinysrgb&w=2000";

const services = [
	{
		number: "01",
		title: "Seller lead generation",
		description:
			"Build campaigns around appraisals, market updates and local expertise so your marketing creates more opportunities to start conversations with prospective vendors.",
	},
	{
		number: "02",
		title: "Agent & agency positioning",
		description:
			"Create a sharper local brand around your people, proof, service proposition and market knowledge so sellers understand why they should choose you before the appraisal meeting.",
	},
	{
		number: "03",
		title: "Property campaign marketing",
		description:
			"Support listings with coordinated landing pages, social content, paid media, video, remarketing and campaign creative designed to extend property attention beyond portal traffic.",
	},
	{
		number: "04",
		title: "Local SEO & suburb visibility",
		description:
			"Strengthen discovery for suburb, agency, property management and appraisal searches so your brand is easier to find when local owners begin researching their next move.",
	},
	{
		number: "05",
		title: "Websites & conversion pages",
		description:
			"Build fast, mobile-first pages for appraisals, agent profiles, developments, off-market opportunities and campaigns with clearer pathways from interest to enquiry.",
	},
	{
		number: "06",
		title: "Database nurture & automation",
		description:
			"Turn your database into a long-term marketing asset with segmented email, vendor nurture, buyer communications, retargeting and practical automation around key property moments.",
	},
];

const system = [
	{
		number: "01",
		title: "Positioning",
		description:
			"Clarify the market, suburbs, ideal vendors, competitive position and reasons property owners should remember your brand.",
	},
	{
		number: "02",
		title: "Visibility",
		description:
			"Build consistent discovery across search, social, local content, paid media and the channels property owners actually use.",
	},
	{
		number: "03",
		title: "Acquisition",
		description:
			"Create campaigns that generate appraisal interest, property enquiries and useful first-party audience data rather than disconnected impressions.",
	},
	{
		number: "04",
		title: "Conversion",
		description:
			"Improve landing pages, agent profiles and enquiry pathways so high-intent traffic has a clear next action.",
	},
	{
		number: "05",
		title: "Nurture",
		description:
			"Stay relevant between transactions with useful market communication, retargeting and database campaigns that compound over time.",
	},
];

const campaignIdeas = [
	"Free appraisal",
	"Suburb market reports",
	"Just listed",
	"Just sold",
	"Auction campaigns",
	"Open homes",
	"Off-market opportunities",
	"Agent profiles",
	"Property video",
	"Vendor nurture",
	"Buyer database",
	"Remarketing",
];

export default function RealEstateMarketing() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				"@id": "https://gtmarketing.io/real-estate-marketing#service",
				name: "Real Estate Marketing",
				url: "https://gtmarketing.io/real-estate-marketing",
				description:
					"Real estate marketing for Australian agents and agencies including seller lead generation, property campaigns, local SEO, websites, paid media and database nurture.",
				serviceType: "Real estate marketing and lead generation",
				provider: {
					"@type": "ProfessionalService",
					name: "GT Marketing",
					url: "https://gtmarketing.io",
				},
				areaServed: {
					"@type": "Country",
					name: "Australia",
				},
				audience: {
					"@type": "BusinessAudience",
					audienceType: "Real estate agents, agencies and property businesses",
				},
			},
			{
				"@type": "BreadcrumbList",
				"@id": "https://gtmarketing.io/real-estate-marketing#breadcrumb",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "https://gtmarketing.io",
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Real Estate Marketing",
						item: "https://gtmarketing.io/real-estate-marketing",
					},
				],
			},
		],
	};

	return (
		<>
			<Head>
				<title>Real Estate Marketing Agency Australia | GT Marketing</title>
				<meta
					name="description"
					content="Real estate marketing for agents and agencies. Generate seller enquiries, strengthen agent branding and market property with SEO, websites, social media, paid campaigns and database nurture."
				/>
				<meta
					name="keywords"
					content="real estate marketing agency, real estate marketing Australia, real estate lead generation, seller leads, real estate digital marketing, agent marketing, property marketing"
				/>
				<meta
					name="robots"
					content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
				/>
				<link rel="canonical" href="https://gtmarketing.io/real-estate-marketing" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="GT Marketing" />
				<meta property="og:title" content="Real Estate Marketing Agency Australia | GT Marketing" />
				<meta
					property="og:description"
					content="Marketing systems for real estate agents and agencies focused on seller enquiries, stronger local positioning and better property campaign performance."
				/>
				<meta property="og:url" content="https://gtmarketing.io/real-estate-marketing" />
				<meta property="og:image" content={HERO_IMAGE} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Real Estate Marketing Agency Australia | GT Marketing" />
				<meta
					name="twitter:description"
					content="Generate seller enquiries and strengthen your local real estate brand with connected digital marketing."
				/>
				<meta name="twitter:image" content={HERO_IMAGE} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
					}}
				/>
			</Head>

			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-background text-secondry overflow-hidden">
					<section className="min-h-screen padding-x pt-[170px] lg:pt-[150px] md:pt-[130px] sm:pt-[120px] xm:pt-[110px] pb-[70px] flex flex-col justify-between gap-[70px]">
						<div>
							<p className="small-text uppercase font-NeueMontreal mb-[28px]">
								Real estate marketing
							</p>
							<h1 className="heading uppercase font-bold font-FoundersGrotesk tracking-[-2px] max-w-[1500px]">
								Turn property attention into
								<span className="text-[#fd4402]"> seller enquiries.</span>
							</h1>
						</div>

						<div className="grid grid-cols-12 gap-[20px] items-end md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<div className="col-span-4 md:w-full sm:w-full xm:w-full">
								<p className="sub-paragraph font-NeueMontreal max-w-[560px] mb-[28px]">
									GT Marketing helps real estate agents and agencies build stronger local brands, generate appraisal opportunities, market listings and create clearer pathways from attention to enquiry.
								</p>
								<Button href={CONTACT_URL} title="Generate more enquiries" />
							</div>
							<div className="col-span-8 md:w-full sm:w-full xm:w-full">
								<div className="rounded-[14px] overflow-hidden bg-[#fd4402]">
									<img
										src={HERO_IMAGE}
										alt="Woman in a vivid orange suit against a blue architectural wall"
										className="w-full aspect-[8/5] object-cover object-[center_43%]"
										loading="eager"
										fetchPriority="high"
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="bg-[#fd4402] rounded-t-[20px] padding-x padding-y text-white">
						<div className="grid grid-cols-12 gap-[20px] md:flex md:flex-col sm:flex sm:flex-col xm:flex xm:flex-col">
							<p className="col-span-3 small-text uppercase font-NeueMontreal">
								The real estate marketing problem
							</p>
							<div className="col-span-9">
								<h2 className="sub-heading font-NeueMontreal max-w-[1200px]">
									Portal exposure markets the property. Your marketing still has to market the agent.
								</h2>
								<p className="sub-paragraph font-NeueMontreal max-w-[780px] mt-[32px]">
									Listings come and go. A stronger system makes every campaign contribute to local recognition, first-party audience growth, seller trust and future appraisal opportunities — not only the current transaction.
								</p>
								<div className="mt-[32px]">
									<Button href={CONTACT_URL} title="Build my lead system" />
								</div>
							</div>
						</div>
					</section>

					<section className="padding-y">
						<div className="padding-x pb-[45px] border-b border-[#21212155]">
							<p className="small-text uppercase font-NeueMontreal mb-[20px]">What we build</p>
							<h2 className="sub-heading font-NeueMontreal max-w-[1120px]">
								Marketing built around the full property journey — before, during and after the listing.
							</h2>
						</div>

						<div className="padding-x grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1">
							{services.map((service, index) => (
								<article
									key={service.number}
									className={`py-[48px] min-h-[300px] border-b border-[#21212155] ${
										index % 2 === 0
											? "pr-[45px] border-r sm:border-r-0 xm:border-r-0"
											: "pl-[45px] sm:pl-0 xm:pl-0"
									}`}>
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
								<h2 className="sub-heading font-NeueMontreal max-w-[670px]">
									Make every listing build the next listing.
								</h2>
							</div>
							<div className="col-span-7">
								<p className="sub-paragraph font-NeueMontreal max-w-[790px] mb-[36px]">
									A property campaign can do more than attract buyers. Used properly, it can demonstrate your process, grow local audiences, reinforce your personal brand and create future vendor conversations.
								</p>
								<div className="flex flex-wrap gap-[10px]">
									{campaignIdeas.map((idea) => (
										<span
											key={idea}
											className="small-text uppercase font-NeueMontreal border border-[#21212155] rounded-full px-[14px] py-[7px]">
											{idea}
										</span>
									))}
								</div>
								<div className="mt-[38px]">
									<Button href={CONTACT_URL} title="Plan a property campaign" />
								</div>
							</div>
						</div>
					</section>

					<section className="padding-x padding-y">
						<p className="small-text uppercase font-NeueMontreal mb-[20px]">One connected system</p>
						<h2 className="sub-heading font-NeueMontreal max-w-[1050px] mb-[70px]">
							Build an audience and pipeline that exist beyond the next listing.
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
								<p className="small-text uppercase font-NeueMontreal mb-[24px]">For agents & agencies</p>
								<h2 className="sub-heading font-NeueMontreal max-w-[900px]">
									Your next vendor may be watching your marketing before they ever contact you.
								</h2>
								<p className="sub-paragraph font-NeueMontreal max-w-[790px] mt-[26px]">
									GT Marketing connects positioning, property campaigns, local search, websites, paid media and database nurture into a clearer real estate growth system.
								</p>
							</div>
							<div className="shrink-0">
								<Button href={CONTACT_URL} title="Grow my real estate brand" />
							</div>
						</div>
					</section>

					<Ready />
				</main>
			</Curve>
		</>
	);
}
