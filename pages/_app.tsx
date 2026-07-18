import "@/styles/globals.css";
import { Footer, Navbar, NetlifyFormRouter } from "@/components";
import { AnimatePresence } from "framer-motion";

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
			<NetlifyFormRouter />
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			<Footer />
		</>
	);
}
