import Link from "next/link";
import { notFound } from "next/navigation";
import { Document, CheckboxChecked, WatsonHealth3DSoftware, ArrowRight } from "@carbon/icons-react";
import { quizData } from "@/lib/quiz-data";
import { getModuleContent } from "@/lib/module-content";
import { ModuleSidebar } from "@/components/navigation/module-sidebar";
import { MarkCompleteButton } from "@/components/progress/mark-complete-button";
import { QuizBlock } from "@/components/quiz/quiz-block";

type PageProps = {
  params: Promise<{ week: string }>;
};

export default async function ModulePage({ params }: PageProps) {
  const { week } = await params;
  const moduleData = getModuleContent(week);

  if (!moduleData) {
    notFound();
  }

  const moduleQuiz = quizData[week as keyof typeof quizData] ?? [];

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
              <div className="hw-eyebrow">Module</div>
              <h1 className="hw-title" style={{ fontSize: "2.75rem" }}>
                {moduleData.title}
              </h1>
              <p className="hw-subtitle">{moduleData.description}</p>

              <div style={{ marginTop: "1.5rem" }}>
                <MarkCompleteButton storageKey={`hw401-${moduleData.slug}-complete`} />
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Learning objectives</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>Objectives</h2>
                </div>
                <CheckboxChecked size={20} />
              </div>

              <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
                {moduleData.objectives.map((objective, index) => (
                  <div
                    key={objective}
                    style={{
                      padding: "1rem",
                      background: "var(--cds-layer-accent)",
                      borderLeft: "4px solid var(--cds-interactive)"
                    }}
                  >
                    <div className="hw-kicker">Objective {index + 1}</div>
                    <div style={{ marginTop: "0.4rem", lineHeight: 1.6 }}>{objective}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Lesson sequence</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>Lessons</h2>
                </div>
                <Document size={20} />
              </div>

              <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
                {moduleData.lessons.map((lesson, index) => (
                  <Link
                    key={lesson.slug}
                    href={`/modules/${moduleData.slug}/${lesson.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <article
                      className="hw-tile"
                      style={{
                        padding: "1rem",
                        background: "var(--cds-layer-accent)",
                        border: "1px solid var(--cds-border-subtle)"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "1rem",
                          alignItems: "start"
                        }}
                      >
                        <div>
                          <div className="hw-kicker">Lesson {index + 1}</div>
                          <h3 style={{ margin: "0.35rem 0 0 0", fontWeight: 400 }}>
                            {lesson.title}
                          </h3>
                        </div>
                        <ArrowRight size={18} />
                      </div>

                      <p className="hw-desc" style={{ marginBottom: 0 }}>
                        {lesson.summary}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </section>

            {moduleQuiz.length > 0 && (
              <section>
                <div style={{ marginBottom: "1rem" }}>
                  <div className="hw-kicker">Assessment</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                    Knowledge check
                  </h2>
                </div>
                <QuizBlock
                  title={`${moduleData.title} Knowledge Check`}
                  questions={moduleQuiz}
                />
              </section>
            )}

            <section className="cds--tile" style={{ padding: "1.5rem" }}>
              <div className="hw-tile-header">
                <div>
                  <div className="hw-kicker">Operational lens</div>
                  <h2 style={{ margin: "0.25rem 0 0 0", fontWeight: 400 }}>
                    Military relevance
                  </h2>
                </div>
                <WatsonHealth3DSoftware size={20} />
              </div>

              <p className="hw-desc" style={{ marginTop: "1rem", marginBottom: 0 }}>
                This module supports analysis of how cyber operations generate strategic,
                operational, and cognitive effects across contested environments.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}