import Head from "next/head";
import site from "@/content/data/site.json";

const SITE_URL = "https://gtmarketing.io";
const DEFAULT_IMAGE = `${SITE_URL}/contacthhero.jpg`;

const SERVICES = [
	"Marketing support for Aboriginal organisations",
	"Funding communications and grant application support",
	"Remote and low-bandwidth website delivery",
	"Tourism, arts and cultural enterprise marketing",
	"Local SEO",
	"Search engine optimisation",
	"Lead generation systems",
	"Website development",
	"Marketing strategy",
	"Social media marketing",
	"Direct-to-consumer marketing",
	"Web hosting",
	"Brand kit and brand guidelines",
	"Email and direct marketing",
	"Marketing automation",
	"Analytics and conversion optimisation",
];

const LOCAL_SERVICE_AREAS = [
	{ "@type": "City", name: "Darwin, Northern Territory" },
	{ "@type": "Place", name: "Darwin City, Northern Territory" },
	{ "@type": "Place", name: "Casuarina, Northern Territory" },
	{ "@type": "City", name: "Palmerston, Northern Territory" },
	{ "@type": "Place", name: "Top End, Northern Territory" },
	{ "@type": "Place", name: "Central Australia, Northern Territory" },
	{ "@type": "AdministrativeArea", name: "Northern Territory" },
];

type PageType =
	| "WebPage"
	| "AboutPage"
	| "ContactPage"
	| "CollectionPage"
	| "ProfilePage"
	| "Article";

type LocalArea = {
	name: string;
	type: "City" | "Place";
	region: string;
	postcode?: string;
};

type RouteSEO = {
	title: string;
	description: string;
	label: string;
	type: PageType;
	image?: string;
	index?: boolean;
	publishedDate?: string;
	modifiedDate?: string;
	keywords?: string[];
	location?: LocalArea;
	parentLabel?: string;
	parentPath?: string;
};

