import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

const stringField = (name: string, required = true) => ({ name, type: "string", required });
const textField = (name: string, required = true) => ({ name, type: "text", required });
const imageField = (name: string, required = true) => ({ name, type: "image", required });
const stringList = (name: string) => ({ name, type: "list", items: { type: "string" } });
const textList = (name: string) => ({ name, type: "list", items: { type: "text" } });
const objectField = (name: string, fields: any[]) => ({ name, type: "object", fields });
const objectList = (name: string, fields: any[]) => ({
	name,
	type: "list",
	items: { type: "object", fields },
});

const linkFields = [stringField("label"), stringField("url")];
const imageFields = [imageField("src"), stringField("alt")];
const seoFields = [stringField("seoTitle"), textField("seoDescription")];
const galleryFields = [
	stringField("eyebrow"),
	stringField("title"),
	objectList("images", imageFields),
];
const projectFields = [
	stringField("title"),
	stringField("url"),
	imageField("image"),
	stringField("imageAlt"),
	objectList("tags", linkFields),
];
const publicationFields = [
	stringField("title"),
	imageField("image"),
	stringField("imageAlt"),
	stringField("url", false),
];

const models: any[] = [
	{
		name: "SiteConfig",
		type: "data",
		filePath: "content/data/site.json",
		fields: [
			stringField("brandName"),
			imageField("logo"),
			stringField("logoAlt"),
			objectList("navigation", linkFields),
			objectList("socialLinks", linkFields),
			stringList("addressLines"),
			stringField("addressUrl"),
			stringField("email"),
			textField("acknowledgement"),
			objectField("footerFlags", [
				imageField("image"),
				stringField("alt"),
			]),
			stringField("footerHeading"),
			stringField("footerHeadingAccent"),
			stringField("copyright"),
			stringField("privacyLabel"),
			stringField("websiteCredit"),
			objectField("ready", [
				stringList("headingLines"),
				stringField("primaryLabel"),
				stringField("primaryUrl"),
				stringField("orLabel"),
			]),
		],
	},
	{
		name: "HomePage",
		type: "page",
		urlPath: "/",
		filePath: "content/pages/home.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("headingLine1"),
				stringField("headingAccent"),
				stringField("headingLine3"),
				imageField("accentImage"),
				stringField("accentImageAlt"),
				imageField("badgeImage"),
				stringField("badgeImageAlt"),
				stringField("introLeft"),
				stringField("introRight"),
				stringField("ctaLabel"),
				stringField("ctaUrl"),
				stringField("scrollLabel"),
			]),
			stringField("marqueeText"),
			objectField("about", [
				textField("intro"),
				stringField("expectationLabel"),
				textList("paragraphs"),
				stringField("socialLabel"),
				stringField("approachHeading"),
				stringField("approachCtaLabel"),
				stringField("approachCtaUrl"),
				imageField("approachImage"),
				stringField("approachImageAlt"),
			]),
			objectField("gallery", galleryFields),
			objectField("video", [stringField("src")]),
			objectField("vision", [
				stringField("eyebrow"),
				stringField("title"),
				objectList("items", [
					...imageFields,
					stringField("label"),
					stringField("title"),
				]),
			]),
			objectField("projects", [
				stringField("heading"),
				stringField("ctaLabel"),
				stringField("ctaUrl"),
				objectList("items", projectFields),
			]),
			objectField("reviews", [
				stringField("heading"),
				objectList("items", [
					stringField("website"),
					stringField("url"),
					stringField("serviceLabel"),
					stringField("name"),
					imageField("image"),
					textField("review"),
					objectList("tags", linkFields),
				]),
			]),
		],
	},
	{
		name: "ServicesPage",
		type: "page",
		urlPath: "/services",
		filePath: "content/pages/services.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("heading"),
				imageField("image"),
				stringField("imageAlt"),
				textField("imageCaption"),
				textField("intro"),
				stringField("approachLabel"),
				objectList("approachItems", [stringField("title"), textField("description")]),
			]),
			objectField("process", [
				stringField("heading"),
				objectList("items", [
					stringField("phase"),
					stringField("name"),
					imageField("image"),
					textField("description"),
					stringField("buttonLabel"),
				]),
			]),
			objectField("capabilities", [
				textField("intro"),
				stringField("label"),
				objectList("groups", [stringField("title"), objectList("items", linkFields)]),
				stringField("marketingHeading"),
				objectList("marketingItems", linkFields),
			]),
			objectField("gallery", galleryFields),
			objectField("archive", [
				stringField("heading"),
				imageField("image"),
				stringField("imageAlt"),
				objectList("stats", [stringField("value"), stringField("label")]),
			]),
			objectField("expectations", [
				stringField("marquee"),
				stringField("heading"),
				objectList("items", [
					stringField("number"),
					stringField("title"),
					stringField("buttonLabel"),
					textField("description"),
				]),
			]),
		],
	},
	{
		name: "WorkPage",
		type: "page",
		urlPath: "/presentation",
		filePath: "content/pages/work.json",
		fields: [
			...seoFields,
			objectField("hero", [stringField("heading"), stringField("count")]),
			textField("intro"),
			objectList("projects", projectFields),
			objectField("gallery", galleryFields),
			objectField("publication", [
				stringField("marquee"),
				stringField("heading"),
				objectList("items", publicationFields),
			]),
		],
	},
	{
		name: "CasePage",
		type: "page",
		urlPath: "/case",
		filePath: "content/pages/case.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("heading"),
				imageField("accentImage"),
				stringField("accentImageAlt"),
				stringField("descriptionLabel"),
				textField("description"),
				objectList("tags", linkFields),
				imageField("mainImage"),
				stringField("mainImageAlt"),
			]),
			objectField("company", [
				stringField("heading"),
				stringField("label"),
				textField("description"),
				objectList("details", [stringField("label"), stringField("value")]),
				imageField("image"),
				stringField("imageAlt"),
			]),
			objectField("challenge", [
				stringField("heading"),
				stringField("label"),
				textField("description"),
				objectList("images", imageFields),
			]),
			objectField("video", [stringField("src")]),
			objectField("result", [
				stringField("heading"),
				stringField("label"),
				stringField("feedbackLabel"),
				textField("feedback"),
				stringField("resultLabel"),
				textField("result"),
			]),
			objectField("credit", [
				stringField("heading"),
				stringField("label"),
				objectList("items", [stringField("label"), textField("value")]),
			]),
			objectField("related", [
				stringField("marquee"),
				objectList("projects", projectFields),
				stringField("ctaLabel"),
				stringField("ctaUrl"),
			]),
		],
	},
	{
		name: "AboutPage",
		type: "page",
		urlPath: "/ochi-team",
		filePath: "content/pages/about.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("headingLine1"),
				stringField("headingLine2"),
				imageField("image"),
				stringField("imageAlt"),
				stringField("sectionLabel"),
				textList("paragraphs"),
			]),
			objectField("gallery", galleryFields),
		],
	},
	{
		name: "InsightsPage",
		type: "page",
		urlPath: "/insights",
		filePath: "content/pages/insights.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("heading"),
				stringField("latestLabel"),
				objectList("filters", linkFields),
				objectList("articles", [
					stringField("title"),
					stringField("url"),
					imageField("image"),
					stringField("imageAlt"),
					stringField("author"),
					stringField("date"),
					stringList("tags"),
				]),
			]),
			objectField("gallery", galleryFields),
			objectField("publication", [
				stringField("marquee"),
				stringField("heading"),
				objectList("items", publicationFields),
			]),
		],
	},
	{
		name: "ContactPage",
		type: "page",
		urlPath: "/contact",
		filePath: "content/pages/contact.json",
		fields: [
			...seoFields,
			objectField("hero", [
				stringField("headingLine1"),
				stringField("headingLine2"),
				imageField("image"),
				stringField("imageAlt"),
				stringField("formIntro"),
			]),
			objectField("form", [
				...[
					"nameLabel", "namePlaceholder", "companyLabel", "companyPlaceholder",
					"goalLabel", "goalPlaceholder", "deadlineLabel", "deadlinePlaceholder",
					"budgetLabel", "budgetPlaceholder", "emailLabel", "emailPlaceholder",
					"emailSuffix", "detailsLabel", "detailsPlaceholder", "consentLabel",
					"privacyLabel", "submitLabel", "sendingLabel", "successHeading",
				].map((name) => stringField(name)),
				textField("successMessage"),
				textField("errorFallback"),
			]),
			objectField("gallery", galleryFields),
			objectField("socials", [stringList("headingLines"), stringField("contactLabel")]),
			objectField("faq", [
				stringField("heading"),
				objectList("items", [
					stringField("question"),
					stringField("title"),
					textField("description"),
					stringField("buttonLabel"),
					objectList("links", [stringField("title"), textField("description")]),
				]),
			]),
		],
	},
	{
		name: "PrivacyPage",
		type: "page",
		urlPath: "/privacy",
		filePath: "content/pages/privacy.json",
		fields: [
			...seoFields,
			stringField("eyebrow"),
			stringList("headingLines"),
			textField("summary"),
			stringField("effectiveDate"),
			stringField("contactLabel"),
			objectList("sections", [
				stringField("number"),
				stringField("title"),
				textList("paragraphs"),
				textList("bullets"),
			]),
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
