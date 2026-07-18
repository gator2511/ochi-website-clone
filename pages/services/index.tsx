"use client";
import {
	Capibilyties,
	Expectations,
	Process,
	Archive,
	Heroservices,
} from "@/container";
import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroservices />
				<Process />
				<Capibilyties />
				<BrandImageGallery variant="services" />
				<Archive />
				<Expectations />
				<Ready />
			</Curve>
		</>
	);
}
