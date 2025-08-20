"use client";
import type { Question } from "@/lib/quiz";

export function QuestionCard({
  question,
  selectedIndex,
  onSelect,
}: {
  question: Question;
  selectedIndex?: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>

      <div className="space-y-3">
        {question.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full p-4 rounded-xl text-left transition-all hover:scale-[1.02] ${
              selectedIndex === idx
                ? "bg-white text-purple-900 shadow-lg"
                : "bg-white/10 text-white hover:bg-white/20"
            } border border-white/20`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

