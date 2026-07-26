"use client";

import { Heroabout } from "@/container";
import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";
import content from "@/content/pages/about.json";

const documentId = "content/pages/about.json";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<Heroabout content={content.hero} />
				<BrandImageGallery content={content.gallery} fieldPath="gallery" />
				<Ready />
			</Curve>
		</div>
	);
}
