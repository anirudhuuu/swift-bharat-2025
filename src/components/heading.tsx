interface HeadingProps {
  children: React.ReactNode;
  fontWeight?: "bold" | "semibold";
  mdFontSize?: string;
}

const Heading = ({
  children,
  fontWeight = "bold",
  mdFontSize = "text-heading-1",
}: HeadingProps) => {
  const fontClass = fontWeight === "semibold" ? "font-semibold" : "font-bold";
  return (
    <h1 className={`${fontClass} text-4xl md:${mdFontSize}`}>{children}</h1>
  );
};

export default Heading;
