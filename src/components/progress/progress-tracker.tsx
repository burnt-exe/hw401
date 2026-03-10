"use client";

type ProgressTrackerProps = {
  completed: number;
  total: number;
};

export function ProgressTracker({ completed, total }: ProgressTrackerProps) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <span style={{ color: "var(--cds-text-secondary)" }}>Completion</span>
        <span>{percent}%</span>
      </div>

      <div
        style={{
          width: "100%",
          height: "0.5rem",
          background: "var(--cds-layer-accent)",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "var(--cds-interactive)"
          }}
        />
      </div>

      <div style={{ marginTop: "0.75rem", color: "var(--cds-text-secondary)", fontSize: "0.875rem" }}>
        {completed} of {total} learning units completed.
      </div>
    </div>
  );
}