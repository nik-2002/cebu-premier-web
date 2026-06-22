type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  as = "h2"
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-pine/20 bg-mist px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-pine">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-bold leading-tight text-ocean md:text-5xl">{title}</Heading>
      {body ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{body}</p> : null}
    </div>
  );
}
