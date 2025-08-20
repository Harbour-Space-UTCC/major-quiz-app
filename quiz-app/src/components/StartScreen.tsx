"use client";
import { MajorIcon } from "@/components/Icons";
import { majors } from "@/lib/quiz";

export function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white-16 backdrop-blur-lg rounded-3xl p-8 border border-white-40">
          <h1 className="text-5xl font-bold text-white mb-4">TechPath Quiz</h1>
          <p className="text-xl text-white mb-8">
            Discover your perfect tech major in just 3 minutes!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(majors).map(([key, major]) => (
              <div key={key} className={`bg-[image:var(--gradient-purple-50)] p-4 rounded-xl text-primary-600 text-center`}>
                <div className="flex justify-center mb-2">
                  <MajorIcon name={major.icon} />
                </div>
                <p className="text-sm font-medium">{major.name}</p>
              </div>
            ))}
          </div>

          <div className="text-white mb-8">
            <p className="mb-2">✨ 10 smart questions</p>
            <p className="mb-2">🎯 Personalized recommendations</p>
            <p className="mb-2">💼 Real career insights</p>
          </div>

          <button
            type="button"
            onClick={onStart}
            aria-label="Start the TechPath Quiz"
            className="bg-white-100 text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all transform hover:scale-105 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(62,55,122,0.6)]"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
