"use client";

import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Curve, Ready } from "@/components";
import content from "@/content/pages/vault.json";

const documentId = "content/pages/vault.json";

export default function TheVault() {
	const [activeFilter, setActiveFilter] = useState("All");

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	const filteredItems = useMemo(
		() =>
			activeFilter === "All"
				? content.items
				: content.items.filter((item) => item.category === activeFilter),
		[activeFilter]
	);

	return (
		<>
			<Head>
				<title>{content.seoTitle}</title>
				<meta name="description" content={content.seoDescription} />
				<meta property="og:title" content={content.seoTitle} />
				<meta property="og:description" content={content.seoDescription} />
				<meta property="og:url" content="https://gtmarketing.io/the-vault" />
			</Head>

			<div data-sb-object-id={documentId}>
				<Curve backgroundColor="#f1f1f1">
					<section className="vault-hero padding-x">
						<div className="vault-hero__top">
							<p data-sb-field-path="hero.eyebrow" className="vault-eyebrow">
								{content.hero.eyebrow}
							</p>
							<p className="vault-count">001—{String(content.items.length).padStart(3, "0")}</p>
						</div>

						<h1 className="vault-title">
							<span data-sb-field-path="hero.headingLine1">{content.hero.headingLine1}</span>
							<span data-sb-field-path="hero.headingLine2" className="vault-title__accent">
								{content.hero.headingLine2}
							</span>
						</h1>

						<div className="vault-intro">
							<p data-sb-field-path="hero.intro">{content.hero.intro}</p>
							<p data-sb-field-path="hero.note">{content.hero.note}</p>
						</div>
					</section>

					<section className="vault-content">
						<div className="vault-filter padding-x" aria-label="Filter The Vault">
							{content.filters.map((filter, index) => (
								<button
									key={filter}
									type="button"
									data-sb-field-path={`filters.${index}`}
									className={activeFilter === filter ? "is-active" : ""}
									onClick={() => setActiveFilter(filter)}>
									{filter}
								</button>
							))}
						</div>

						<div className="vault-wall padding-x">
							<AnimatePresence mode="popLayout">
								{filteredItems.map((item, index) => (
									<motion.article
										layout
										initial={{ opacity: 0, y: 24 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 24 }}
										transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
										key={item.title}
										className="vault-card"
										data-cursor="interactive">
										<div className="vault-card__media" style={{ aspectRatio: item.ratio }}>
											<img
												data-sb-field-path={`items.${index}.image`}
												src={item.image}
												alt={item.imageAlt}
												loading="lazy"
											/>
											<div className="vault-card__overlay">
												<div className="vault-card__meta">
													<span>{String(index + 1).padStart(2, "0")}</span>
													<span data-sb-field-path={`items.${index}.category`}>{item.category}</span>
												</div>
												<h2 data-sb-field-path={`items.${index}.title`}>{item.title}</h2>
												<p data-sb-field-path={`items.${index}.note`}>{item.note}</p>
											</div>
										</div>
									</motion.article>
								))}
							</AnimatePresence>
						</div>
					</section>

					<section className="vault-closing padding-x">
						<p data-sb-field-path="closing.eyebrow" className="vault-eyebrow">
							{content.closing.eyebrow}
						</p>
						<h2 data-sb-field-path="closing.heading">{content.closing.heading}</h2>
						<p data-sb-field-path="closing.text">{content.closing.text}</p>
					</section>

					<Ready />
				</Curve>
			</div>

			<style jsx>{`
				.vault-hero {
					min-height: 92vh;
					padding-top: 130px;
					padding-bottom: 55px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					background: #f1f1f1;
				}

				.vault-hero__top,
				.vault-intro,
				.vault-card__meta {
					display: flex;
					justify-content: space-between;
					gap: 30px;
				}

				.vault-eyebrow,
				.vault-count,
				.vault-filter button,
				.vault-card__meta {
					font-family: NeueMontreal, Arial, sans-serif;
					font-size: 15px;
					line-height: 1.2;
					text-transform: uppercase;
					color: #212121;
				}

				.vault-title {
					margin: 45px 0;
					display: flex;
					flex-direction: column;
					font-family: FoundersGrotesk, Arial, sans-serif;
					font-size: clamp(130px, 18vw, 340px);
					font-weight: 600;
					line-height: 0.72;
					letter-spacing: -0.035em;
					text-transform: uppercase;
					color: #212121;
				}

				.vault-title__accent {
					color: #fd4402;
					align-self: flex-end;
				}

				.vault-intro {
					border-top: 1px solid rgba(33, 33, 33, 0.28);
					padding-top: 24px;
				}

				.vault-intro p {
					max-width: 620px;
					font-family: NeueMontreal, Arial, sans-serif;
					font-size: clamp(20px, 2.1vw, 38px);
					line-height: 1.08;
					color: #212121;
				}

				.vault-intro p:last-child {
					max-width: 390px;
					font-size: clamp(16px, 1.25vw, 22px);
					line-height: 1.2;
				}

				.vault-content {
					padding-top: 18px;
					padding-bottom: 110px;
					background: #111;
					border-radius: 20px 20px 0 0;
				}

				.vault-filter {
					position: sticky;
					top: 8vh;
					z-index: 20;
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					padding-top: 18px;
					padding-bottom: 18px;
					background: rgba(17, 17, 17, 0.88);
					backdrop-filter: blur(14px);
				}

				.vault-filter button {
					padding: 9px 15px;
					border: 1px solid rgba(255, 255, 255, 0.45);
					border-radius: 999px;
					color: #fff;
					transition: background-color 180ms ease, color 180ms ease, border-color 180ms ease;
				}

				.vault-filter button:hover,
				.vault-filter button.is-active {
					background: #fd4402;
					border-color: #fd4402;
					color: #fff;
				}

				.vault-wall {
					columns: 2;
					column-gap: 14px;
					padding-top: 18px;
				}

				.vault-card {
					break-inside: avoid;
					margin-bottom: 14px;
				}

				.vault-card__media {
					position: relative;
					overflow: hidden;
					border-radius: 12px;
					background: #252525;
				}

				.vault-card__media img {
					width: 100%;
					height: 100%;
					display: block;
					object-fit: cover;
					filter: saturate(0.92) contrast(1.02);
					transition: transform 900ms cubic-bezier(0.4, 0, 0.2, 1), filter 500ms ease;
				}

				.vault-card__overlay {
					position: absolute;
					inset: 0;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					padding: 24px;
					background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 20%, rgba(0, 0, 0, 0.86) 100%);
					opacity: 0;
					transition: opacity 350ms ease;
				}

				.vault-card:hover .vault-card__overlay {
					opacity: 1;
				}

				.vault-card:hover .vault-card__media img {
					transform: scale(1.055);
					filter: saturate(1.08) contrast(1.05);
				}

				.vault-card__meta {
					position: absolute;
					top: 22px;
					left: 24px;
					right: 24px;
					color: #fff;
				}

				.vault-card h2 {
					max-width: 90%;
					font-family: FoundersGrotesk, Arial, sans-serif;
					font-size: clamp(58px, 6vw, 122px);
					font-weight: 600;
					line-height: 0.82;
					letter-spacing: -0.025em;
					text-transform: uppercase;
					color: #fd4402;
				}

				.vault-card__overlay > p {
					max-width: 560px;
					margin-top: 18px;
					font-family: NeueMontreal, Arial, sans-serif;
					font-size: clamp(16px, 1.3vw, 23px);
					line-height: 1.22;
					color: #fff;
				}

				.vault-closing {
					padding-top: 120px;
					padding-bottom: 130px;
					background: #f1f1f1;
				}

				.vault-closing h2 {
					max-width: 1200px;
					margin-top: 40px;
					font-family: FoundersGrotesk, Arial, sans-serif;
					font-size: clamp(86px, 10vw, 190px);
					font-weight: 600;
					line-height: 0.82;
					letter-spacing: -0.025em;
					text-transform: uppercase;
					color: #212121;
				}

				.vault-closing > p:last-child {
					max-width: 650px;
					margin-top: 45px;
					margin-left: auto;
					font-family: NeueMontreal, Arial, sans-serif;
					font-size: clamp(20px, 2vw, 34px);
					line-height: 1.12;
					color: #212121;
				}

				@media (max-width: 1024px) {
					.vault-title {
						font-size: clamp(110px, 18vw, 220px);
					}
				}

				@media (max-width: 767px) {
					.vault-hero {
						min-height: auto;
						padding-top: 105px;
					}

					.vault-hero__top,
					.vault-intro {
						flex-direction: column;
						gap: 16px;
					}

					.vault-title {
						margin: 65px 0 55px;
						font-size: clamp(94px, 29vw, 150px);
						line-height: 0.75;
					}

					.vault-title__accent {
						align-self: flex-start;
					}

					.vault-wall {
						columns: 1;
					}

					.vault-filter {
						top: 0;
						overflow-x: auto;
						flex-wrap: nowrap;
					}

					.vault-card__overlay {
						opacity: 1;
						padding: 18px;
					}

					.vault-card__meta {
						top: 18px;
						left: 18px;
						right: 18px;
					}

					.vault-closing {
						padding-top: 85px;
						padding-bottom: 90px;
					}
				}
			`}</style>
		</>
	);
}
