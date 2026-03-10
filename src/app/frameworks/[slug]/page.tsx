import { notFound } from "next/navigation";
import { frameworks } from "@/lib/frameworks";
import { MarkCompleteButton } from "@/components/progress/mark-complete-button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function FrameworkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = frameworks.find((framework) => framework.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <section className="rounded-3xl border border-white/10 bg-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">{item.category}</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-white">{item.title}</h1>
          <p className="mt-4 text-slate-300">{item.summary}</p>
          <div className="mt-6">
            <MarkCompleteButton storageKey={`hw401-${item.slug}-complete`} />
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Key Points</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {item.points.map((point, index) => (
              <li key={point} className="rounded-xl bg-slate-800/60 px-4 py-3">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">Point {index + 1}</div>
                <div className="mt-1">{point}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}