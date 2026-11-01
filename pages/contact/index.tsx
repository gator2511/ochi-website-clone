"use client";

import { useEffect } from "react";
import { Curve } from "@/components";
import { Herocontact, Form } from "@/container";
import content from "@/content/pages/contact.json";

const documentId = "content/pages/contact.json";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <div data-sb-object-id={documentId}>
      <Curve backgroundColor="#f1f1f1">
        <Herocontact content={content.hero} />
        <Form content={content.form} />
      </Curve>
    </div>
  );
}
