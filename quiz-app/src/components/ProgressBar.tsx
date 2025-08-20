"use client";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = Math.round(((current + 1) / total) * 100);
  return (
    <div className="mb-8">
      <div className="flex justify-between text-white/60 text-sm mb-2">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{progress}% Complete</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

