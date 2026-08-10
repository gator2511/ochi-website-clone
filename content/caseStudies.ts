export type CaseStudyMetric = {
	value: string;
	label: string;
	detail: string;
};

export type CaseStudy = {
	slug: string;
	company: string;
	eyebrow: string;
	headline: string;
	summary: string;
	context: string;
	challenge: string;
	approach: string[];
	results: CaseStudyMetric[];
	services: string[];
	note: string;
	seoTitle: string;
	seoDescription: string;
};

export const caseStudies: CaseStudy[] = [
	{
		slug: "real-estate-central",
		company: "Real Estate Central",
		eyebrow: "Real estate / Performance marketing",
		headline: "Turning paid media into a stronger acquisition system.",
		summary: "A conversion-led media and landing-page strategy that improved acquisition efficiency across Google and Meta.",
		context: "In a previous Marketing Manager role, GT Marketing founder Gundeep Thethy owned paid media strategy across Google Search, Display and Meta with a $120K quarterly budget. The focus was not simply to buy more traffic, but to improve how media, attribution and landing pages worked together to produce measurable customer acquisition.",
		challenge: "The business needed more qualified acquisition from a substantial existing media investment. Campaign structure, audience targeting, attribution visibility and landing-page conversion all needed to work as one connected funnel.",
		approach: [
			"Restructured campaign architecture around search intent, remarketing and prospecting.",
			"Allocated budget using conversion performance: 45% high-intent search, 30% remarketing and 25% prospecting.",
			"Reduced wasted spend through keyword restructuring, negative-keyword controls, bid refinement and audience segmentation.",
			"Implemented GA4 conversion tracking to improve visibility across paid channels and lead sources.",
			"Optimised headlines, forms and lead-capture pathways to improve landing-page conversion."
		],
		results: [
			{ value: "+35%", label: "ROAS improvement", detail: "Improved return on advertising spend following channel and audience restructuring." },
			{ value: "+20%", label: "Customer acquisition", detail: "Growth in acquisition from a more disciplined full-funnel media strategy." },
			{ value: "-22%", label: "Cost per acquisition", detail: "Lower CPA through targeting, bidding and funnel optimisation." },
			{ value: "4.2% → 5.6%", label: "Landing-page conversion", detail: "A roughly 33% relative lift in conversion rate from page and form optimisation." }
		],
		services: ["Google Ads", "Meta Ads", "GA4", "Conversion optimisation", "Remarketing", "Landing-page strategy"],
		note: "Founder experience: results were achieved by Gundeep Thethy in his previous Marketing Manager role at Real Estate Central and now inform GT Marketing's performance methodology.",
		seoTitle: "Real Estate Lead Generation Case Study | GT Marketing",
		seoDescription: "See how the experience behind GT Marketing improved ROAS by 35%, customer acquisition by 20% and landing-page conversion from 4.2% to 5.6% in real estate."
	},
	{
		slug: "al-jalil-international",
		company: "Al Jalil International",
		eyebrow: "Dubai / Acquisition & go-to-market",
		headline: "Building a more efficient lead engine while launching new products.",
		summary: "A data-led acquisition and go-to-market program that increased qualified leads, reduced CPA and supported rapid market entry.",
		context: "In a previous Marketing Manager role in Dubai, GT Marketing founder Gundeep Thethy led acquisition strategy across Google Ads, Meta and offline trade channels. Media investment was tied directly to commercial growth priorities rather than treated as isolated campaign activity.",
		challenge: "The business needed to generate more qualified demand while improving acquisition efficiency and supporting the launch of two new product lines into a competitive market.",
		approach: [
			"Restructured paid campaigns and refined audience targeting around stronger commercial intent.",
			"Improved bid strategy, conversion tracking and funnel structure to increase qualified lead generation.",
			"Connected digital acquisition with offline trade activity and broader commercial priorities.",
			"Used data-led segmentation and go-to-market planning for two new product launches.",
			"Managed agency relationships, media negotiations and performance reporting against ROI targets."
		],
		results: [
			{ value: "+30%", label: "Qualified leads", detail: "Higher lead generation through bid strategy, funnel and conversion improvements." },
			{ value: "-25%", label: "Cost per acquisition", detail: "More efficient acquisition following campaign and audience restructuring." },
			{ value: "15%", label: "Market share", detail: "Two newly launched product lines captured 15% market share within six months." },
			{ value: "2", label: "Product lines launched", detail: "Data-led segmentation and go-to-market planning supported both launches." }
		],
		services: ["Google Ads", "Meta Ads", "Lead generation", "GTM strategy", "Conversion tracking", "Agency management"],
		note: "Founder experience: results were achieved by Gundeep Thethy in his previous Marketing Manager role at Al Jalil International and now contribute to GT Marketing's acquisition and go-to-market approach.",
		seoTitle: "Lead Generation & GTM Case Study | GT Marketing",
		seoDescription: "A founder-experience case study showing 30% growth in qualified leads, a 25% CPA reduction and 15% market share within six months."
	},
	{
		slug: "pure-imagination",
		company: "Pure Imagination",
		eyebrow: "Consultancy / Hospitality, retail & SaaS",
		headline: "Scaling acquisition without automatically scaling spend.",
		summary: "A boutique growth consultancy model built around segmentation, funnel refinement and measurable commercial outcomes.",
		context: "Before establishing GT Marketing, Gundeep Thethy founded and operated Pure Imagination, a boutique marketing consultancy serving hospitality, retail and SaaS clients across paid media, social, content and growth strategy. This period directly shaped the integrated, commercially focused model used by GT Marketing today.",
		challenge: "Clients needed growth without waste: more customers, clearer channel decisions and stronger performance from limited marketing budgets. The opportunity was to simplify campaign structures and make every channel accountable to a measurable outcome.",
		approach: [
			"Built multi-channel acquisition programs across paid media, social, content and growth strategy.",
			"Used segmentation and campaign rationalisation to reduce unnecessary paid-media spend.",
			"Refined funnels while protecting lead volume and commercial performance.",
			"Developed a SaaS promotion strategy for Aja Restaurant focused on new-customer acquisition.",
			"Created influencer and ambassador programs linked to measurable KPIs and monthly performance dashboards."
		],
		results: [
			{ value: "+40%", label: "Customer acquisition", detail: "Increase achieved for key client accounts through multi-channel growth programs." },
			{ value: "-18%", label: "Paid-media spend", detail: "Lower spend while maintaining lead volume through segmentation and campaign rationalisation." },
			{ value: "+40%", label: "New customers", detail: "Aja Restaurant SaaS promotion strategy increased new-customer acquisition in one quarter." },
			{ value: "+30%", label: "Social reach", detail: "Influencer and ambassador programs increased reach against measurable KPIs." }
		],
		services: ["Growth strategy", "Paid media", "Social media", "Content strategy", "Funnel optimisation", "Performance reporting"],
		note: "Founder experience: Pure Imagination was founded and operated by Gundeep Thethy. The consultancy's growth methodology is a direct predecessor to GT Marketing's current model.",
		seoTitle: "Growth Marketing Consultancy Case Study | GT Marketing",
		seoDescription: "See how the consultancy experience behind GT Marketing increased acquisition by up to 40% while reducing paid-media spend by 18%."
	}
];

export const getCaseStudyBySlug = (slug: string) =>
	caseStudies.find((caseStudy) => caseStudy.slug === slug);
