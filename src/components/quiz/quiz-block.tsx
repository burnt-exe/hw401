"use client";

import { useMemo, useState } from "react";

type QuizQuestion = {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

type QuizBlockProps = {
  title: string;
  questions: QuizQuestion[];
};

export function QuizBlock({ title, questions }: QuizBlockProps) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return total + (selected[index] === question.correctIndex ? 1 : 0);
    }, 0);
  }, [questions, selected]);

  return (
    <section className="cds--tile" style={{ padding: "1.5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ color: "var(--cds-text-secondary)", marginBottom: "0.5rem" }}>
          Knowledge check
        </div>
        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 400 }}>{title}</h2>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {questions.map((question, qIndex) => (
          <div
            key={question.question}
            style={{
              border: "1px solid var(--cds-border-subtle)",
              padding: "1rem",
              background: "var(--cds-layer-accent)"
            }}
          >
            <div style={{ color: "var(--cds-text-secondary)", marginBottom: "0.5rem" }}>
              Question {qIndex + 1}
            </div>

            <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 400 }}>
              {question.question}
            </h3>

            <div style={{ display: "grid", gap: "0.75rem", marginTop: "1rem" }}>
              {question.choices.map((choice, cIndex) => {
                const isSelected = selected[qIndex] === cIndex;
                const isCorrect = question.correctIndex === cIndex;

                let border = "1px solid var(--cds-border-subtle)";
                let background = "var(--cds-layer)";
                let color = "var(--cds-text-primary)";

                if (!submitted && isSelected) {
                  border = "1px solid var(--cds-border-interactive)";
                  background = "rgba(15, 98, 254, 0.12)";
                }

                if (submitted && isCorrect) {
                  border = "1px solid #24a148";
                  background = "rgba(36, 161, 72, 0.14)";
                } else if (submitted && isSelected && !isCorrect) {
                  border = "1px solid #da1e28";
                  background = "rgba(218, 30, 40, 0.14)";
                }

                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setSelected((prev) => ({
                        ...prev,
                        [qIndex]: cIndex
                      }))
                    }
                    style={{
                      textAlign: "left",
                      padding: "0.875rem 1rem",
                      border,
                      background,
                      color,
                      cursor: submitted ? "default" : "pointer"
                    }}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.875rem 1rem",
                  borderLeft: "4px solid var(--cds-interactive)",
                  background: "var(--cds-layer)"
                }}
              >
                <div style={{ color: "var(--cds-text-secondary)", marginBottom: "0.25rem" }}>
                  Explanation
                </div>
                <div>{question.explanation}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "1.5rem", flexWrap: "wrap" }}>
        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="cds--btn cds--btn--primary"
          >
            Submit quiz
          </button>
        ) : (
          <>
            <div
              style={{
                padding: "0.75rem 1rem",
                border: "1px solid var(--cds-border-subtle)",
                background: "var(--cds-layer)"
              }}
            >
              Score: {score} / {questions.length}
            </div>
            <button
              type="button"
              onClick={() => {
                setSelected({});
                setSubmitted(false);
              }}
              className="cds--btn cds--btn--secondary"
            >
              Retry quiz
            </button>
          </>
        )}
      </div>
    </section>
  );
}