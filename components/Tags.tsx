import Link from "next/link";
import { Rounded } from "@/components";

export default function Tags({
	item,
	bgcolor,
	className,
}: {
	item: any;
	bgcolor: string;
	className: string;
}) {
	const content = (
		<Rounded className="py-[2px]" backgroundColor={bgcolor}>
			<p className="z-10 px-[15px]">{item.title}</p>
		</Rounded>
	);

	return (
		<div
			className={`w-fit rounded-[50px] border border-[#21212199] ${item.href ? "cursor-pointer" : "cursor-default"}`}
			key={item.id}>
			{item.href ? (
				<Link className={`small-text font-NeueMontreal uppercase ${className}`} href={item.href}>
					{content}
				</Link>
			) : (
				<div className="small-text font-NeueMontreal uppercase text-secondry">{content}</div>
			)}
		</div>
	);
}
