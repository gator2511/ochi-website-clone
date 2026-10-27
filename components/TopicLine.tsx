export default function TopicLine({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<span
			className={`block max-w-[920px] pb-[16px] font-NeueMontreal font-medium normal-case tracking-normal text-[22px] leading-[1.35] md:text-[18px] sm:text-[16px] xm:text-[16px] ${className}`}>
			{children}
		</span>
	);
}
