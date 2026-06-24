const Tag = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "skill-tag",
    tech: "tech-tag",
    accent: "inline-block border border-cyan-accent-border bg-cyan-accent-subtle text-cyan-accent rounded px-3 py-1 text-xs font-medium",
  };

  return (
    <span className={`${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
