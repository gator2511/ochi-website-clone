"use client";

import Head from "next/head";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import content from "@/content/pages/case.json";

const documentId = "content/pages/case.json";

export default function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Head>
				<title>{content.seoTitle}</title>
				<meta name="description" content={content.seoDescription} />
			</Head>
			<div data-sb-object-id={documentId}>
				<Curve backgroundColor="#f1f1f1">
					<Heroworkiz content={content.hero} />
					<Aboutworkiz content={content.company} />
					<Chelenge content={content.challenge} />
					<VideoWorkiz content={content.video} />
					<Result content={content.result} />
					<Credit content={content.credit} />
					<Works content={content.related} />
					<Ready />
				</Curve>
			</div>
		</>
	);
}
