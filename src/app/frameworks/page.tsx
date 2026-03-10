import Link from "next/link";
import { frameworks } from "@/lib/frameworks";

export default function FrameworksPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Frameworks
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
          Strategic and Legal Frameworks
        </h1>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {frameworks.map((item) => (
          <Link
            key={item.slug}
            href={`/frameworks/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">{item.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}