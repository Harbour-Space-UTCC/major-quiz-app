"use client";
import React, { useId } from "react";
import type { Question } from "@/lib/quiz";

export function QuestionCard({
  question,
  selectedIndex,
  onSelect,
  onSubmit,
}: {
  question: Question;
  selectedIndex?: number;
  onSelect: (idx: number) => void;
  onSubmit?: () => void;
}) {
  const groupId = useId();
  const hintId = `${groupId}-hint`;
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <fieldset
      className="mb-8"
      onKeyDown={(e) => {
        if (e.key === "Enter" && selectedIndex !== undefined) {
          if (onSubmit) {
            e.preventDefault();
            onSubmit();
          }
        }
      }}
    >
      <legend className="text-2xl font-bold text-white mb-3">
        {question.question}
      </legend>
      <p id={hintId} className="text-white-40 text-sm mb-3">
        Use arrow keys or click to select an answer.
      </p>

      <div className="space-y-3" aria-describedby={hintId}>
        {question.answers.map((answer, idx) => {
          const checked = selectedIndex === idx;
          const optionId = `${groupId}-opt-${idx}`;
          return (
            <label
              key={idx}
              htmlFor={optionId}
              className={`group relative flex items-start gap-3 w-full p-4 rounded-xl transition-all hover:scale-[1.01] cursor-pointer border ${
                checked
                  ? "bg-white-100 text-primary-600 shadow-lg border-white-100"
                  : "bg-white-16 text-white hover:bg-white-40 border-white-40"
              } focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[rgba(62,55,122,0.6)]`}
            >
              <input
                id={optionId}
                name={groupId}
                type="radio"
                className="sr-only peer"
                checked={checked}
                onChange={() => onSelect(idx)}
                aria-checked={checked}
              />
              <span
                aria-hidden
                className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  checked
                    ? "bg-primary-600 text-white"
                    : "bg-white-40 text-white"
                }`}
              >
                {letters[idx] ?? String(idx + 1)}
              </span>
              <span className="flex-1 leading-relaxed">{answer.text}</span>
              <span
                aria-hidden
                className={`ml-3 mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                  checked
                    ? "border-primary-600 bg-primary-600"
                    : "border-white-40"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full bg-white transition-opacity ${
                    checked ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
