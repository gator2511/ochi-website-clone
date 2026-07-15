"use client";
import Head from "next/head";
import { Heroabout } from "@/container";
import { useEffect } from "react";
import { BrandImageGallery, Curve, Ready } from "@/components";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Head>
				<title>About Us | GT Marketing</title>
				<meta
					name="description"
					content="GT Marketing is an NT-based growth agency helping businesses build stronger growth systems through strategy, digital execution, automation, and performance tracking."
				/>
			</Head>
			<Curve backgroundColor="#f1f1f1">
				<Heroabout />
				<BrandImageGallery variant="about" />
				<Ready />
			</Curve>
		</>
	);
}
