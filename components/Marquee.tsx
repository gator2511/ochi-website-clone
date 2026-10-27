import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className, fieldPath }: TMarqueeProps) {
	return (
		<TextMarquee baseVelocity="0.7">
			<p
				data-sb-field-path={fieldPath}
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</p>
			<p
				aria-hidden="true"
				className={`font-FoundersGrotesk bg-marquee font-normal border-y border-[#ffffff55] uppercase text-white whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</p>
		</TextMarquee>
	);
}
