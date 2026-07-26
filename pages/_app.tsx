import Script from "next/script";
import "@/styles/globals.css";
import { Footer, Navbar, NetlifyFormRouter } from "@/components";
import CustomCursor from "@/components/CustomCursor";
import SiteSEO from "@/components/SiteSEO";
import { AnimatePresence } from "framer-motion";

const googleMeasurementId = "G-816V9Z644Z";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
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
			<CustomCursor />
			<NetlifyFormRouter />
			<Navbar />
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<SiteSEO path={router.asPath} />
			<Footer />
		</>
	);
}
