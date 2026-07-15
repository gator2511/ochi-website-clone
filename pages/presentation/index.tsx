"use client";
import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heropresentation />
				<Projectspresentation />
				<BrandImageGallery variant="work" />
				<Publication />
				<Ready />
			</Curve>
		</>
	);
}
