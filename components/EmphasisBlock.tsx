interface EmphasisBlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function EmphasisBlock({ children, className = "" }: EmphasisBlockProps) {
  return (
    <div className={`border-l-2 border-foreground pl-6 py-1 my-12 ${className}`}>
      <p className="text-xl leading-relaxed text-foreground">{children}</p>
    </div>
  );
}
