interface TechStackProps {
    className?: string;
}

const tools = [
    { name: "n8n", category: "Automation" },
    { name: "Make.com", category: "Automation" },
    { name: "Zoho", category: "CRM/ERP" },
    { name: "Notion", category: "Knowledge" },
    { name: "Hubstaff", category: "Monitoring" },
    { name: "Claude Code", category: "AI/LLM" },
    { name: "Power BI", category: "Analytics" },
    { name: "Monday.com", category: "PM" },
];

export default function TechStack({ className = "" }: TechStackProps) {
    return (
        <div className={`bento-box p-6 ${className}`}>
            <h3 className="text-sm uppercase tracking-wide text-accent-cyan mb-6 font-mono">
                System Dependencies
            </h3>
            <ul className="space-y-3">
                {tools.map((tool) => (
                    <li key={tool.name} className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-mono">{tool.name}</span>
                        <span className="text-accent-light text-xs">{tool.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
