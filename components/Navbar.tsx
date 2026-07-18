import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";
import site from "@/content/data/site.json";

const siteDocumentId = "content/data/site.json";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		setHidden(Boolean(previous && latest > previous));
	});

	return (
		<>
			<motion.nav
				data-sb-object-id={siteDocumentId}
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}>
				<div className="w-[50%]">
					<Link href="/" aria-label={`${site.brandName} home`}>
						<Image
							data-sb-field-path="logo"
							src={site.logo}
							alt={site.logoAlt}
							width={38}
							height={56}
							className="h-[52px] w-auto object-contain"
							priority
						/>
					</Link>
				</div>
				<div className="flex gap-x-[20px] w-[50%]">
					{site.navigation.map((item, index) => (
						<Link
							key={`${item.label}-${index}`}
							className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
								index === site.navigation.length - 1 ? "ml-auto" : ""
							}`}
							href={item.url}>
							<span data-sb-field-path={`navigation.${index}.label`}>
								<TextHover titile1={item.label} titile2={item.label} />
							</span>
						</Link>
					))}
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}
