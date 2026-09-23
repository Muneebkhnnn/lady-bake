export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mx-auto flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-espresso/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
