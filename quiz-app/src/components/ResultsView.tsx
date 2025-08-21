"use client";
import { RotateCcw } from "lucide-react";
import type { QuizResult } from "@/lib/quiz";
import { MajorBadge } from "@/components/MajorBadge";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { ShareResults } from "@/components/ShareResults";
import { playSuccess } from "@/lib/sfx";
import { useEffect } from "react";

export function ResultsView({ results, onReset }: { results: QuizResult[]; onReset: () => void }) {
  const topMatch = results[0];
  useEffect(() => {
    playSuccess();
  }, []);
  return (
    <div className="relative min-h-screen bg-aurora p-4 pb-safe" role="region" aria-label="Quiz results">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white-16 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white-40">
          <ConfettiBurst />
          <div className="text-center mb-8" aria-live="polite">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Your Perfect Match!</h1>
            <p className="text-white-40 text-sm md:text-base">Based on your answers, here are your top tech major recommendations:</p>
          </div>

          <div className={`bg-[image:var(--gradient-purple-50)] rounded-2xl p-5 md:p-8 mb-8 text-primary-600`}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <MajorBadge major={topMatch.major} className="w-14 h-14" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">{topMatch.name}</h2>
                  <p className="text-neutral-700 text-sm md:text-base">Your #1 Match</p>
                </div>
              </div>
              <div
                className="relative h-20 w-20 rounded-full"
                role="progressbar"
                aria-valuenow={topMatch.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Top match percentage"
                style={{
                  background: `conic-gradient(var(--color-primary-600) ${topMatch.percentage}%, rgba(0,0,0,0.08) 0)`,
                }}
              >
                <div className="absolute inset-1 rounded-full bg-[image:var(--gradient-purple-50)] flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-600">{topMatch.percentage}%</span>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg mt-6 mb-4 text-primary-600">{topMatch.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 text-sm md:text-base">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {topMatch.skills.map((skill, idx) => (
                    <span key={idx} className="inline-flex items-center rounded-full bg-white-100 text-primary-600 px-3 py-1 text-xs font-medium border border-white-40">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-sm md:text-base">Career Paths</h3>
                <div className="flex flex-wrap gap-2">
                  {topMatch.careers.map((career, idx) => (
                    <span key={idx} className="inline-flex items-center rounded-full bg-white-100 text-primary-600 px-3 py-1 text-xs font-medium border border-white-40">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-100">
              <div>
                <p className="text-neutral-700 text-sm md:text-base">Salary Range</p>
                <p className="font-bold text-base md:text-lg text-primary-600">{topMatch.salary}</p>
              </div>
              <div>
                <p className="text-neutral-700 text-sm md:text-base">Job Growth</p>
                <p className="font-bold text-base md:text-lg text-primary-600">{topMatch.growth}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {results.slice(1, 3).map((result, idx) => (
              <div key={result.major} className="bg-white-16 rounded-xl p-6 border border-white-40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`bg-[image:var(--gradient-purple-50)] p-2 rounded-lg text-primary-600`}>
                      <MajorBadge major={result.major} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm md:text-base">{result.name}</h3>
                      <p className="text-white-40 text-xs md:text-sm">#{idx + 2} Match</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-white">{result.percentage}%</span>
                  </div>
                </div>
                <div className="w-full bg-white-16 rounded-full h-1.5">
                  <div className="bg-primary-400 h-1.5 rounded-full transition-all" style={{ width: `${result.percentage}%` }} />
                </div>
                <p className="text-white-40 text-xs md:text-sm mt-3 mb-2">{result.description}</p>
                <div className="text-xs text-white-40">
                  <p>Salary: {result.salary} • Growth: {result.growth}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onReset}
              className="flex items-center justify-center gap-2 bg-white-16 hover:bg-white-40 text-white px-6 py-4 rounded-xl font-medium transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(62,55,122,0.6)] w-full md:w-auto"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
          <ShareResults results={results} />
        </div>
      </div>
    </div>
  );
}
