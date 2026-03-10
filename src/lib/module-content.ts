import type { Lesson, ModuleContent } from "@/types/course";
import week1 from "@/content/modules/week1/index.json";
import week2 from "@/content/modules/week2/index.json";
import week3 from "@/content/modules/week3/index.json";

const moduleMap: Record<string, ModuleContent> = {
  week1: week1 as ModuleContent,
  week2: week2 as ModuleContent,
  week3: week3 as ModuleContent
};

export function getAllModuleContent(): ModuleContent[] {
  return Object.values(moduleMap);
}

export function getModuleContent(slug: string): ModuleContent | undefined {
  return moduleMap[slug];
}

export function getLessonContent(moduleSlug: string, lessonSlug: string): {
  moduleData: ModuleContent;
  lessonData: Lesson;
} | undefined {
  const moduleData = moduleMap[moduleSlug];

  if (!moduleData) {
    return undefined;
  }

  const lessonData = moduleData.lessons.find((lesson) => lesson.slug === lessonSlug);

  if (!lessonData) {
    return undefined;
  }

  return { moduleData, lessonData };
}