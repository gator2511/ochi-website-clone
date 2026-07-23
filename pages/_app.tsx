import Head from "next/head";
import "@/styles/globals.css";
import { Footer, Navbar, NetlifyFormRouter } from "@/components";
import { AnimatePresence } from "framer-motion";

const defaultTitle = "GT Marketing | Growth Marketing Agency in Darwin";
const defaultDescription =
	"GT Marketing builds strategy, digital execution, automation, websites and performance systems for ambitious Australian businesses.";
const socialImage = "https://gtmarketing.io/contacthhero.jpg";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	const path = String(router?.asPath || "/").split("?")[0];
	const canonicalUrl = `https://gtmarketing.io${path === "/" ? "" : path}`;

	return (
		<>
			<Head>
				<title>{defaultTitle}</title>
				<meta name="description" content={defaultDescription} />
				<meta name="application-name" content="GT Marketing" />
				<meta name="apple-mobile-web-app-title" content="GT Marketing" />
				<link rel="canonical" href={canonicalUrl} />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="GT Marketing" />
				<meta property="og:title" content={defaultTitle} />
				<meta property="og:description" content={defaultDescription} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content={socialImage} />
				<meta property="og:image:alt" content="GT Marketing" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={defaultTitle} />
				<meta name="twitter:description" content={defaultDescription} />
				<meta name="twitter:image" content={socialImage} />
			</Head>
			<NetlifyFormRouter />
			<Navbar />
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer />
		</>
	);
}
