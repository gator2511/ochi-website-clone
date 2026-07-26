import Head from "next/head";

type FAQItem = {
	question: string;
	description: string;
	links?: Array<{ title: string; description: string }>;
};

export default function FAQStructuredData({ items }: { items: FAQItem[] }) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: [item.description, ...(item.links ?? []).map((link) => link.description)].join(" "),
			},
		})),
	};

	return (
		<Head>
			<script
				key="gt-marketing-faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
				}}
			/>
		</Head>
	);
}
