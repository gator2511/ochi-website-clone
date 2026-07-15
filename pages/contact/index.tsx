"use client";
import { useEffect } from "react";
import { BrandImageGallery, Curve } from "@/components";
import { Herocontact, Form, FAQ, Socials } from "@/container";

export default function Contact() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Herocontact />
				<Form />
				<BrandImageGallery variant="contact" />
				<Socials />
				<FAQ />
			</Curve>
		</>
	);
}
