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
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white-16 backdrop-blur-lg rounded-3xl p-8 border border-white-40">
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
                  className={`w-full p-4 rounded-xl text-left transition-all hover:scale-[1.02] cursor-pointer ${
                    selected === idx
                      ? 'bg-white-100 text-neutral-900 shadow-lg'
                      : 'bg-white-16 text-white hover:bg-white-40'
                  } border border-white-40`}
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
                  ? 'bg-white-16 text-white-40 cursor-not-allowed'
                  : 'bg-white-16 text-white hover:bg-white-40 cursor-pointer'
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
                  ? 'bg-white-16 text-white-40 cursor-not-allowed'
                  : 'bg-white-100 text-neutral-900 hover:bg-neutral-100 cursor-pointer'
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
