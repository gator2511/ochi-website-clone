import Head from "next/head";
import site from "@/content/data/site.json";

const SITE_URL = "https://gtmarketing.io";
const DEFAULT_IMAGE = `${SITE_URL}/contacthhero.jpg`;

const SERVICES = [
	"Marketing strategy",
	"Search engine optimisation",
	"Local SEO",
	"Social media marketing",
	"Direct-to-consumer marketing",
	"Website development",
	"Web hosting",
	"Email and direct marketing",
	"Marketing automation",
	"Analytics and conversion optimisation",
];

type PageType =
	| "WebPage"
	| "AboutPage"
	| "ContactPage"
	| "CollectionPage"
	| "ProfilePage"
	| "Article";

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
};

const ROUTES: Record<string, RouteSEO> = {
	"/": {
		title: "Marketing Agency Darwin | SEO & Web | GT Marketing",
		description:
			"GT Marketing is a Darwin marketing agency delivering strategy, SEO, social media, websites, automation and lead generation for Australian businesses.",
		label: "Home",
		type: "WebPage",
	},
	"/services": {
		title: "SEO, Social Media & Web Services Darwin | GT Marketing",
		description:
			"Explore GT Marketing services across marketing strategy, SEO, social media, websites, hosting, email outreach, automation and conversion optimisation.",
		label: "Services",
		type: "WebPage",
		image:
			"https://images.pexels.com/photos/36835822/pexels-photo-36835822.jpeg?auto=compress&cs=tinysrgb&w=2000",
	},
	"/presentation": {
		title: "Industry Marketing Solutions Australia | GT Marketing",
		description:
			"Explore marketing systems designed for tradies, hospitality, NDIS providers, SMEs, agriculture, finance, real estate, security and events.",
		label: "Our Work",
		type: "CollectionPage",
	},
	"/about-us": {
		title: "About GT Marketing | Darwin Marketing Agency",
		description:
			"Learn how GT Marketing combines strategy, creative execution, technology and commercial measurement to help Australian businesses grow.",
		label: "About Us",
		type: "AboutPage",
	},
	"/insights": {
		title: "Marketing Insights & Growth Strategy | GT Marketing",
		description:
			"Read practical GT Marketing insights on brand strategy, digital marketing, local SEO, social media, websites and sustainable business growth.",
		label: "Insights",
		type: "CollectionPage",
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
		modifiedDate: "2026-07-26",
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
			"A practical local SEO checklist for Darwin and Palmerston businesses looking to rank higher on Google and attract more local customers.",
		label: "Local SEO Checklist for Darwin and Palmerston Businesses",
		type: "Article",
		image:
			"https://static.wixstatic.com/media/873fa1_507866ba6fa8409583cf3181c43ddd5a~mv2.jpg",
		publishedDate: "2026-07-26",
		modifiedDate: "2026-07-26",
		keywords: [
			"local SEO Darwin",
			"SEO Palmerston",
			"Northern Territory SEO",
			"local SEO checklist",
			"Google Business Profile Darwin",
		],
	},
	"/the-vault": {
		title: "The Vault | Marketing Ideas & Inspiration | GT Marketing",
		description:
			"Explore The Vault, GT Marketing's curated archive of strategy, branding, digital marketing, growth systems, culture and commercial ideas.",
		label: "The Vault",
		type: "CollectionPage",
	},
	"/contact": {
		title: "Contact GT Marketing | Darwin Marketing Agency",
		description:
			"Contact GT Marketing in Darwin to discuss marketing strategy, SEO, social media, website development, automation and lead generation.",
		label: "Contact Us",
		type: "ContactPage",
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

function absoluteUrl(url?: string) {
	if (!url) return DEFAULT_IMAGE;
	return url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

function breadcrumbSchema(path: string, label: string) {
	if (path === "/") return null;
	const isBlogArticle = path.startsWith("/blog/");
	const elements: Array<Record<string, unknown>> = [
		{
			"@type": "ListItem",
			position: 1,
			name: "Home",
			item: SITE_URL,
		},
	];

	if (isBlogArticle) {
		elements.push({
			"@type": "ListItem",
			position: 2,
			name: "Insights",
			item: `${SITE_URL}/insights`,
		});
	}

	elements.push({
		"@type": "ListItem",
		position: isBlogArticle ? 3 : 2,
		name: label,
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
	const page = route ?? {
		title: "Page Not Found | GT Marketing",
		description: "The requested page could not be found on the GT Marketing website.",
		label: "Page Not Found",
		type: "WebPage" as PageType,
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
				areaServed: { "@type": "Country", name: "Australia" },
			},
		})),
	};

	const businessSchema = {
		"@type": "ProfessionalService",
		"@id": `${SITE_URL}/#business`,
		name: site.brandName,
		alternateName: "GT Marketing Darwin",
		url: SITE_URL,
		logo: `${SITE_URL}${site.logo}`,
		image: DEFAULT_IMAGE,
		description:
			"Australian marketing agency providing strategy, SEO, social media marketing, website development, automation, outreach and performance optimisation.",
		email: site.email,
		taxID: "24280902425",
		address,
		areaServed: [
			{ "@type": "City", name: "Darwin" },
			{ "@type": "City", name: "Palmerston" },
			{ "@type": "AdministrativeArea", name: "Northern Territory" },
			{ "@type": "Country", name: "Australia" },
		],
		sameAs: site.socialLinks.map((item) => item.url),
		knowsAbout: SERVICES,
		hasOfferCatalog: offerCatalog,
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "sales and customer enquiries",
			email: site.email,
			areaServed: "AU",
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

	const breadcrumb = breadcrumbSchema(canonicalPath, page.label);
	if (breadcrumb) pageSchema.breadcrumb = { "@id": breadcrumb["@id"] };
	if (path === "/services") pageSchema.mainEntity = offerCatalog;
	if (path === "/contact") pageSchema.mainEntity = { "@id": `${SITE_URL}/#business` };

	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [businessSchema, websiteSchema, pageSchema, ...(breadcrumb ? [breadcrumb] : [])],
	};

	return (
		<Head>
			<title key="title">{page.title}</title>
			<meta key="description" name="description" content={page.description} />
			<meta key="author" name="author" content="GT Marketing" />
			{page.keywords && <meta key="keywords" name="keywords" content={page.keywords.join(", ")} />}
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
