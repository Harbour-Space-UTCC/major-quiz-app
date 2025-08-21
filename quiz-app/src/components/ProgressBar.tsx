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
        className="w-full bg-white-16 rounded-full h-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
      >
        <div
          className="h-2 rounded-full transition-[width] duration-500 ease-out bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 animate-[shimmer_1.6s_linear_infinite] [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="sr-only">{progress}% completed</span>
    </div>
  );
}

/* Tailwind v4 CSS: define shimmer keyframes in global scope */
