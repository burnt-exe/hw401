export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
  reading?: string;
  instructorNote?: string;
};

export type ModuleContent = {
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  lessons: Lesson[];
};