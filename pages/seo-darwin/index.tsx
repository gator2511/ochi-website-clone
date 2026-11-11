"use client";

import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import FreeSeoAuditCta from "@/components/FreeSeoAuditCta";
import ServiceLanding from "@/container/service-page/ServiceLanding";
import content from "@/content/pages/seo-darwin.json";

const documentId = "content/pages/seo-darwin.json";

export default function SeoDarwinPage() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor="#f1f1f1">
			<ServiceLanding content={content} documentId={documentId} />
			<FreeSeoAuditCta className="pb-[40px]" />
			<Ready />
		</Curve>
	);
}
