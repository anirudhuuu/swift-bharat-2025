type SectionTitleProps = {
  children: string;
  as?: "h1" | "h2";
  className?: string;
};

const SectionTitle = ({
  children,
  as: Tag = "h2",
  className = "",
}: SectionTitleProps) => (
  <Tag
    className={`font-samarkan text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.9] tracking-tight text-foreground lowercase ${className}`}
  >
    {children}
  </Tag>
);

export default SectionTitle;
