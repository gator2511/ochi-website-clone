const NON_CANONICAL_HOSTS = new Set([
	"gtmarketingio.netlify.app",
	"www.gtmarketingio.netlify.app",
]);

export default async (request, context) => {
	const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
	if (!NON_CANONICAL_HOSTS.has(host)) return context.next();

	const url = new URL(request.url);
	return Response.redirect(`https://gtmarketing.io${url.pathname}${url.search}`, 301);
};

export const config = {
	path: "/*",
	onError: "bypass",
};
