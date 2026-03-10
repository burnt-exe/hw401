import Link from "next/link";

type CaseStudyCardProps = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
};

export function CaseStudyCard({
  slug,
  title,
  category,
  summary,
  impact
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
        {category}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">{summary}</p>

      <div className="mt-4 rounded-xl bg-slate-800/60 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Strategic impact</p>
        <p className="mt-2 text-sm text-slate-200">{impact}</p>
      </div>
    </Link>
  );
}