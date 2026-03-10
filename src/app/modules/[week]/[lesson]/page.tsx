import Link from "next/link";
import { notFound } from "next/navigation";
import { Document, ArrowLeft, NotebookReference, UserFollow } from "@carbon/icons-react";
import { getLessonContent } from "@/lib/module-content";
import { MarkCompleteButton } from "@/components/progress/mark-complete-button";
import { ModuleSidebar } from "@/components/navigation/module-sidebar";

type PageProps = {
  params: Promise<{ week: string; lesson: string }>;
};

export default async function LessonDetailPage({ params }: PageProps) {
  const { week, lesson } = await params;
  const result = getLessonContent(week, lesson);

  if (!result) {
    notFound();
  }

  const { moduleData, lessonData } = result;

  return (
    <section className="cds--grid">
      <div className="cds--row">
        <div className="cds--col-sm-4 cds--col-md-2 cds--col-lg-4" style={{ marginBottom: "1rem" }}>
          <div style={{ position: "sticky", top: "5rem" }}>
            <ModuleSidebar currentWeek={week} />
          </div>
        </div>

        <div className="cds--col-sm-4 cds--col-md-6 cds--col-lg-12">
          <div style={{ display: "grid", gap: "1rem" }}>
            <section className="hw-hero">
              <div className="hw-eyebrow">{moduleData.title} · Lesson</div>
              <h1 className="hw-title" style={{ fontSize: "2.75rem" }}>
                {lessonData.title}
              </h1>
              <p className="hw-subtitle">{lessonData.summary}</p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Link href={`/modules/${moduleData.slug}`} className="cds--btn cds--btn--secondary">
                  <ArrowLeft size={20} style={{ marginRight: "0.5rem" }} />
                  Back to module
                </Link>

                <MarkCompleteButton storageKey={`hw401-${moduleData.slug}-${lessonData.slug}-complete`} />
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Lesson content</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>Core explanation</h2>
                </div>
                <Document size={20} />
              </div>

              <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
                {lessonData.content.map((paragraph) => (
                  <div
                    key={paragraph}
                    style={{
                      padding: "1rem",
                      background: "var(--cds-layer-accent)",
                      borderLeft: "4px solid var(--cds-interactive)",
                      lineHeight: 1.7
                    }}
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Reading task</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>Student activity</h2>
                </div>
                <NotebookReference size={20} />
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "var(--cds-layer-accent)",
                  borderLeft: "4px solid var(--cds-support-info)"
                }}
              >
                <p style={{ margin: 0, lineHeight: 1.7 }}>
                  {lessonData.reading ?? "No reading task has been defined for this lesson yet."}
                </p>
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Instructor note</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>Delivery guidance</h2>
                </div>
                <UserFollow size={20} />
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "var(--cds-layer-accent)",
                  borderLeft: "4px solid var(--cds-support-warning)"
                }}
              >
                <p style={{ margin: 0, lineHeight: 1.7 }}>
                  {lessonData.instructorNote ?? "No instructor note has been defined for this lesson yet."}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}