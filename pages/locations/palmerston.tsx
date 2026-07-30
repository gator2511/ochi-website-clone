"use client";

import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import LocationLanding from "@/container/location-page/LocationLanding";
import content from "@/content/locations/palmerston.json";

const documentId = "content/locations/palmerston.json";

export default function PalmerstonLocationPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<LocationLanding content={content} documentId={documentId} />
			<Ready />
		</Curve>
	);
}
