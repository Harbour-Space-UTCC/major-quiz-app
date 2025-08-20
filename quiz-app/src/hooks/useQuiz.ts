"use client";
import { useMemo, useState, useCallback } from "react";
import { majors, questions, type MajorKey, type QuizResult } from "@/lib/quiz";

export function useQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = useCallback((answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answerIndex }));
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  }, []);

  const prevQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  }, []);

  const results = useMemo<QuizResult[] | null>(() => {
    if (!showResults) return null;

    const scores: Record<MajorKey, number> = {
      ux: 0,
      marketing: 0,
      entrepreneur: 0,
      cs: 0,
      data: 0,
      cyber: 0,
    };

    Object.entries(answers).forEach(([qIdx, aIdx]) => {
      const idxQ = Number(qIdx);
      const answer = questions[idxQ]?.answers?.[aIdx as number];
      if (!answer) return;
      Object.entries(answer.scores).forEach(([major, points]) => {
        const m = major as MajorKey;
        scores[m] += points || 0;
      });
    });

    const maxScore = questions.length * 3;
    return (Object.entries(scores) as [MajorKey, number][]) 
      .map(([key, score]) => ({
        major: key,
        score,
        percentage: Math.round((score / maxScore) * 100),
        ...majors[key],
      }))
      .sort((a, b) => b.score - a.score);
  }, [answers, showResults]);

  const progress = useMemo(
    () => ((currentQuestion + 1) / questions.length) * 100,
    [currentQuestion]
  );

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  }, []);

  const startQuiz = useCallback(() => setQuizStarted(true), []);
  const show = useCallback(() => setShowResults(true), []);

  return {
    majors,
    questions,
    // state
    currentQuestion,
    answers,
    showResults,
    quizStarted,
    results,
    progress,
    // actions
    handleAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    startQuiz,
    show,
  } as const;
}

