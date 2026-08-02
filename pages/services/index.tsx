"use client";

import {
	Capibilyties,
	CommercialClarity,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
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
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<Heroservices content={content.hero} />
				<Process content={content.process} />
				<Capibilyties content={content.capabilities} />
				<CommercialClarity content={content.commercialClarity} />
				<Archive content={content.archive} />
				<Expectations content={content.expectations} />
				<Ready />
			</Curve>
		</div>
	);
}
