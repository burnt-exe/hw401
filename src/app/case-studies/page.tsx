import Link from "next/link";
import { WarningAlt, ArrowRight } from "@carbon/icons-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
  return (
    <section className="cds--grid">
      <div className="cds--row">
        <div className="cds--col-sm-4 cds--col-md-8 cds--col-lg-16">
          <section className="hw-hero">
            <div className="hw-eyebrow">Case studies</div>
            <h1 className="hw-title">Major cyber incidents</h1>
            <p className="hw-subtitle">
              Analyze operational, strategic, and military implications across high-impact cyber campaigns.
            </p>
          </section>
        </div>
      </div>

      <div className="cds--row">
        {caseStudies.map((study) => (
          <div
            key={study.slug}
            className="cds--col-sm-4 cds--col-md-4 cds--col-lg-8"
            style={{ marginBottom: "1rem" }}
          >
            <Link href={`/case-studies/${study.slug}`} className="cds--tile hw-tile">
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">{study.category}</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                    {study.title}
                  </h2>
                </div>
                <ArrowRight size={20} />
              </div>

              <p className="hw-desc">{study.summary}</p>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "var(--cds-layer-accent)",
                  borderLeft: "4px solid var(--cds-support-warning)"
                }}
              >
                <div className="hw-kicker" style={{ marginBottom: "0.35rem" }}>
                  Strategic impact
                </div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "start" }}>
                  <WarningAlt size={18} style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.6 }}>{study.impact}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}