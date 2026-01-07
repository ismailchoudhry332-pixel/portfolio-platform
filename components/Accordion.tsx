"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  problemSummary: string;
  outcomeSummary: string;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  problemSummary,
  outcomeSummary,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-border py-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-start gap-12">
          <div className="flex-1">
            <h3 className="text-2xl mb-5 group-hover:text-accent transition-colors duration-150">{title}</h3>
            <p className="text-accent mb-3 text-lg leading-relaxed">{problemSummary}</p>
            <p className="text-foreground-muted text-lg leading-relaxed">{outcomeSummary}</p>
          </div>
          <div className="flex-shrink-0 mt-1">
            <span className="text-sm text-accent-light group-hover:text-accent transition-colors duration-150">
              {isOpen ? "Close" : "Expand"}
            </span>
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-200 ease-out"
        style={{
          maxHeight: isOpen ? "5000px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pt-12">{children}</div>
      </div>
    </div>
  );
}
