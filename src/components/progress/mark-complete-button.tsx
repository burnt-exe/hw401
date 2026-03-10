"use client";

import { useEffect, useState } from "react";

type MarkCompleteButtonProps = {
  storageKey: string;
};

export function MarkCompleteButton({ storageKey }: MarkCompleteButtonProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const value = window.localStorage.getItem(storageKey);
    setDone(value === "true");
  }, [storageKey]);

  function handleClick() {
    const nextDone = !done;
    window.localStorage.setItem(storageKey, String(nextDone));

    const trackedKeys = [
      "hw401-week1-complete",
      "hw401-week2-complete",
      "hw401-week3-complete",
      "hw401-stuxnet-complete",
      "hw401-notpetya-complete",
      "hw401-ukraine-power-grid-complete",
      "hw401-solarwinds-complete",
      "hw401-colonial-pipeline-complete",
      "hw401-tallinn-manual-complete",
      "hw401-cyber-deterrence-complete",
      "hw401-ooda-in-cyber-complete"
    ];

    const completedCount = trackedKeys.filter(
      (key) => key === storageKey ? nextDone : window.localStorage.getItem(key) === "true"
    ).length;

    window.localStorage.setItem("hw401-progress-completed", String(completedCount));
    setDone(nextDone);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={done ? "cds--btn cds--btn--tertiary" : "cds--btn cds--btn--primary"}
    >
      {done ? "Completed" : "Mark as complete"}
    </button>
  );
}