const ROUTES: Record<string, RouteSEO> = {
	"/": {
		title: "Marketing for Aboriginal Organisations & Regional Australia | GT Marketing",
		description:
			"GT Marketing supports Aboriginal corporations, community-controlled organisations and regional businesses with practical marketing, websites, digital systems, funding communications and remote delivery.",
		label: "Home",
		type: "WebPage",
		keywords: [
			"marketing for Aboriginal organisations",
			"Aboriginal corporation marketing",
			"Aboriginal organisation website",
			"remote community marketing Australia",
			"funding communications Northern Territory",
			"regional marketing Northern Territory",
		],
	},
	"/aboriginal-organisations": {
		title: "Marketing for Aboriginal Organisations | GT Marketing",
		description:
			"Practical marketing support for Aboriginal corporations, community-controlled organisations, art centres, ranger groups, community stores and regional enterprises across the NT and Australia.",
		label: "Marketing for Aboriginal Organisations",
		type: "WebPage",
		keywords: [
			"marketing for Aboriginal organisations",
			"Aboriginal corporation website",
			"Aboriginal community controlled organisation marketing",
			"remote community website",
			"grant application communications",
			"Aboriginal tourism marketing",
			"art centre ecommerce",
			"bush foods marketing",
		],
	},
	"/services": {
		title: "Marketing Services Darwin | Websites & Leads | GT Marketing",
		description:
			"Local SEO, websites and lead-generation systems for small and medium businesses in Darwin, Palmerston, Casuarina and across the NT.",
		label: "Services",
		type: "WebPage",
		image:
			"https://images.pexels.com/photos/36835822/pexels-photo-36835822.jpeg?auto=compress&cs=tinysrgb&w=2000",
		keywords: [
			"SEO Darwin City",
			"SEO Casuarina",
			"SEO Palmerston",
			"website design Darwin",
			"brand kit Darwin",
			"digital marketing Northern Territory",
		],
	},
	"/seo-darwin": {
		title: "SEO Darwin | Local SEO for NT Businesses | GT Marketing",
		description:
			"Local SEO in Darwin for tradies, hospitality, health, NDIS and professional services. Google Business Profile, citations and reviews.",
		label: "SEO in Darwin",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		keywords: [
			"SEO Darwin",
			"SEO in Darwin",
			"local SEO Darwin",
			"SEO agency Darwin",
			"Google Business Profile Darwin",
		],
	},
	"/cafe-marketing": {
		title: "Cafe Marketing Darwin | Hospitality | GT Marketing",
		description:
			"Cafe and hospitality marketing in Darwin. Local SEO, websites and campaigns that help venues in Darwin and Palmerston get found.",
		label: "Cafe marketing",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		image:
			"https://images.pexels.com/photos/27860686/pexels-photo-27860686/free-photo-of-coffee-cup.jpeg?auto=compress&cs=tinysrgb&w=1200",
		keywords: [
			"cafe marketing Darwin",
			"hospitality marketing Darwin",
			"coffee shop marketing Darwin",
			"cafe SEO Darwin",
			"hospitality marketing NT",
		],
	},
	"/real-estate-marketing": {
		title: "Real Estate Marketing Darwin | Palmerston | GT Marketing",
		description:
			"Real estate marketing for Darwin and Palmerston agents. Local SEO, listing campaigns and websites that support seller enquiries.",
		label: "Real estate marketing",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		image:
			"https://images.pexels.com/photos/11588266/pexels-photo-11588266.jpeg?auto=compress&cs=tinysrgb&w=1200",
		keywords: [
			"real estate marketing Darwin",
			"real estate marketing Palmerston",
			"Darwin real estate agent marketing",
			"property marketing Darwin",
			"seller leads Darwin",
		],
	},
	"/web-design-darwin": {
		title: "Web Design Darwin | Sites That Get Enquiries | GT Marketing",
		description:
			"Web design in Darwin for small and medium businesses. Fast mobile sites with enquiry forms and click-to-call. GT Marketing, NT.",
		label: "Web design in Darwin",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		keywords: [
			"web design Darwin",
			"web design in Darwin",
			"website design Darwin",
			"Darwin business website",
			"click to call website Darwin",
		],
	},
	"/google-ads-darwin": {
		title: "Google Ads Management Darwin | PPC | GT Marketing",
		description:
			"Google Ads and pay-per-click management for small businesses in Darwin and Palmerston. Setup, local targeting, tracking and monthly reporting.",
		label: "Google Ads in Darwin",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		keywords: [
			"Google Ads Darwin",
			"Google Ads management Darwin",
			"PPC Darwin",
			"pay per click Darwin",
			"Google Ads Palmerston",
		],
	},
	"/marketing-packages-darwin": {
		title: "Marketing Packages Darwin | $595/month + GST | GT Marketing",
		description:
			"Darwin marketing from $595 + GST a month until the end of November 2026. Local SEO, websites and a monthly report. Ad spend is separate.",
		label: "Monthly marketing offer",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		keywords: [
			"marketing packages Darwin",
			"marketing agency Darwin",
			"local SEO Darwin",
			"$595 + GST a month marketing",
		],
	},
	"/brand-kit": {
		title: "Brand Kit Design Darwin | Brand Guidelines & Identity Systems | GT Marketing",
		description:
			"A practical brand kit: logo rules, colours, typography, voice and templates so a Darwin business stays consistent on every channel.",
		label: "Brand Kit",
		type: "WebPage",
		parentLabel: "Services",
		parentPath: "/services",
		keywords: [
			"brand kit Darwin",
			"brand guidelines Darwin",
			"brand identity Darwin",
			"branding agency Darwin",
			"brand kit Australia",
			"brand guidelines for small business",
			"brand identity Northern Territory",
		],
	},
	"/presentation": {
		title: "Our Work | Darwin Local SEO & Websites | GT Marketing",
		description:
			"How GT Marketing helps Darwin and NT businesses with local SEO, websites and leads for tradies, hospitality, health and professional services.",
		label: "Our Work",
		type: "CollectionPage",
	},
	"/about-us": {
		title: "About GT Marketing | Darwin Marketing Agency",
		description:
			"GT Marketing is a Darwin agency building local SEO, websites and lead-generation systems for small and medium businesses across the NT.",
		label: "About Us",
		type: "AboutPage",
	},
	"/insights": {
		title: "Marketing Insights & Conversion Advice | GT Marketing",
		description:
			"Read practical GT Marketing guidance on conversion optimisation, local SEO, websites, lead generation and sustainable growth for Australian businesses.",
		label: "Insights",
		type: "CollectionPage",
	},
	"/blog/how-to-get-more-enquiries-without-spending-more-on-ads": {
		title: "How to Get More Enquiries Without Spending More on Ads | GT Marketing",
		description:
			"A practical guide to more qualified enquiries from existing traffic, your website, customer data and local visibility, before raising ad spend.",
		label: "How to Get More Enquiries Without Spending More on Ads",
		type: "Article",
		image:
			"https://images.pexels.com/photos/34775821/pexels-photo-34775821.jpeg?auto=compress&cs=tinysrgb&w=2000",
		publishedDate: "2026-08-02",
		modifiedDate: "2026-08-02",
		parentLabel: "Insights",
		parentPath: "/insights",
		keywords: [
			"get more enquiries",
			"increase website enquiries",
			"lead generation without more ad spend",
			"conversion optimisation Australia",
			"marketing agency Darwin",
			"improve lead conversion",
		],
	},
	"/blog/5-signs-your-trade-business-needs-a-better-website": {
		title: "5 Signs Your Trade Business Needs a Better Website | GT Marketing",
		description:
			"Not sure if your trade business website is costing you jobs? Here are five clear signs it is time for an upgrade, plus what to fix first.",
		label: "5 Signs Your Trade Business Needs a Better Website",
		type: "Article",
		image:
			"https://images.pexels.com/photos/12759924/pexels-photo-12759924.jpeg?auto=compress&cs=tinysrgb&w=2000",
		publishedDate: "2026-07-26",
		modifiedDate: "2026-07-30",
		parentLabel: "The Vault",
		parentPath: "/the-vault",
		keywords: [
			"trade business website",
			"website for tradies",
			"electrician website",
			"plumber website Darwin",
			"tradie website SEO",
		],
	},
	"/blog/local-seo-checklist-darwin-palmerston-businesses": {
		title: "Local SEO Checklist for Darwin and Palmerston Businesses | GT Marketing",
		description:
			"A practical local SEO checklist for Darwin City, Casuarina and Palmerston businesses looking to improve Google visibility and attract local customers.",
		label: "Local SEO Checklist for Darwin and Palmerston Businesses",
		type: "Article",
		image: "/blog/local-seo-checklist-darwin-palmerston.jpg",
		publishedDate: "2026-07-26",
		modifiedDate: "2026-07-30",
		parentLabel: "The Vault",
		parentPath: "/the-vault",
		keywords: [
			"local SEO Darwin",
			"SEO Darwin City",
			"SEO Casuarina",
			"SEO Palmerston",
			"Northern Territory SEO",
			"Google Business Profile Darwin",
		],
	},
	"/locations/darwin-city": {
		title: "Marketing Agency Darwin City | 130 Smith St | GT Marketing",
		description:
			"The Darwin City page for GT Marketing at 130 Smith Street. Central Darwin context, with SEO and web design on their own pages.",
		label: "Darwin City",
		type: "WebPage",
		keywords: [
			"Darwin City",
			"130 Smith Street Darwin",
			"central Darwin businesses",
			"GT Marketing Darwin City",
			"Darwin City service area",
		],
		location: {
			name: "Darwin City",
			type: "Place",
			region: "Northern Territory",
			postcode: "0800",
		},
	},
	"/locations/casuarina": {
		title: "SEO Agency Casuarina | Local SEO & Websites | GT Marketing",
		description:
			"SEO agency support for Casuarina and the northern suburbs: local search, websites and enquiry follow-up, delivered from Darwin City.",
		label: "SEO Agency Casuarina",
		type: "WebPage",
		keywords: [
			"SEO agency Casuarina",
			"SEO Casuarina",
			"local SEO northern suburbs Darwin",
			"web design Casuarina",
			"Casuarina service area",
		],
		location: {
			name: "Casuarina",
			type: "Place",
			region: "Northern Territory",
			postcode: "0810",
		},
	},
	"/locations/palmerston": {
		title: "SEO Palmerston | Local SEO & Websites | GT Marketing",
		description:
			"SEO for Palmerston businesses. Local search, websites and enquiry follow-up for local services, from GT Marketing in Darwin.",
		label: "SEO Palmerston",
		type: "WebPage",
		keywords: [
			"SEO Palmerston",
			"SEO Palmerston NT",
			"local SEO Palmerston",
			"web design Palmerston",
			"Palmerston service area",
		],
		location: {
			name: "Palmerston",
			type: "City",
			region: "Northern Territory",
			postcode: "0830",
		},
	},
	"/locations/top-end": {
		title: "Top End Marketing for Aboriginal & Regional Organisations | GT Marketing",
		description:
			"Darwin-based marketing, websites, funding communications and remote delivery for Aboriginal organisations, community enterprises and regional businesses across the Top End.",
		label: "Top End Remote & Regional Marketing",
		type: "WebPage",
		keywords: [
			"Aboriginal organisation marketing Top End",
			"remote community marketing NT",
			"Aboriginal corporation website",
			"marketing agency Top End",
			"funding communications Northern Territory",
		],
		location: {
			name: "Top End",
			type: "Place",
			region: "Northern Territory",
		},
	},
	"/locations/central-australia": {
		title: "Central Australia Marketing for Aboriginal Organisations | GT Marketing",
		description:
			"Remote marketing, websites, funding communications and digital support for Aboriginal organisations, community enterprises and regional businesses across Central Australia.",
		label: "Central Australia Remote & Regional Marketing",
		type: "WebPage",
		keywords: [
			"Aboriginal organisation marketing Central Australia",
			"Aboriginal corporation website Alice Springs",
			"remote community marketing Central Australia",
			"funding communications NT",
			"marketing Central Australia",
		],
		location: {
			name: "Central Australia",
			type: "Place",
			region: "Northern Territory",
		},
	},
	"/the-vault": {
		title: "The Vault | Marketing Articles & Inspiration | GT Marketing",
		description:
			"Explore archived GT Marketing articles and a curated collection of strategy, branding, digital marketing, growth systems, culture and commercial ideas.",
		label: "The Vault",
		type: "CollectionPage",
	},
	"/contact": {
		title: "Contact GT Marketing | Book a Call in Darwin",
		description:
			"Book a call with GT Marketing in Darwin about local SEO, a website, or a lead-generation system for your business.",
		label: "Contact Us",
		type: "ContactPage",
		keywords: [
			"GT Marketing Darwin",
			"marketing agency Darwin",
			"SEO Darwin",
			"book a call Darwin",
			"lead generation Darwin",
		],
	},
	"/privacy": {
		title: "Privacy Policy | GT Marketing",
		description:
			"Read the GT Marketing privacy policy, including how personal information, website analytics, enquiries and marketing communications are handled.",
		label: "Privacy Policy",
		type: "WebPage",
	},
	"/case": {
		title: "Our Work | GT Marketing",
		description: "Explore GT Marketing industry marketing solutions and growth systems.",
		label: "Our Work",
		type: "WebPage",
		index: false,
	},
};

