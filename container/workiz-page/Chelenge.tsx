type ChallengeProps = {
	content: {
		heading: string;
		label: string;
		description: string;
		images: Array<{ src: string; alt: string }>;
	};
};

export default function Chelenge({ content }: ChallengeProps) {
	return (
		<section className="w-full pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
			<div className="w-full flex flex-col">
				<h2 data-sb-field-path="challenge.heading" className="sub-heading padding-x font-medium font-NeueMontreal text-secondry border-b pb-[50px] border-[#21212155]">
					{content.heading}
				</h2>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[15px] padding-x">
						<h3 data-sb-field-path="challenge.label" className="w-1/2 sm:w-full xm:w-full paragraph font-medium text-secondry font-NeueMontreal">
							{content.label}
						</h3>
						<p data-sb-field-path="challenge.description" className="w-1/2 sm:w-full xm:w-full paragraph font-NeueMontreal text-secondry">
							{content.description}
						</p>
					</div>
				</div>
			</div>
			<div className="w-full padding-x padding-y">
				{content.images[0] && <img data-sb-field-path="challenge.images.0.src" src={content.images[0].src} alt={content.images[0].alt} className="w-full rounded-[20px] object-cover" />}
			</div>
			<div className="w-[80%] mx-auto padding-x grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[40px]">
				{content.images.slice(1, 3).map((image, offset) => (
					<img key={`${image.src}-${offset}`} data-sb-field-path={`challenge.images.${offset + 1}.src`} src={image.src} alt={image.alt} className="w-full object-cover rounded-[20px]" />
				))}
			</div>
			{content.images.slice(3).map((image, offset) => {
				const index = offset + 3;
				const paired = index === 4 || index === 6;
				if (paired) return null;
				const nextImage = content.images[index + 1];
				return nextImage && (index === 3 || index === 5) ? (
					<div key={`${image.src}-${index}`} className="w-[80%] mx-auto padding-x padding-y grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[40px]">
						<img data-sb-field-path={`challenge.images.${index}.src`} src={image.src} alt={image.alt} className="w-full object-cover rounded-[20px]" />
						<img data-sb-field-path={`challenge.images.${index + 1}.src`} src={nextImage.src} alt={nextImage.alt} className="w-full object-cover rounded-[20px]" />
					</div>
				) : (
					<div key={`${image.src}-${index}`} className="w-full padding-x padding-y">
						<img data-sb-field-path={`challenge.images.${index}.src`} src={image.src} alt={image.alt} className="w-full object-cover rounded-[20px]" />
					</div>
				);
			})}
		</section>
	);
}
