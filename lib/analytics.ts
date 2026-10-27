const MEASUREMENT_ID = "G-816V9Z644Z";

type Gtag = (...args: unknown[]) => void;

export function trackGenerateLead() {
	if (typeof window === "undefined") return;
	const gtag = (window as Window & { gtag?: Gtag }).gtag;
	if (typeof gtag !== "function") return;
	gtag("event", "generate_lead", {
		send_to: MEASUREMENT_ID,
		method: "contact_form",
		form_name: "gt-marketing-contact",
	});
}
