"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export default function TypewriterText({ text, className = "", speed = 50 }: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
                setIsComplete(true);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span className={className}>
            {displayedText}
            <span className={`inline-block w-[3px] h-[1em] bg-accent-cyan ml-1 ${isComplete ? 'animate-pulse' : ''}`} />
        </span>
    );
}
