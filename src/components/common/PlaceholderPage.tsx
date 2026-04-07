type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <section className="py-8">
      <div className="rounded-[24px] border border-[#e3e7eb] bg-white p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6e9fb8]">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#202124]">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68737d]">{description}</p>
      </div>
    </section>
  );
}
