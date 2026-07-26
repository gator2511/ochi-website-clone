"use client";

import { useEffect } from "react";
import { BrandImageGallery, Curve } from "@/components";
import FAQStructuredData from "@/components/FAQStructuredData";
import { Herocontact, Form, FAQ, Socials } from "@/container";
import content from "@/content/pages/contact.json";

const documentId = "content/pages/contact.json";

export default function Contact() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<FAQStructuredData items={content.faq.items} />
			<div data-sb-object-id={documentId}>
				<Curve backgroundColor="#f1f1f1">
					<Herocontact content={content.hero} />
					<Form content={content.form} />
					<BrandImageGallery content={content.gallery} fieldPath="gallery" />
					<Socials content={content.socials} />
					<FAQ content={content.faq} />
				</Curve>
			</div>
		</>
	);
}
