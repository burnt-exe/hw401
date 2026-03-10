import Link from "next/link";
import { getAllModuleContent } from "@/lib/module-content";

type ModuleSidebarProps = {
  currentWeek: string;
};

export function ModuleSidebar({ currentWeek }: ModuleSidebarProps) {
  const modules = getAllModuleContent();

  return (
    <aside
      className="cds--tile"
      style={{
        padding: "1rem",
        borderLeft: "4px solid var(--cds-interactive)"
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--cds-text-secondary)",
          marginBottom: "1rem"
        }}
      >
        Modules
      </div>

      <nav style={{ display: "grid", gap: "0.5rem" }}>
        {modules.map((module) => {
          const active = module.slug === currentWeek;

          return (
            <Link
              key={module.slug}
              href={`/modules/${module.slug}`}
              style={{
                display: "block",
                padding: "0.875rem 1rem",
                border: active
                  ? "1px solid var(--cds-border-interactive)"
                  : "1px solid var(--cds-border-subtle)",
                background: active
                  ? "rgba(15, 98, 254, 0.12)"
                  : "var(--cds-layer)",
                color: "var(--cds-text-primary)"
              }}
            >
              <div style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
                {module.title}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--cds-text-secondary)",
                  lineHeight: 1.5
                }}
              >
                {module.description}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}