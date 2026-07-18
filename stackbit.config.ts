import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

const linkFields = [
	{ name: "label", type: "string", required: true },
	{ name: "url", type: "string", required: true },
];

const imageFields = [
	{ name: "src", type: "image", required: true },
	{ name: "alt", type: "string", required: true },
];

const galleryFields = [
	{ name: "eyebrow", type: "string", required: true },
	{ name: "title", type: "string", required: true },
	{
		name: "images",
		type: "list",
		required: true,
		items: { type: "object", fields: imageFields },
	},
];

const projectFields = [
	{ name: "title", type: "string", required: true },
	{ name: "url", type: "string", required: true },
	{ name: "image", type: "image", required: true },
	{ name: "imageAlt", type: "string", required: true },
	{
		name: "tags",
		type: "list",
		items: { type: "object", fields: linkFields },
	},
];

const publicationFields = [
	{ name: "title", type: "string", required: true },
	{ name: "image", type: "image", required: true },
	{ name: "imageAlt", type: "string", required: true },
	{ name: "url", type: "string", required: false },
];

const commonSeoFields = [
	{ name: "seoTitle", type: "string", required: true },
	{ name: "seoDescription", type: "text", required: true },
];

const models: any[] = [
	{
		name: "SiteConfig",
		type: "data",
		filePath: "content/data/site.json",
		fields: [
			{ name: "brandName", type: "string", required: true },
			{ name: "logo", type: "image", required: true },
			{ name: "logoAlt", type: "string", required: true },
			{
				name: "navigation",
				type: "list",
				required: true,
				items: { type: "object", fields: linkFields },
			},
			{
				name: "socialLinks",
				type: "list",
				required: true,
				items: { type: "object", fields: linkFields },
			},
			{
				name: "addressLines",
				type: "list",
				required: true,
				items: { type: "string" },
			},
			{ name: "addressUrl", type: "string", required: true },
			{ name: "email", type: "string", required: true },
			{ name: "footerHeading", type: "string", required: true },
			{ name: "footerHeadingAccent", type: "string", required: true },
			{ name: "copyright", type: "string", required: true },
			{ name: "privacyLabel", type: "string", required: true },
			{ name: "websiteCredit", type: "string", required: true },
			{
				name: "ready",
				type: "object",
				fields: [
					{
						name: "headingLines",
						type: "list",
						items: { type: "string" },
					},
					{ name: "primaryLabel", type: "string", required: true },
					{ name: "primaryUrl", type: "string", required: true },
					{ name: "orLabel", type: "string", required: true },
				],
			},
		],
	},
	{
		name: "HomePage",
		type: "page",
		urlPath: "/",
		filePath: "content/pages/home.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "headingLine1", type: "string", required: true },
					{ name: "headingAccent", type: "string", required: true },
					{ name: "headingLine3", type: "string", required: true },
					{ name: "accentImage", type: "image", required: true },
					{ name: "accentImageAlt", type: "string", required: true },
					{ name: "badgeImage", type: "image", required: true },
					{ name: "badgeImageAlt", type: "string", required: true },
					{ name: "introLeft", type: "string", required: true },
					{ name: "introRight", type: "string", required: true },
					{ name: "ctaLabel", type: "string", required: true },
					{ name: "ctaUrl", type: "string", required: true },
					{ name: "scrollLabel", type: "string", required: true },
				],
			},
			{ name: "marqueeText", type: "string", required: true },
			{
				name: "about",
				type: "object",
				fields: [
					{ name: "intro", type: "text", required: true },
					{ name: "expectationLabel", type: "string", required: true },
					{
						name: "paragraphs",
						type: "list",
						items: { type: "text" },
					},
					{ name: "socialLabel", type: "string", required: true },
					{ name: "approachHeading", type: "string", required: true },
					{ name: "approachCtaLabel", type: "string", required: true },
					{ name: "approachCtaUrl", type: "string", required: true },
					{ name: "approachImage", type: "image", required: true },
					{ name: "approachImageAlt", type: "string", required: true },
				],
			},
			{ name: "gallery", type: "object", fields: galleryFields },
			{
				name: "video",
				type: "object",
				fields: [{ name: "src", type: "string", required: true }],
			},
			{
				name: "vision",
				type: "object",
				fields: [
					{ name: "eyebrow", type: "string", required: true },
					{ name: "title", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: {
							type: "object",
							fields: [
								...imageFields,
								{ name: "label", type: "string", required: true },
								{ name: "title", type: "string", required: true },
							],
						},
					},
				],
			},
			{
				name: "projects",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{ name: "ctaLabel", type: "string", required: true },
					{ name: "ctaUrl", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: { type: "object", fields: projectFields },
					},
				],
			},
			{
				name: "reviews",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "website", type: "string", required: true },
								{ name: "url", type: "string", required: true },
								{ name: "serviceLabel", type: "string", required: true },
								{ name: "name", type: "string", required: true },
								{ name: "image", type: "image", required: true },
								{ name: "review", type: "text", required: true },
								{
									name: "tags",
									type: "list",
									items: { type: "object", fields: linkFields },
								},
							],
						},
					},
				],
			},
		],
	},
	{
		name: "ServicesPage",
		type: "page",
		urlPath: "/services",
		filePath: "content/pages/services.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{ name: "image", type: "image", required: true },
					{ name: "imageAlt", type: "string", required: true },
					{ name: "imageCaption", type: "text", required: true },
					{ name: "intro", type: "text", required: true },
					{ name: "approachLabel", type: "string", required: true },
					{
						name: "approachItems",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "title", type: "string", required: true },
								{ name: "description", type: "text", required: true },
							],
						},
					},
				],
			},
			{
				name: "process",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "phase", type: "string", required: true },
								{ name: "name", type: "string", required: true },
								{ name: "image", type: "image", required: true },
								{ name: "description", type: "text", required: true },
								{ name: "buttonLabel", type: "string", required: true },
							],
						},
					},
				],
			},
			{
				name: "capabilities",
				type: "object",
				fields: [
					{ name: "intro", type: "text", required: true },
					{ name: "label", type: "string", required: true },
					{
						name: "groups",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "title", type: "string", required: true },
								{
									name: "items",
									type: "list",
									items: { type: "object", fields: linkFields },
								},
							],
						},
					},
					{ name: "marketingHeading", type: "string", required: true },
					{
						name: "marketingItems",
						type: "list",
						items: { type: "object", fields: linkFields },
					},
				],
			},
			{ name: "gallery", type: "object", fields: galleryFields },
			{
				name: "archive",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{ name: "image", type: "image", required: true },
					{ name: "imageAlt", type: "string", required: true },
					{
						name: "stats",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "value", type: "string", required: true },
								{ name: "label", type: "string", required: true },
							],
						},
					},
				],
			},
			{
				name: "expectations",
				type: "object",
				fields: [
					{ name: "marquee", type: "string", required: true },
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "number", type: "string", required: true },
								{ name: "title", type: "string", required: true },
								{ name: "buttonLabel", type: "string", required: true },
								{ name: "description", type: "text", required: true },
							],
						},
					},
				],
			},
		],
	},
	{
		name: "WorkPage",
		type: "page",
		urlPath: "/presentation",
		filePath: "content/pages/work.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{ name: "count", type: "string", required: true },
				],
			},
			{ name: "intro", type: "text", required: true },
			{
				name: "projects",
				type: "list",
				items: { type: "object", fields: projectFields },
			},
			{ name: "gallery", type: "object", fields: galleryFields },
			{
				name: "publication",
				type: "object",
				fields: [
					{ name: "marquee", type: "string", required: true },
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: { type: "object", fields: publicationFields },
					},
				],
			},
		],
	},
	{
		name: "AboutPage",
		type: "page",
		urlPath: "/ochi-team",
		filePath: "content/pages/about.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "headingLine1", type: "string", required: true },
					{ name: "headingLine2", type: "string", required: true },
					{ name: "image", type: "image", required: true },
					{ name: "imageAlt", type: "string", required: true },
					{ name: "sectionLabel", type: "string", required: true },
					{
						name: "paragraphs",
						type: "list",
						items: { type: "text" },
					},
				],
			},
			{ name: "gallery", type: "object", fields: galleryFields },
		],
	},
	{
		name: "InsightsPage",
		type: "page",
		urlPath: "/insights",
		filePath: "content/pages/insights.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{ name: "latestLabel", type: "string", required: true },
					{
						name: "filters",
						type: "list",
						items: { type: "object", fields: linkFields },
					},
					{
						name: "articles",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "title", type: "string", required: true },
								{ name: "url", type: "string", required: true },
								{ name: "image", type: "image", required: true },
								{ name: "imageAlt", type: "string", required: true },
								{ name: "author", type: "string", required: true },
								{ name: "date", type: "string", required: true },
								{
									name: "tags",
									type: "list",
									items: { type: "string" },
								},
							],
						},
					},
				],
			},
			{ name: "gallery", type: "object", fields: galleryFields },
			{
				name: "publication",
				type: "object",
				fields: [
					{ name: "marquee", type: "string", required: true },
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: { type: "object", fields: publicationFields },
					},
				],
			},
		],
	},
	{
		name: "ContactPage",
		type: "page",
		urlPath: "/contact",
		filePath: "content/pages/contact.json",
		fields: [
			...commonSeoFields,
			{
				name: "hero",
				type: "object",
				fields: [
					{ name: "headingLine1", type: "string", required: true },
					{ name: "headingLine2", type: "string", required: true },
					{ name: "image", type: "image", required: true },
					{ name: "imageAlt", type: "string", required: true },
					{ name: "formIntro", type: "string", required: true },
				],
			},
			{
				name: "form",
				type: "object",
				fields: [
					{ name: "nameLabel", type: "string", required: true },
					{ name: "namePlaceholder", type: "string", required: true },
					{ name: "companyLabel", type: "string", required: true },
					{ name: "companyPlaceholder", type: "string", required: true },
					{ name: "goalLabel", type: "string", required: true },
					{ name: "goalPlaceholder", type: "string", required: true },
					{ name: "deadlineLabel", type: "string", required: true },
					{ name: "deadlinePlaceholder", type: "string", required: true },
					{ name: "budgetLabel", type: "string", required: true },
					{ name: "budgetPlaceholder", type: "string", required: true },
					{ name: "emailLabel", type: "string", required: true },
					{ name: "emailPlaceholder", type: "string", required: true },
					{ name: "emailSuffix", type: "string", required: true },
					{ name: "detailsLabel", type: "string", required: true },
					{ name: "detailsPlaceholder", type: "string", required: true },
					{ name: "consentLabel", type: "string", required: true },
					{ name: "privacyLabel", type: "string", required: true },
					{ name: "submitLabel", type: "string", required: true },
					{ name: "sendingLabel", type: "string", required: true },
					{ name: "successHeading", type: "string", required: true },
					{ name: "successMessage", type: "text", required: true },
					{ name: "errorFallback", type: "text", required: true },
				],
			},
			{ name: "gallery", type: "object", fields: galleryFields },
			{
				name: "socials",
				type: "object",
				fields: [
					{
						name: "headingLines",
						type: "list",
						items: { type: "string" },
					},
					{ name: "contactLabel", type: "string", required: true },
				],
			},
			{
				name: "faq",
				type: "object",
				fields: [
					{ name: "heading", type: "string", required: true },
					{
						name: "items",
						type: "list",
						items: {
							type: "object",
							fields: [
								{ name: "question", type: "string", required: true },
								{ name: "title", type: "string", required: true },
								{ name: "description", type: "text", required: true },
								{ name: "buttonLabel", type: "string", required: true },
								{
									name: "links",
									type: "list",
									items: {
										type: "object",
										fields: [
											{ name: "title", type: "string", required: true },
											{ name: "description", type: "text", required: true },
										],
									},
								},
							],
						},
					},
				],
			},
		],
	},
	{
		name: "PrivacyPage",
		type: "page",
		urlPath: "/privacy",
		filePath: "content/pages/privacy.json",
		fields: [
			...commonSeoFields,
			{ name: "eyebrow", type: "string", required: true },
			{
				name: "headingLines",
				type: "list",
				items: { type: "string" },
			},
			{ name: "summary", type: "text", required: true },
			{ name: "effectiveDate", type: "string", required: true },
			{ name: "contactLabel", type: "string", required: true },
			{
				name: "sections",
				type: "list",
				items: {
					type: "object",
					fields: [
						{ name: "number", type: "string", required: true },
						{ name: "title", type: "string", required: true },
						{
							name: "paragraphs",
							type: "list",
							items: { type: "text" },
						},
						{
							name: "bullets",
							type: "list",
							items: { type: "text" },
						},
					],
				},
			},
		],
	},
];

export default defineStackbitConfig({
	stackbitVersion: "~0.6.0",
	ssgName: "nextjs",
	nodeVersion: "20",
	contentSources: [
		new GitContentSource({
			rootPath: __dirname,
			contentDirs: ["content"],
			models,
			assetsConfig: {
				referenceType: "static",
				staticDir: "public",
				uploadDir: "images",
				publicPath: "/",
			},
		}),
	],
});
