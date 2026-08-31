import Script from "next/script";
import "@/styles/globals.css";
import { Footer, Navbar, NetlifyFormRouter } from "@/components";
import CustomCursor from "@/components/CustomCursor";
import SiteSEO from "@/components/SiteSEO";
import { AnimatePresence } from "framer-motion";

const googleMeasurementId = "G-816V9Z644Z";
const standaloneSeoRoutes = new Set(["/cafe-marketing", "/real-estate-marketing"]);

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	const rawPath = String(router.asPath || "/").split(/[?#]/)[0] || "/";
	const currentPath = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;
	const isPortalRoute = currentPath === "/client-portal" || currentPath.startsWith("/client-portal/");

	return (
		<>
			{!isPortalRoute && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`}
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${googleMeasurementId}');
						`}
					</Script>
				</>
			)}
			<CustomCursor />
			{!isPortalRoute && <NetlifyFormRouter />}
			{!isPortalRoute && <Navbar />}
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			{!isPortalRoute && !standaloneSeoRoutes.has(currentPath) && <SiteSEO path={router.asPath} />}
			{!isPortalRoute && <Footer />}
		</>
	);
}