function normalisePath(inputPath: string) {
	const cleanPath = String(inputPath || "/").split(/[?#]/)[0] || "/";
	if (cleanPath === "/ochi-team") return "/about-us";
	if (cleanPath.length > 1) return cleanPath.replace(/\/+$/, "");
	return cleanPath;
}

const TRACKING_PARAMS = ["viewAsMember", "trk", "trackingId", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function cleanSameAsUrl(url: string) {
	try {
		const parsed = new URL(url);
		for (const key of TRACKING_PARAMS) parsed.searchParams.delete(key);
		return parsed.toString();
	} catch {
		return url;
	}
}

function absoluteUrl(url?: string) {
	if (!url) return DEFAULT_IMAGE;
	return url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

function breadcrumbSchema(path: string, page: RouteSEO) {
	if (path === "/") return null;
	const isLocationPage = path.startsWith("/locations/");
	const elements: Array<Record<string, unknown>> = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: SITE_URL,
		},
	];

	if (page.parentLabel && page.parentPath) {
		elements.push({
			"@type": "ListItem",
			position: 2,
			name: page.parentLabel,
			item: `${SITE_URL}${page.parentPath}`,
		});
	} else if (isLocationPage) {
		elements.push({
			"@type": "ListItem",
			position: 2,
			name: "Services",
			item: `${SITE_URL}/services`,
		});
	}

	elements.push({
		"@type": "ListItem",
		position: page.parentPath || isLocationPage ? 3 : 2,
		name: page.label,
		item: `${SITE_URL}${path}`,
	});

	return {
		"@type": "BreadcrumbList",
		"@id": `${SITE_URL}${path}#breadcrumb`,
		itemListElement: elements,
	};
}

export default function SiteSEO({ path: rawPath }: { path: string }) {
	const path = normalisePath(rawPath);
	const route = ROUTES[path];
	const isKnownPage = Boolean(route);
	const page: RouteSEO = route ?? {
		title: "Page Not Found | GT Marketing",
		description: "The requested page could not be found on the GT Marketing website.",
		label: "Page Not Found",
		type: "WebPage",
		index: false,
	};
	const canonicalPath = path === "/case" ? "/presentation" : path;
	const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
	const image = absoluteUrl(page.image);
	const shouldIndex = isKnownPage && page.index !== false;
	const isArticle = page.type === "Article";

	const address = {
		"@type": "PostalAddress",
		streetAddress: "130 Smith Street",
		addressLocality: "Darwin City",
		addressRegion: "NT",
		postalCode: "0800",
		addressCountry: "AU",
	};

	const offerCatalog = {
		"@type": "OfferCatalog",
		name: "Marketing services",
		itemListElement: SERVICES.map((service) => ({
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name: service,
				provider: { "@id": `${SITE_URL}/#business` },
				areaServed: LOCAL_SERVICE_AREAS,
			},
		})),
	};

	const businessSchema = {
		"@type": ["ProfessionalService", "LocalBusiness"],
		"@id": `${SITE_URL}/#business`,
		name: site.brandName,
		alternateName: ["GT Marketing Darwin", "GT Marketing Northern Territory"],
		url: SITE_URL,
		logo: `${SITE_URL}${site.logo}`,
		image: DEFAULT_IMAGE,
		description:
			"GT Marketing is a Darwin-based marketing agency supporting Aboriginal corporations, community-controlled organisations and regional businesses with websites, digital communications, funding communications, marketing systems and remote delivery across the Northern Territory and Australia.",
		email: site.email,
		telephone: site.phoneTel,
		taxID: "24280902425",
		address,
		geo: {
			"@type": "GeoCoordinates",
			latitude: -12.4569014,
			longitude: 130.8356565,
		},
		hasMap: site.addressUrl,
		areaServed: LOCAL_SERVICE_AREAS,
		sameAs: site.socialLinks.map((item) => cleanSameAsUrl(item.url)),
		knowsAbout: [
			...SERVICES,
			"Marketing agency Darwin",
			"Digital marketing agency Darwin",
			"SEO Darwin",
			"Websites for tradies",
			"Hospitality marketing",
			"NDIS provider marketing",
			"Professional services marketing",
			"Northern Territory small business marketing",
			"Marketing for Aboriginal organisations",
			"Aboriginal corporation websites",
			"Remote community digital communications",
			"Funding applications and reporting communications",
			"Cultural intellectual property aware marketing",
			"Low-bandwidth website delivery",
		],
		hasOfferCatalog: offerCatalog,
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "sales and customer enquiries",
			telephone: site.phoneTel,
			email: site.email,
			areaServed: ["Darwin", "Palmerston", "Casuarina", "Top End", "Central Australia", "Northern Territory", "Australia"],
			availableLanguage: ["English"],
		},
	};

	const websiteSchema = {
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		url: SITE_URL,
		name: site.brandName,
		alternateName: "GT Marketing Darwin",
		description: ROUTES["/"].description,
		publisher: { "@id": `${SITE_URL}/#business` },
		inLanguage: "en-AU",
	};

	const pageSchema: Record<string, unknown> = {
		"@type": page.type,
		"@id": `${canonicalUrl}#webpage`,
		url: canonicalUrl,
		name: page.title,
		description: page.description,
		isPartOf: { "@id": `${SITE_URL}/#website` },
		about: { "@id": `${SITE_URL}/#business` },
		publisher: { "@id": `${SITE_URL}/#business` },
		primaryImageOfPage: {
			"@type": "ImageObject",
			url: image,
		},
		inLanguage: "en-AU",
	};

	if (isArticle) {
		pageSchema.headline = page.title;
		pageSchema.image = [image];
		pageSchema.datePublished = page.publishedDate;
		pageSchema.dateModified = page.modifiedDate ?? page.publishedDate;
		pageSchema.author = {
			"@type": "Organization",
			"@id": `${SITE_URL}/#business`,
			name: site.brandName,
		};
		pageSchema.mainEntityOfPage = { "@id": `${canonicalUrl}#webpage` };
		pageSchema.keywords = page.keywords?.join(", ");
	}

	const localServiceSchema: Record<string, unknown> | null = page.location
		? {
				"@type": "Service",
				"@id": `${canonicalUrl}#local-marketing-service`,
				name: page.label,
				description: page.description,
				serviceType: "Marketing, websites, digital communications, funding communications and lead generation",
				provider: { "@id": `${SITE_URL}/#business` },
				url: canonicalUrl,
				areaServed: page.location.postcode
					? {
							"@type": page.location.type,
							name: `${page.location.name}, ${page.location.region}`,
							address: {
								"@type": "PostalAddress",
								addressLocality: page.location.name,
								addressRegion: "NT",
								postalCode: page.location.postcode,
								addressCountry: "AU",
							},
						}
					: {
							"@type": page.location.type,
							name: `${page.location.name}, ${page.location.region}`,
						},
				audience: {
					"@type": "BusinessAudience",
					audienceType: `Aboriginal organisations, community enterprises, businesses and service organisations in ${page.location.name} and the Northern Territory`,
				},
			}
		: null;

	const brandKitServiceSchema: Record<string, unknown> | null = path === "/brand-kit"
		? {
				"@type": "Service",
				"@id": `${SITE_URL}/brand-kit#service`,
				name: "Brand kit design and brand guidelines",
				description: page.description,
				serviceType: "Brand kit design, brand guidelines and identity systems",
				provider: { "@id": `${SITE_URL}/#business` },
				url: canonicalUrl,
				areaServed: LOCAL_SERVICE_AREAS,
				audience: {
					"@type": "BusinessAudience",
					audienceType: "Small and medium businesses in Darwin and the Northern Territory",
				},
			}
		: null;

	const dedicatedServiceCopy: Record<string, { name: string; serviceType: string }> = {
		"/aboriginal-organisations": {
			name: "Marketing support for Aboriginal organisations",
			serviceType: "Marketing, websites, digital communications, funding communications and remote delivery for Aboriginal organisations",
		},
		"/seo-darwin": {
			name: "SEO in Darwin",
			serviceType: "Local SEO and search engine optimisation",
		},
		"/google-ads-darwin": {
			name: "Google Ads management in Darwin",
			serviceType: "Google Ads and pay-per-click management",
		},
		"/web-design-darwin": {
			name: "Web design in Darwin",
			serviceType: "Website design and development",
		},
		"/cafe-marketing": {
			name: "Cafe and hospitality marketing in Darwin",
			serviceType: "Cafe, coffee shop and hospitality marketing",
		},
		"/real-estate-marketing": {
			name: "Real estate marketing for Darwin and Palmerston agents",
			serviceType: "Real estate marketing and lead generation",
		},
	};
	const dedicatedService = dedicatedServiceCopy[path];
	const dedicatedServiceSchema: Record<string, unknown> | null = dedicatedService
		? {
				"@type": "Service",
				"@id": `${canonicalUrl}#service`,
				name: dedicatedService.name,
				description: page.description,
				serviceType: dedicatedService.serviceType,
				provider: { "@id": `${SITE_URL}/#business` },
				url: canonicalUrl,
				areaServed: path === "/aboriginal-organisations"
					? [...LOCAL_SERVICE_AREAS, { "@type": "Country", name: "Australia" }]
					: [
							{ "@type": "City", name: "Darwin" },
							{ "@type": "City", name: "Palmerston" },
							{ "@type": "Place", name: "Casuarina" },
							{ "@type": "AdministrativeArea", name: "Northern Territory" },
						],
				audience: {
					"@type": "BusinessAudience",
					audienceType:
						path === "/aboriginal-organisations"
							? "Aboriginal corporations, community-controlled organisations, art centres, ranger groups, community stores, cultural enterprises and regional organisations"
							: "Small and medium businesses in Darwin, Palmerston, Casuarina and the Northern Territory",
				},
			}
		: null;

	if (page.location && localServiceSchema) {
		pageSchema.mainEntity = { "@id": localServiceSchema["@id"] };
		pageSchema.contentLocation = localServiceSchema.areaServed;
		pageSchema.spatialCoverage = localServiceSchema.areaServed;
	}

	if (brandKitServiceSchema) {
		pageSchema.mainEntity = { "@id": brandKitServiceSchema["@id"] };
	}

	if (dedicatedServiceSchema) {
		pageSchema.mainEntity = { "@id": dedicatedServiceSchema["@id"] };
	}

	const monthlyOfferSchema: Record<string, unknown> | null =
		path === "/marketing-packages-darwin"
			? {
					"@type": "Service",
					"@id": `${canonicalUrl}#service`,
					name: "All Your Marketing. One Simple Monthly Fee.",
					serviceType: "Monthly marketing for Darwin and Northern Territory small businesses",
					description:
						"From $595 + GST a month until the end of November 2026. The $595 is only the management fee. Includes local SEO, Google Business Profile optimisation, website updates, a monthly performance report, lead capture, a monthly growth strategy and action plan, social media content, basic automation and ad campaign guidance. Ad spend is paid separately, directly to Google. There is a 3-month minimum commitment, which is the time it takes to see visible results.",
					provider: { "@id": `${SITE_URL}/#business` },
					url: canonicalUrl,
					areaServed: [
						{ "@type": "City", name: "Darwin" },
						{ "@type": "City", name: "Palmerston" },
						{ "@type": "Place", name: "Casuarina" },
						{ "@type": "AdministrativeArea", name: "Northern Territory" },
					],
					offers: {
						"@type": "Offer",
						name: "All Your Marketing. One Simple Monthly Fee.",
						price: "595",
						priceCurrency: "AUD",
						availability: "https://schema.org/InStock",
						validThrough: "2026-11-30",
						url: canonicalUrl,
						priceSpecification: {
							"@type": "UnitPriceSpecification",
							price: "595",
							priceCurrency: "AUD",
							valueAddedTaxIncluded: false,
							unitText: "MONTH",
							referenceQuantity: {
								"@type": "QuantitativeValue",
								value: "1",
								unitCode: "MON",
							},
						},
					},
				}
			: null;

	if (monthlyOfferSchema) {
		pageSchema.mainEntity = { "@id": monthlyOfferSchema["@id"] };
	}

	const breadcrumb = breadcrumbSchema(canonicalPath, page);
	if (breadcrumb) pageSchema.breadcrumb = { "@id": breadcrumb["@id"] };
	if (path === "/services") pageSchema.mainEntity = offerCatalog;
	if (path === "/contact") pageSchema.mainEntity = { "@id": `${SITE_URL}/#business` };

	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			businessSchema,
			websiteSchema,
			pageSchema,
			...(localServiceSchema ? [localServiceSchema] : []),
			...(brandKitServiceSchema ? [brandKitServiceSchema] : []),
			...(dedicatedServiceSchema ? [dedicatedServiceSchema] : []),
			...(monthlyOfferSchema ? [monthlyOfferSchema] : []),
			...(breadcrumb ? [breadcrumb] : []),
		],
	};

	return (
		<Head>
			<title key="title">{page.title}</title>
			<meta key="description" name="description" content={page.description} />
			<meta key="author" name="author" content="GT Marketing" />
			{page.keywords && <meta key="keywords" name="keywords" content={page.keywords.join(", ")} />}
			<meta key="geo-region" name="geo.region" content="AU-NT" />
			<meta
				key="geo-placename"
				name="geo.placename"
				content={page.location ? `${page.location.name}, Northern Territory` : "Darwin, Northern Territory"}
			/>
			<meta
				key="dc-coverage"
				name="DC.coverage"
				content={page.location ? `${page.location.name}, Northern Territory, Australia` : "Darwin, Palmerston, Casuarina and the Northern Territory"}
			/>
			<meta
				key="robots"
				name="robots"
				content={
					shouldIndex
						? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
						: "noindex,nofollow"
				}
			/>
			<meta
				key="googlebot"
				name="googlebot"
				content={
					shouldIndex
						? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
						: "noindex,nofollow"
				}
			/>
			<link key="canonical" rel="canonical" href={canonicalUrl} />
			<link key="alternate-en-au" rel="alternate" hrefLang="en-AU" href={canonicalUrl} />
			<link key="alternate-default" rel="alternate" hrefLang="x-default" href={canonicalUrl} />

			<meta key="og-locale" property="og:locale" content="en_AU" />
			<meta key="og-type" property="og:type" content={isArticle ? "article" : "website"} />
			<meta key="og-site-name" property="og:site_name" content={site.brandName} />
			<meta key="og-title" property="og:title" content={page.title} />
			<meta key="og-description" property="og:description" content={page.description} />
			<meta key="og-url" property="og:url" content={canonicalUrl} />
			<meta key="og-image" property="og:image" content={image} />
			<meta key="og-image-alt" property="og:image:alt" content={`${page.label} — GT Marketing`} />
			{isArticle && page.publishedDate && (
				<meta key="article-published" property="article:published_time" content={page.publishedDate} />
			)}
			{isArticle && (page.modifiedDate || page.publishedDate) && (
				<meta key="article-modified" property="article:modified_time" content={page.modifiedDate ?? page.publishedDate} />
			)}
			{isArticle && <meta key="article-author" property="article:author" content="GT Marketing" />}

			<meta key="twitter-card" name="twitter:card" content="summary_large_image" />
			<meta key="twitter-title" name="twitter:title" content={page.title} />
			<meta key="twitter-description" name="twitter:description" content={page.description} />
			<meta key="twitter-image" name="twitter:image" content={image} />

			<script
				key="gt-marketing-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
				}}
			/>
		</Head>
	);
}