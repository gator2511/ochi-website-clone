"use client";

import Head from "next/head";
import {
	Capibilyties,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";
import content from "@/content/pages/services.json";

const documentId = "content/pages/services.json";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Head>
				<title>{content.seoTitle}</title>
				<meta name="description" content={content.seoDescription} />
			</Head>
			<div data-sb-object-id={documentId}>
				<Curve backgroundColor="#f1f1f1">
					<Heroservices content={content.hero} />
					<Process content={content.process} />
					<Capibilyties content={content.capabilities} />
					<BrandImageGallery content={content.gallery} fieldPath="gallery" />
					<Archive content={content.archive} />
					<Expectations content={content.expectations} />
					<Ready />
				</Curve>
			</div>
		</>
	);
}
