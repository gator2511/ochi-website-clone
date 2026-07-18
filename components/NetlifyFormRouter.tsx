"use client";

import { useEffect } from "react";

const LEGACY_FORM_ENDPOINT = "/contact-form.html";
const NETLIFY_FORM_ENDPOINT = "/__forms.html";

export default function NetlifyFormRouter() {
	useEffect(() => {
		const nativeFetch = window.fetch.bind(window);

		window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
			const requestUrl =
				typeof input === "string"
					? input
					: input instanceof URL
						? input.pathname
						: new URL(input.url, window.location.origin).pathname;
			const method = init?.method?.toUpperCase() ?? "GET";

			if (requestUrl === LEGACY_FORM_ENDPOINT && method === "POST") {
				let body = init?.body;

				if (typeof body === "string") {
					const formData = new URLSearchParams(body);
					formData.delete("bot-field");
					formData.set("form-name", "gt-marketing-contact");
					body = formData.toString();
				}

				return nativeFetch(NETLIFY_FORM_ENDPOINT, {
					...init,
					body,
					cache: "no-store",
				});
			}

			return nativeFetch(input, init);
		};

		return () => {
			window.fetch = nativeFetch;
		};
	}, []);

	return null;
}
