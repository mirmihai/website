// components/ui/CalendlyWidget.tsx
"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
  return (
    <InlineWidget
      url="https://calendly.com/gfyrselfsaurus/30min"
      styles={{ height: "100%", minHeight: "800px", width: "100%" }}
      pageSettings={{
        backgroundColor: "020617",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "ea580c",
        textColor: "f8fafc",
      }}
    />
  );
}
