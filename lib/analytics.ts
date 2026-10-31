const MEASUREMENT_ID = "G-816V9Z644Z";

type Gtag = (...args: unknown[]) => void;

function getGtag(): Gtag | null {
	if (typeof window === "undefined") return null;
	const gtag = (window as Window & { gtag?: Gtag }).gtag;
	return typeof gtag === "function" ? gtag : null;
}

/**
 * Netlify Forms returns 200 when a urlencoded POST with a known form-name is accepted.
 * A missing form-name is 400 "Bad request, missing form". An unknown form-name is a 404.
 * Those bodies must not count as a lead.
 */
export function isAcceptedNetlifyFormResponse(status: number, body: string) {
	if (status < 200 || status >= 300) return false;
	const text = body.toLowerCase();
	if (text.includes("missing form") || text.includes("bad request") || text.includes("form not found")) return false;
	return true;
}

/**
 * Conversion events for one accepted contact-form POST.
 * Call this only after `isAcceptedNetlifyFormResponse` is true.
 * Do not call it from a page view, a field focus, or a failed submit.
 *
 * `form_submit` is sent here because this form calls preventDefault, and the
 * 28-day GA4 property showed form_start without form_submit. Enhanced
 * measurement does not reliably record a cancelled submit.
 * `generate_lead` is the key event. A GA4 Admin create-event rule (not this
 * file) is reported to copy /contact page_view into generate_lead. This
 * function is not that rule, and nothing in the site calls it on page view.
 */
export function trackSuccessfulContactSubmit() {
	const gtag = getGtag();
	if (!gtag) return;
	gtag("event", "form_submit", {
		send_to: MEASUREMENT_ID,
		form_id: "gt-marketing-contact",
		form_name: "gt-marketing-contact",
		form_destination: "/contact",
	});
	gtag("event", "generate_lead", {
		send_to: MEASUREMENT_ID,
		method: "contact_form",
		form_name: "gt-marketing-contact",
	});
}

const trackedPhoneClicks = new WeakSet<Event>();

/** One click on a tel: link sends one phone_click. A second listener on the same click is ignored. */
export function trackPhoneClick(anchor: HTMLAnchorElement, event: Event) {
	if (trackedPhoneClicks.has(event)) return;
	trackedPhoneClicks.add(event);
	const gtag = getGtag();
	if (!gtag) return;
	const linkUrl = anchor.getAttribute("href") || "";
	if (!linkUrl.toLowerCase().startsWith("tel:")) return;
	gtag("event", "phone_click", {
		send_to: MEASUREMENT_ID,
		link_url: linkUrl,
		link_location: anchor.dataset.trackLocation || "unknown",
		page_path: window.location.pathname,
	});
}
