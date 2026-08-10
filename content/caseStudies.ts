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
	projectUrl?: string;
};

export const caseStudies: CaseStudy[] = [
	{
		slug: "better-life-security",
		company: "Better Life Security",
		eyebrow: "Security / Complete website development",
		headline: "Turning a broad security offering into a clear, credible digital presence.",
		summary: "Complete website development for a Canadian private security company, structured around service discovery, trust and enquiry generation.",
		context: "GT Marketing developed the Better Life Security website to give the business a stronger digital foundation and make a broad range of security services easier to understand and access online.",
		challenge: "A security provider serving multiple customer needs requires clarity and credibility immediately. The website needed to organise a wide service mix without overwhelming users, communicate professionalism and create clear pathways for prospective clients to make contact.",
		approach: [
			"Structured the website around individual service categories so users can quickly find the relevant security solution.",
			"Developed service-led page content designed to explain the offer in practical, customer-focused language.",
			"Created a consistent visual and information hierarchy to strengthen trust across the website.",
			"Built clear contact pathways so visitors can move from service research to enquiry.",
			"Delivered the complete website as a scalable digital base for future search, content and lead-generation activity."
		],
		results: [
			{ value: "10", label: "Security service lines", detail: "The live website presents ten distinct security service categories across Better Life Security's offer." },
			{ value: "1", label: "Complete website delivered", detail: "One connected digital experience covering service discovery, credibility and enquiry pathways." },
			{ value: "Canada", label: "Market positioning", detail: "The website positions the company for customers seeking private security services in Canada." }
		],
		services: ["Website strategy", "Website development", "Information architecture", "UX", "Content structure", "Lead pathways"],
		note: "Direct GT Marketing website-development engagement. Post-launch performance percentages are not claimed because campaign analytics have not been supplied.",
		seoTitle: "Better Life Security Website Case Study | GT Marketing",
		seoDescription: "See how GT Marketing developed a complete website for Better Life Security, organising 10 security service lines into a clearer customer journey.",
		projectUrl: "https://www.betterlifesecurity.com/"
	},
	{
		slug: "glow-beauty-spa",
		company: "Glow Beauty Spa",
		eyebrow: "Beauty & wellness / Google + social setup",
		headline: "Building the local discovery foundation before scaling promotion.",
		summary: "Google and social media setup designed to establish the core digital discovery points for a local beauty business.",
		context: "GT Marketing established the core digital setup for Glow Beauty Spa, combining a Google business presence with social media foundations so prospective customers have clearer places to discover and engage with the business online.",
		challenge: "For a local service business, visibility depends on being present where customers actively search and where they discover brands socially. The priority was to establish those channels cleanly before broader promotional activity.",
		approach: [
			"Set up the business's Google presence to support local search and map discovery.",
			"Established social media foundations for ongoing content and customer engagement.",
			"Aligned core business information across customer-facing digital touchpoints.",
			"Created a practical base for future reviews, organic content, local campaigns and paid promotion."
		],
		results: [
			{ value: "2", label: "Discovery channels established", detail: "Google and social media were set up as the business's two core digital discovery channels." },
			{ value: "1", label: "Google business presence", detail: "A dedicated map/search destination gives local customers a direct business discovery point." },
			{ value: "Local", label: "Visibility foundation", detail: "The setup creates a foundation for local search visibility, reviews and social discovery." }
		],
		services: ["Google business setup", "Local discovery", "Social media setup", "Profile optimisation", "Digital foundations"],
		note: "Direct GT Marketing setup engagement. No fabricated reach, booking or revenue percentages are used; performance metrics can be added when channel analytics are available.",
		seoTitle: "Glow Beauty Spa Google & Social Setup Case Study | GT Marketing",
		seoDescription: "GT Marketing established Google and social media foundations for Glow Beauty Spa to strengthen local digital discovery and customer engagement.",
		projectUrl: "https://maps.app.goo.gl/wojfp2zpm9uEyzmm9"
	},
	{
		slug: "nebula-decor-co",
		company: "Nebula Decor Co",
		eyebrow: "Ecommerce / Shopify development",
		headline: "Building a commerce-ready storefront from product discovery to checkout.",
		summary: "Shopify store development focused on creating a structured, scalable ecommerce foundation for a decor brand.",
		context: "GT Marketing developed the Nebula Decor Co Shopify store to give the brand a purpose-built ecommerce environment rather than relying on disconnected social or manual sales pathways.",
		challenge: "The store needed to turn products into an easy-to-navigate shopping experience while providing a reliable technical foundation for catalogue management, cart activity and checkout.",
		approach: [
			"Built the storefront on Shopify to provide a scalable commerce platform.",
			"Structured product discovery and navigation around a clear customer shopping journey.",
			"Configured cart and checkout pathways to move customers from browsing towards purchase.",
			"Developed the experience responsively so customers can browse and shop across device sizes.",
			"Created a foundation that can support future promotions, analytics and product expansion."
		],
		results: [
			{ value: "1", label: "Shopify storefront delivered", detail: "A dedicated ecommerce store created as the brand's central digital sales environment." },
			{ value: "3", label: "Core commerce journeys", detail: "Product discovery, cart and checkout form the core customer purchase journey." },
			{ value: "Shopify", label: "Commerce platform", detail: "A scalable platform gives the business control over products, merchandising and future growth." }
		],
		services: ["Shopify development", "Ecommerce UX", "Store architecture", "Product structure", "Responsive design", "Checkout journey"],
		note: "Direct GT Marketing ecommerce-development engagement. Sales and conversion percentages are not claimed without store analytics.",
		seoTitle: "Nebula Decor Co Shopify Case Study | GT Marketing",
		seoDescription: "See how GT Marketing developed a Shopify ecommerce storefront for Nebula Decor Co with structured product discovery, cart and checkout journeys."
	},
	{
		slug: "nt-secondhand-store",
		company: "NT Secondhand Store",
		eyebrow: "Darwin retail / Website + social media",
		headline: "Connecting local retail, digital channels and community promotion.",
		summary: "Website and social media development supported by an integrated local marketing approach across digital, print, in-store and community channels.",
		context: "This Darwin retail project combined website and social media development with broader local marketing activity. Customer and sales insights were used to tailor promotions and connect digital visibility with store traffic and sales activity.",
		challenge: "A local secondhand retailer needed marketing that worked beyond a single channel. The opportunity was to create a stronger digital presence while linking online promotion with in-store and community activity.",
		approach: [
			"Developed the business's website presence and strengthened social media activity.",
			"Connected digital promotion with flyers, in-store campaigns and community channels.",
			"Used customer and sales insights to tailor offers and promotional messaging.",
			"Supported local media relationships and sponsorship activity to extend reach and store traffic."
		],
		results: [
			{ value: "+15%", label: "Month-on-month sales", detail: "A consistent 15% month-on-month sales uplift was recorded during the integrated local marketing activity." },
			{ value: "4", label: "Marketing channel groups", detail: "Digital advertising, flyers, in-store promotion and community channels were used as an integrated local mix." },
			{ value: "Darwin", label: "Local-market focus", detail: "The strategy was built around local customer behaviour, store traffic and community reach." }
		],
		services: ["Website development", "Social media", "Local marketing", "Campaign planning", "Customer insights", "Community promotion"],
		note: "Portfolio experience from Gundeep Thethy's work with NT Secondhand Store. The 15% sales uplift relates to the integrated local marketing program rather than being attributed to the website alone.",
		seoTitle: "NT Secondhand Store Marketing Case Study | GT Marketing",
		seoDescription: "A Darwin retail case study covering website, social media and integrated local marketing activity associated with a 15% month-on-month sales uplift."
	},
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
