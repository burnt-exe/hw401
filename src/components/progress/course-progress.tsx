"use client";

import { useEffect, useState } from "react";
import { ProgressTracker } from "@/components/progress/progress-tracker";

export function CourseProgress() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const value = window.localStorage.getItem("hw401-progress-completed");
    setCompleted(value ? Number(value) : 0);
  }, []);

  return <ProgressTracker completed={completed} total={11} />;
}