type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="font-mono text-xs font-medium uppercase text-mist">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-whiteish sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-cloud sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
