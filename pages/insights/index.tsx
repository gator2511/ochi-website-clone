"use client";

import { useEffect } from "react";
import { Curve } from "@/components";
import InsightsBlogFeature from "@/components/InsightsBlogFeature";
import { Heroinsights, Publicationinsights } from "@/container";
import content from "@/content/pages/insights.json";

const documentId = "content/pages/insights.json";

export default function Insights() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<Heroinsights content={content.hero} />
				<InsightsBlogFeature content={content.featuredBlog} />
				<Publicationinsights content={content.publication} />
			</Curve>
		</div>
	);
}
