import Link from "next/link";
import { ArrowRight, Notebook } from "@carbon/icons-react";

type Lesson = {
  title: string;
  summary: string;
};

type ModuleTileProps = {
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export function ModuleTile({
  slug,
  title,
  description,
  lessons
}: ModuleTileProps) {
  return (
    <Link href={`/modules/${slug}`} className="cds--tile hw-tile">
      <div className="hw-tile-header">
        <div>
          <div className="hw-kicker">Module</div>
          <h3 style={{ margin: "0.25rem 0 0 0", fontSize: "1.25rem", fontWeight: 400 }}>
            {title}
          </h3>
        </div>
        <ArrowRight size={20} />
      </div>

      <p className="hw-desc">{description}</p>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
        <Notebook size={18} />
        <span className="hw-stat">{lessons.length} lessons</span>
      </div>

      <ul className="hw-list">
        {lessons.map((lesson) => (
          <li key={lesson.title}>{lesson.title}</li>
        ))}
      </ul>
    </Link>
  );
}