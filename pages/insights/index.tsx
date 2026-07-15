"use client";
import { useEffect } from "react";
import { BrandImageGallery, Curve } from "@/components";
import { Heroinsights, Publicationinsights } from "@/container";

export default function Insights() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroinsights />
				<BrandImageGallery variant="insights" />
				<Publicationinsights />
			</Curve>
		</>
	);
}
