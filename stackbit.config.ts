import { GitContentSource } from "@stackbit/cms-git";
import { defineStackbitConfig } from "@stackbit/types";

const sharedPageFields = [
	{ name: "title", type: "string" as const, required: true },
	{ name: "navigationLabel", type: "string" as const, required: true },
	{ name: "seoTitle", type: "string" as const, required: true },
	{ name: "seoDescription", type: "text" as const, required: true },
	{ name: "heroHeading", type: "string" as const, required: true },
	{ name: "summary", type: "text" as const, required: false },
];

export default defineStackbitConfig({
	stackbitVersion: "~0.6.0",
	contentSources: [
		new GitContentSource({
			rootPath: __dirname,
			contentDirs: ["content"],
			models: [
				{
					name: "HomePage",
					type: "page",
					urlPath: "/",
					filePath: "content/pages/home.json",
					fields: sharedPageFields,
				},
				{
					name: "ServicesPage",
					type: "page",
					urlPath: "/services",
					filePath: "content/pages/services.json",
					fields: sharedPageFields,
				},
				{
					name: "WorkPage",
					type: "page",
					urlPath: "/presentation",
					filePath: "content/pages/work.json",
					fields: sharedPageFields,
				},
				{
					name: "AboutPage",
					type: "page",
					urlPath: "/ochi-team",
					filePath: "content/pages/about.json",
					fields: sharedPageFields,
				},
				{
					name: "InsightsPage",
					type: "page",
					urlPath: "/insights",
					filePath: "content/pages/insights.json",
					fields: sharedPageFields,
				},
				{
					name: "ContactPage",
					type: "page",
					urlPath: "/contact",
					filePath: "content/pages/contact.json",
					fields: sharedPageFields,
				},
				{
					name: "PrivacyPage",
					type: "page",
					urlPath: "/privacy",
					filePath: "content/pages/privacy.json",
					fields: sharedPageFields,
				},
			],
			assetsConfig: {
				referenceType: "static",
				staticDir: "public",
				uploadDir: "images",
				publicPath: "/",
			},
		}),
	],
});
