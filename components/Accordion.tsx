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
    <div className="border-t border-border py-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1">
            <h3 className="text-2xl mb-4">{title}</h3>
            <p className="text-accent mb-2">{problemSummary}</p>
            <p className="text-foreground">{outcomeSummary}</p>
          </div>
          <div className="text-2xl text-accent transition-transform duration-200 ease-out" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
            +
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
        <div className="pt-8">{children}</div>
      </div>
    </div>
  );
}
