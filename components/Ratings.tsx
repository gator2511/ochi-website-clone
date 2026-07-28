/* eslint-disable @next/next/no-img-element */

export default function Ratings() {
	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
			<div className="w-[49.5%] sm:w-full xm:w-full h-[60vh] sm:h-[50vh] xm:h-[50vh]">
				<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-[#fd4402] relative overflow-hidden">
					<img
						src="/logo.svg"
						alt="GT Marketing logo"
						width="320"
						height="468"
						className="w-[34%] max-w-[320px] h-[58%] object-contain brightness-0 invert"
					/>
					<div className="absolute bottom-[35px] left-[25px] border border-white px-[12px] py-[8px] rounded-full">
						<p className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] text-white uppercase font-normal font-NeueMontreal tracking-wider">
							GT Marketing
						</p>
					</div>
				</div>
			</div>

			<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[15px]">
				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<div className="flex flex-col items-center gap-[16px]" aria-label="Google five-star rating">
						<div className="text-[58px] md:text-[50px] sm:text-[48px] xm:text-[44px] font-medium font-NeueMontreal tracking-[-3px]">
							<span className="text-[#4285F4]">G</span>
							<span className="text-[#EA4335]">o</span>
							<span className="text-[#FBBC05]">o</span>
							<span className="text-[#4285F4]">g</span>
							<span className="text-[#34A853]">l</span>
							<span className="text-[#EA4335]">e</span>
						</div>
						<div className="text-[#fbbc04] text-[26px] tracking-[5px]" aria-hidden="true">
							★★★★★
						</div>
					</div>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white px-[12px] py-[8px]">
						<p className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider">
							Rating 5.0 on Google
						</p>
					</div>
				</div>

				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh] overflow-hidden">
					<img
						src="/heriot-watt-rating-logo.svg"
						alt="Heriot-Watt University alumni"
						width="330"
						height="185"
						className="w-[72%] h-auto object-contain"
					/>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white px-[12px] py-[8px]">
						<p className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider">
							Heriot-Watt University Alumni
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
