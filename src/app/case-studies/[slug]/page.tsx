import { notFound } from "next/navigation";
import { WarningAlt, Document, Idea } from "@carbon/icons-react";
import { caseStudies } from "@/lib/case-studies";
import { MarkCompleteButton } from "@/components/progress/mark-complete-button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="cds--grid">
      <div className="cds--row">
        <div className="cds--col-sm-4 cds--col-md-8 cds--col-lg-12">
          <div style={{ display: "grid", gap: "1rem" }}>
            <section className="hw-hero">
              <div className="hw-eyebrow">{study.category}</div>
              <h1 className="hw-title" style={{ fontSize: "2.75rem" }}>
                {study.title}
              </h1>
              <p className="hw-subtitle">{study.summary}</p>

              <div style={{ marginTop: "1.5rem" }}>
                <MarkCompleteButton storageKey={`hw401-${study.slug}-complete`} />
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Strategic effect</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                    Impact assessment
                  </h2>
                </div>
                <WarningAlt size={20} />
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "var(--cds-layer-accent)",
                  borderLeft: "4px solid var(--cds-support-warning)"
                }}
              >
                <p style={{ margin: 0, lineHeight: 1.7 }}>{study.impact}</p>
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Operational analysis</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                    Key lessons
                  </h2>
                </div>
                <Idea size={20} />
              </div>

              <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
                {study.lessons.map((lesson, index) => (
                  <div
                    key={lesson}
                    style={{
                      padding: "1rem",
                      background: "var(--cds-layer-accent)",
                      border: "1px solid var(--cds-border-subtle)"
                    }}
                  >
                    <div className="hw-kicker">Lesson {index + 1}</div>
                    <div style={{ marginTop: "0.4rem", lineHeight: 1.6 }}>{lesson}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="cds--col-sm-4 cds--col-md-8 cds--col-lg-4">
          <aside className="cds--tile" style={{ padding: "1.5rem" }}>
            <div className="hw-tile-header">
              <div>
                <div className="hw-kicker">Study record</div>
                <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                  Incident profile
                </h2>
              </div>
              <Document size={20} />
            </div>

            <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
              <div>
                <div className="hw-kicker">Title</div>
                <div style={{ marginTop: "0.35rem" }}>{study.title}</div>
              </div>

              <div>
                <div className="hw-kicker">Category</div>
                <div style={{ marginTop: "0.35rem" }}>{study.category}</div>
              </div>

              <div>
                <div className="hw-kicker">Use in course</div>
                <div style={{ marginTop: "0.35rem", lineHeight: 1.6, color: "var(--cds-text-secondary)" }}>
                  Supports strategic analysis, infrastructure security, escalation risk,
                  and doctrine discussion in fifth-domain operations.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}