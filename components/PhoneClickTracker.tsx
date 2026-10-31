"use client";

import { useEffect } from "react";
import { trackPhoneClick } from "@/lib/analytics";

export default function PhoneClickTracker() {
	useEffect(() => {
		const onClick = (event: MouseEvent) => {
			const target = event.target;
			if (!(target instanceof Element)) return;
			const anchor = target.closest("a[href^='tel:']");
			if (!(anchor instanceof HTMLAnchorElement)) return;
			trackPhoneClick(anchor, event);
		};

		document.addEventListener("click", onClick, true);
		return () => document.removeEventListener("click", onClick, true);
	}, []);

	return null;
}
