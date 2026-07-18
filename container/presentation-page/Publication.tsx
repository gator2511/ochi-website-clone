import Link from "next/link";
import { Marquee } from "@/components";

type PublicationProps = {
	content: {
		marquee: string;
		heading: string;
		items: Array<{ title: string; image: string; imageAlt: string; url?: string }>;
	};
};

export default function Publication({ content }: PublicationProps) {
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px] mt-[-10px] z-30 relative">
			<div className="w-full bg-marquee z-10 relative">
				<Marquee
					title={content.marquee}
					fieldPath="publication.marquee"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full padding-x">
				<div className="w-full flex justify-between pt-[20px] sm:flex-col xm:flex-col gap-y-[20px]">
					<div className="w-[30%] sm:w-full xm:w-full">
						<h3 data-sb-field-path="publication.heading" className="paragraph font-medium text-white font-NeueMontreal">
							{content.heading}
						</h3>
					</div>
					<div className="w-[70%] flex gap-y-[20px] sm:flex-col xm:flex-col sm:w-full xm:w-full gap-[10px]">
						{content.items.map((item, index) => (
							<div className="w-full flex justify-between gap-[20px] sm:flex-col xm:flex-col" key={`${item.title}-${index}`}>
								<div className="w-full flex gap-[20px] rounded-[20px] flex-col">
									<Link href={item.url ?? "/presentation"} className="group overflow-hidden rounded-[20px]">
										<img
											data-sb-field-path={`publication.items.${index}.image`}
											src={item.image}
											alt={item.imageAlt}
											className="w-full h-full group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
										/>
									</Link>
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<span className="w-[10px] h-[10px] rounded-full bg-white" />
										<h1 data-sb-field-path={`publication.items.${index}.title`} className="paragraph uppercase font-medium font-NeueMontreal text-white">
											{item.title}
										</h1>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
