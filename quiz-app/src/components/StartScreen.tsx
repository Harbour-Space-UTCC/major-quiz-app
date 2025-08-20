"use client";
import { MajorIcon } from "@/components/Icons";
import { majors } from "@/lib/quiz";

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h1 className="text-5xl font-bold text-white mb-4">TechPath Quiz</h1>
          <p className="text-xl text-white/80 mb-8">
            Discover your perfect tech major in just 3 minutes!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(majors).map(([key, major]) => (
              <div key={key} className={`bg-gradient-to-r ${major.color} p-4 rounded-xl text-white text-center`}>
                <div className="flex justify-center mb-2">
                  <MajorIcon name={major.icon} />
                </div>
                <p className="text-sm font-medium">{major.name}</p>
              </div>
            ))}
          </div>

          <div className="text-white/70 mb-8">
            <p className="mb-2">✨ 10 smart questions</p>
            <p className="mb-2">🎯 Personalized recommendations</p>
            <p className="mb-2">💼 Real career insights</p>
          </div>

          <button
            onClick={onStart}
            className="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all transform hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
