"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
	"a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

export default function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const positionRef = useRef({ x: -100, y: -100 });
	const targetRef = useRef({ x: -100, y: -100 });

	useEffect(() => {
		const cursor = cursorRef.current;
		const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!cursor || !supportsFinePointer) return;

		let animationFrame = 0;

		const render = () => {
			const ease = prefersReducedMotion ? 1 : 0.22;
			positionRef.current.x += (targetRef.current.x - positionRef.current.x) * ease;
			positionRef.current.y += (targetRef.current.y - positionRef.current.y) * ease;
			cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
			animationFrame = window.requestAnimationFrame(render);
		};

		const handleMouseMove = (event: MouseEvent) => {
			targetRef.current = { x: event.clientX, y: event.clientY };
			cursor.dataset.visible = "true";

			const target = event.target as Element | null;
			cursor.dataset.interactive = target?.closest(INTERACTIVE_SELECTOR) ? "true" : "false";
		};

		const handleMouseDown = () => {
			cursor.dataset.pressed = "true";
		};

		const handleMouseUp = () => {
			cursor.dataset.pressed = "false";
		};

		const handleMouseLeave = () => {
			cursor.dataset.visible = "false";
		};

		const handleMouseEnter = () => {
			cursor.dataset.visible = "true";
		};

		document.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);
		document.documentElement.addEventListener("mouseleave", handleMouseLeave);
		document.documentElement.addEventListener("mouseenter", handleMouseEnter);
		animationFrame = window.requestAnimationFrame(render);

		return () => {
			window.cancelAnimationFrame(animationFrame);
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
			document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
			document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
		};
	}, []);

	return (
		<>
			<div ref={cursorRef} className="gt-custom-cursor" aria-hidden="true">
				<span />
			</div>
			<style jsx global>{`
				@media (pointer: fine) {
					html,
					body,
					body * {
						cursor: none !important;
					}
				}

				.gt-custom-cursor {
					position: fixed;
					top: 0;
					left: 0;
					width: 22px;
					height: 22px;
					margin-left: -11px;
					margin-top: -11px;
					border: 2px solid #fd4402;
					border-radius: 9999px;
					background: rgba(253, 68, 2, 0.04);
					pointer-events: none;
					z-index: 2147483647;
					opacity: 0;
					transition:
						width 180ms ease,
						height 180ms ease,
						margin 180ms ease,
						background-color 180ms ease,
						opacity 180ms ease,
						border-width 180ms ease;
					will-change: transform, width, height;
				}

				.gt-custom-cursor > span {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 4px;
					height: 4px;
					border-radius: 9999px;
					background: #fd4402;
					transform: translate(-50%, -50%);
					transition: transform 180ms ease;
				}

				.gt-custom-cursor[data-visible="true"] {
					opacity: 1;
				}

				.gt-custom-cursor[data-interactive="true"] {
					width: 44px;
					height: 44px;
					margin-left: -22px;
					margin-top: -22px;
					background: rgba(253, 68, 2, 0.14);
					border-width: 1.5px;
				}

				.gt-custom-cursor[data-interactive="true"] > span {
					transform: translate(-50%, -50%) scale(0.7);
				}

				.gt-custom-cursor[data-pressed="true"] {
					width: 16px;
					height: 16px;
					margin-left: -8px;
					margin-top: -8px;
					background: rgba(253, 68, 2, 0.35);
				}

				@media (pointer: coarse), (hover: none) {
					.gt-custom-cursor {
						display: none;
					}
				}
			`}</style>
		</>
	);
}
