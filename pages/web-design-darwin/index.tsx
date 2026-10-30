"use client";

import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import ServiceLanding from "@/container/service-page/ServiceLanding";
import content from "@/content/pages/web-design-darwin.json";

const documentId = "content/pages/web-design-darwin.json";

export default function WebDesignDarwinPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<ServiceLanding content={content} documentId={documentId} />
			<Ready />
		</Curve>
	);
}
