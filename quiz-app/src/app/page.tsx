'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuiz } from '@/hooks/useQuiz';
import { StartScreen } from '@/components/StartScreen';
import { ResultsView } from '@/components/ResultsView';
import { ProgressBar } from '@/components/ProgressBar';

function MajorQuizApp() {
  const {
    questions,
    currentQuestion,
    answers,
    showResults,
    quizStarted,
    results,
    handleAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    startQuiz,
    show,
  } = useQuiz();

  if (!quizStarted) return <StartScreen onStart={startQuiz} />;
  if (showResults && results) return <ResultsView results={results} onReset={resetQuiz} />;

  const selected = answers[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <ProgressBar current={currentQuestion} total={questions.length} />

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all hover:scale-[1.02] ${
                    selected === idx
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } border border-white/20`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentQuestion === 0
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button
              onClick={() => {
                if (selected === undefined) return;
                if (isLast) return show();
                nextQuestion();
              }}
              disabled={selected === undefined}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                selected === undefined
                  ? 'bg-white/10 text-white/40 cursor-not-allowed'
                  : 'bg-white text-purple-900 hover:bg-white/90'
              }`}
            >
              {isLast ? 'Get Results' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MajorQuizApp;
