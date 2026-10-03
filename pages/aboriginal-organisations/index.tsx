"use client";

import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import AboriginalOrganisationsLanding from "@/container/aboriginal-page/AboriginalOrganisationsLanding";
import content from "@/content/pages/aboriginal-organisations.json";

const documentId = "content/pages/aboriginal-organisations.json";

export default function AboriginalOrganisationsPage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <Curve backgroundColor="#f1f1f1">
      <AboriginalOrganisationsLanding content={content} documentId={documentId} />
      <Ready />
    </Curve>
  );
}
