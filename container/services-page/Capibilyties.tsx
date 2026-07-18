"use client";

import { Button } from "@/components";

type LinkItem = { label: string; url: string };
type CapabilitiesProps = {
	content: {
		intro: string;
		label: string;
		groups: Array<{ title: string; items: LinkItem[] }>;
		marketingHeading: string;
		marketingItems: LinkItem[];
	};
};

export default function Capibilyties({ content }: CapabilitiesProps) {
	return (
		<div className="w-full bg-about padding-y rounded-t-[20px]">
			<div className="w-[82%] sm:w-full xm:w-full padding-x mb-[70px]">
				<h1 data-sb-field-path="capabilities.intro" className="sub-heading font-medium font-NeueMontreal text-secondry">
					{content.intro}
				</h1>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col justify-between py-[35px] padding-x border-t border-[#21212155] sm:gap-[20px] xm:gap-[20px]">
				<div className="w-[18%] sm:w-full xm:w-full">
					<h3 data-sb-field-path="capabilities.label" className="paragraph font-medium text-secondry font-NeueMontreal">
						{content.label}
					</h3>
				</div>
				<div className="w-[82%] sm:w-full xm:w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-x-[60px] gap-y-[50px]">
					{content.groups.map((group, groupIndex) => (
						<div key={`${group.title}-${groupIndex}`}>
							<div className="flex items-center gap-x-[10px] pb-[20px]">
								<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
								<h2 data-sb-field-path={`capabilities.groups.${groupIndex}.title`} className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
									{group.title}
								</h2>
							</div>
							<div className="flex flex-col gap-y-[5px]">
								{group.items.map((item, itemIndex) => (
									<div key={`${item.label}-${itemIndex}`} data-sb-field-path={`capabilities.groups.${groupIndex}.items.${itemIndex}.label`}>
										<Button href={item.url} title={item.label} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col justify-between py-[35px] padding-x border-t border-[#21212155] sm:gap-[20px] xm:gap-[20px]">
				<div className="w-[18%] sm:w-full xm:w-full">
					<h3 data-sb-field-path="capabilities.marketingHeading" className="paragraph font-medium text-secondry font-NeueMontreal">
						{content.marketingHeading}:
					</h3>
				</div>
				<div className="w-[82%] sm:w-full xm:w-full">
					<div className="flex items-center gap-x-[10px] pb-[20px]">
						<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
						<h2 data-sb-field-path="capabilities.marketingHeading" className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
							{content.marketingHeading}
						</h2>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-x-[40px] gap-y-[6px]">
						{content.marketingItems.map((service, index) => (
							<div key={`${service.label}-${index}`} data-sb-field-path={`capabilities.marketingItems.${index}.label`}>
								<Button href={service.url} title={service.label} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
