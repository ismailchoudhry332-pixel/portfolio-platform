"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CalendlyBadge() {
  useEffect(() => {
    // Initialize badge after script loads
    const initBadge = () => {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/ismailchoudhry332?hide_landing_page_details=1&hide_gdpr_banner=1',
          text: 'Book a fit check',
          color: '#1A1A1A',
          textColor: '#FAFAFA',
          branding: false
        });
      }
    };

    // Try to init immediately if script already loaded
    if ((window as any).Calendly) {
      initBadge();
    } else {
      // Otherwise wait for script to load
      const checkCalendly = setInterval(() => {
        if ((window as any).Calendly) {
          initBadge();
          clearInterval(checkCalendly);
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, []);

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
