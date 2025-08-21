'use client'
import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuiz } from '@/hooks/useQuiz';
import { playSuccess, playTick } from '@/lib/sfx';
import { StartScreen } from '@/components/StartScreen';
import { ResultsView } from '@/components/ResultsView';
import { ProgressBar } from '@/components/ProgressBar';
import { QuestionCard } from '@/components/QuestionCard';

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

  const selected = answers[currentQuestion];
  const isLast = currentQuestion === questions.length - 1;
  const optionsCount = questions[currentQuestion].answers.length;

  useEffect(() => {
    if (!quizStarted || showResults) return;
    const onKeyDown = (e: KeyboardEvent) => {
      // Ignore when user is interacting with inputs to preserve native behavior
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      const isEditable = (target as HTMLElement | null)?.isContentEditable;
      if (
        target &&
        (isEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON')
      ) {
        return;
      }
      const key = e.key;
      if (key === 'ArrowDown' || key === 'ArrowRight') {
        e.preventDefault();
        const next = selected === undefined ? 0 : Math.min((selected as number) + 1, optionsCount - 1);
        handleAnswer(next);
      } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
        e.preventDefault();
        const prev = selected === undefined ? 0 : Math.max((selected as number) - 1, 0);
        handleAnswer(prev);
      } else if (key === 'Enter') {
        if (selected === undefined) return;
        e.preventDefault();
        if (isLast) {
          show();
        } else {
          nextQuestion();
        }
      } else if (key === 'Escape') {
        e.preventDefault();
        if (currentQuestion > 0) prevQuestion();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [quizStarted, showResults, selected, optionsCount, isLast, currentQuestion, handleAnswer, nextQuestion, prevQuestion, show]);

  if (!quizStarted) return <StartScreen onStart={() => { startQuiz(); playTick(); }} />;
  if (showResults && results) return <ResultsView results={results} onReset={() => { resetQuiz(); playTick(); }} />;

  return (
    <div className="min-h-screen bg-aurora flex items-center justify-center p-4 pb-safe" role="application" aria-label="TechPath Quiz">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white-16 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white-40">
          <ProgressBar current={currentQuestion} total={questions.length} />

          <div className="mb-8" aria-live="polite">
            <QuestionCard
              question={questions[currentQuestion]}
              selectedIndex={selected}
              onSelect={handleAnswer}
              onSubmit={() => {
                if (selected === undefined) return;
                if (isLast) return show();
                nextQuestion();
              }}
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 sm:justify-between">
            <button
              type="button"
              onClick={() => {
                if (currentQuestion === 0) return resetQuiz();
                prevQuestion();
                playTick();
              }}
              aria-label={currentQuestion === 0 ? 'Back to start' : 'Previous question'}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(62,55,122,0.6)] bg-white-16 text-white hover:bg-white-40 cursor-pointer w-full sm:w-auto`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            
            <button
              type="button"
              onClick={() => {
                if (selected === undefined) return;
                if (isLast) { playSuccess(); return show(); }
                nextQuestion();
                playTick();
              }}
              disabled={selected === undefined}
              aria-disabled={selected === undefined}
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(62,55,122,0.6)] w-full sm:w-auto ${
                selected === undefined
                  ? 'bg-white-16 text-white-40 cursor-not-allowed'
                  : 'bg-white-100 text-primary-600 hover:bg-neutral-100 cursor-pointer'
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
