"use client";

import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";
import { Heropresentation, Projectspresentation, Publication } from "@/container";
import content from "@/content/pages/work.json";

const documentId = "content/pages/work.json";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<Heropresentation content={content.hero} />
				<Projectspresentation intro={content.intro} projects={content.projects} />
				<BrandImageGallery content={content.gallery} fieldPath="gallery" />
				<Publication content={content.publication} />
				<Ready />
			</Curve>
		</div>
	);
}
