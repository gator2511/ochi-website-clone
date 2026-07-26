"use client";

import { useEffect } from "react";
import {
	BrandImageGallery,
	Curve,
	HomeVisionShowcase,
	Marquee,
	Ready,
} from "@/components";
import { About, Clients, Hero, Projects, VideoHome } from "@/container";
import content from "@/content/pages/home.json";

const documentId = "content/pages/home.json";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<div data-sb-object-id={documentId}>
			<Curve backgroundColor="#f1f1f1">
				<Hero content={content.hero} />
				<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
					<Marquee
						title={content.marqueeText}
						fieldPath="marqueeText"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				<About content={content.about} />
				<BrandImageGallery content={content.gallery} fieldPath="gallery" />
				<VideoHome content={content.video} />
				<HomeVisionShowcase content={content.vision} fieldPath="vision" />
				<Projects content={content.projects} />
				<Clients content={content.reviews} />
				<Ready />
			</Curve>
		</div>
	);
}
