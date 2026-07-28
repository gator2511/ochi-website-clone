import Image from "next/image";

export default function Cards() {
	return (
		<section className="w-full padding-x py-[50px] bg-background">
			<div className="w-full flex gap-[20px] h-[70vh] md:h-[50vh] sm:flex-col sm:h-full xm:flex-col xm:h-full">
				<div className="group relative w-[50%] sm:w-full xm:w-full h-full sm:h-[420px] xm:h-[360px] flex items-center justify-center bg-[#004D43] rounded-[12px] overflow-hidden">
					<Image
						src="/logo.svg"
						alt="GT Marketing logo"
						width={520}
						height={260}
						className="w-[48%] max-w-[430px] h-auto object-contain transition-transform duration-700 ease-[.4,0,.2,1] group-hover:scale-[1.06]"
					/>
					<div className="absolute bottom-[30px] left-[30px] rounded-full border border-[#CDEA68] px-[16px] py-[8px] small-text font-NeueMontreal uppercase text-[#CDEA68]">
						GT Marketing
					</div>
				</div>

				<div className="group relative w-[25%] sm:w-full xm:w-full h-full sm:h-[420px] xm:h-[360px] flex items-center justify-center bg-secondry rounded-[12px] overflow-hidden">
					<div className="flex flex-col items-center transition-transform duration-700 ease-[.4,0,.2,1] group-hover:scale-[1.06]">
						<div aria-label="Google" className="text-[62px] lg:text-[54px] md:text-[44px] sm:text-[58px] xm:text-[50px] leading-none font-medium font-NeueMontreal tracking-[-3px]">
							<span className="text-[#4285F4]">G</span>
							<span className="text-[#EA4335]">o</span>
							<span className="text-[#FBBC05]">o</span>
							<span className="text-[#4285F4]">g</span>
							<span className="text-[#34A853]">l</span>
							<span className="text-[#EA4335]">e</span>
						</div>
						<p aria-label="5 out of 5 stars" className="pt-[14px] text-[22px] tracking-[5px] text-[#CDEA68]">
							★★★★★
						</p>
					</div>
					<div className="absolute bottom-[30px] left-[26px] right-[26px] w-fit rounded-full border border-white px-[16px] py-[8px] small-text font-NeueMontreal uppercase text-white">
						Rating 5.0 on Google
					</div>
				</div>

				<div className="group relative w-[25%] sm:w-full xm:w-full h-full sm:h-[420px] xm:h-[360px] flex items-center justify-center bg-secondry rounded-[12px] overflow-hidden">
					<Image
						src="/credentials/heriot-watt-university.svg"
						alt="Heriot-Watt University logo"
						width={920}
						height={700}
						className="w-[72%] max-w-[360px] h-auto object-contain transition-transform duration-700 ease-[.4,0,.2,1] group-hover:scale-[1.05]"
					/>
					<div className="absolute bottom-[30px] left-[26px] right-[26px] w-fit rounded-full border border-white px-[16px] py-[8px] small-text font-NeueMontreal uppercase text-white">
						Heriot-Watt University Alumni
					</div>
				</div>
			</div>
		</section>
	);
}
