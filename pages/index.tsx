"use client";

import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { Hero, LeadBookingSystem } from "@/container";
import HomePromotionPopup from "@/components/HomePromotionPopup";
import promotion from "@/content/data/promotion.json";
import content from "@/content/pages/home.json";

const documentId = "content/pages/home.json";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <div data-sb-object-id={documentId}>
      <HomePromotionPopup content={promotion} />
      <Curve backgroundColor="#f1f1f1">
        <Hero content={content.hero} />
        <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
          <Marquee
            title={content.marqueeText}
            fieldPath="marqueeText"
            className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[420px] leading-[270px] lg:text-[330px] lg:leading-[210px] md:text-[260px] md:leading-[160px] sm:text-[190px] sm:leading-[120px] xm:text-[115px] xm:leading-[75px]"
          />
        </div>
        <LeadBookingSystem content={content.growthSystem} />
        <Ready />
      </Curve>
    </div>
  );
}
