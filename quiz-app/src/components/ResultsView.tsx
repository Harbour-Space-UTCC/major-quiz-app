"use client";
import { RotateCcw } from "lucide-react";
import type { QuizResult } from "@/lib/quiz";
import { MajorIcon } from "@/components/Icons";

export function ResultsView({ results, onReset }: { results: QuizResult[]; onReset: () => void }) {
  const topMatch = results[0];
  return (
    <div className="min-h-screen bg-primary p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Your Perfect Match!</h1>
            <p className="text-white/80">Based on your answers, here are your top tech major recommendations:</p>
          </div>

          <div className={`bg-gradient-to-r ${topMatch.color} rounded-2xl p-8 mb-8 text-white`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <MajorIcon name={topMatch.icon} />
                <div>
                  <h2 className="text-2xl font-bold">{topMatch.name}</h2>
                  <p className="text-white/80">Your #1 Match</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{topMatch.percentage}%</div>
                <p className="text-white/80">Match</p>
              </div>
            </div>

            <p className="text-lg mb-6">{topMatch.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">Key Skills:</h3>
                <ul className="space-y-1">
                  {topMatch.skills.map((skill, idx) => (
                    <li key={idx} className="text-white/90">• {skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Career Paths:</h3>
                <ul className="space-y-1">
                  {topMatch.careers.map((career, idx) => (
                    <li key={idx} className="text-white/90">• {career}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-6 pt-6 border-t border-white/20">
              <div>
                <p className="text-white/80">Salary Range</p>
                <p className="font-bold text-lg">{topMatch.salary}</p>
              </div>
              <div>
                <p className="text-white/80">Job Growth</p>
                <p className="font-bold text-lg">{topMatch.growth}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {results.slice(1, 3).map((result, idx) => (
              <div key={result.major} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`bg-gradient-to-r ${result.color} p-2 rounded-lg text-white`}>
                    <MajorIcon name={result.icon} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{result.name}</h3>
                    <p className="text-white/60">#{idx + 2} Match - {result.percentage}%</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-3">{result.description}</p>
                <div className="text-xs text-white/60">
                  <p>Salary: {result.salary} • Growth: {result.growth}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={onReset}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
