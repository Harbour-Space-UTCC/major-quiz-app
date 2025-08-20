"use client";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = Math.round(((current + 1) / total) * 100);
  return (
    <div className="mb-8" aria-live="polite">
      <div className="flex justify-between text-white text-sm mb-2">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{progress}% Complete</span>
      </div>
      <div
        className="w-full bg-white-16 rounded-full h-2"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
      >
        <div
          className="bg-primary-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="sr-only">{progress}% completed</span>
    </div>
  );
}
