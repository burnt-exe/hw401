import { notFound } from "next/navigation";
import { concepts } from "@/lib/concepts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ConceptDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = concepts.find((concept) => concept.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">{item.category}</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-white">{item.title}</h1>
        <p className="mt-4 text-slate-300">{item.summary}</p>
      </div>
    </section>
  );
}