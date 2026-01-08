"use client";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

interface CTAProps {
  className?: string;
  text?: string;
}

export default function CTA({ className = "", text = "Book a fit check" }: CTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Target the body as the root element for the modal
    setRootElement(document.body);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-block px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 ${className}`}
      >
        {text}
      </button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/ismailchoudhry332?hide_landing_page_details=1&hide_gdpr_banner=1"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
