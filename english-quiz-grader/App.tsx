
import React, { useState, useMemo, useCallback } from 'react';
import { Question, UserAnswers } from './types';
import { QUIZ_QUESTIONS } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';
import ResultsScreen from './components/ResultsScreen';

type QuizState = 'welcome' | 'active' | 'results';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<Question[]>([]);

  const handleStartQuiz = useCallback(() => {
    setUserAnswers({});
    setResults([]);
    setQuizState('active');
  }, []);

  const handleAnswerChange = useCallback((questionId: string, answer: string | boolean) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);
  
  const handleSubmit = useCallback(() => {
    let correctCount = 0;
    const gradedResults = QUIZ_QUESTIONS.map(q => {
      const userAnswer = userAnswers[q.id];
      let isCorrect = false;

      if (userAnswer !== undefined) {
        if (typeof q.correctAnswer === 'boolean') {
           isCorrect = userAnswer === q.correctAnswer;
        } else {
           isCorrect = userAnswer.toString().trim().toLowerCase() === q.correctAnswer.toString().trim().toLowerCase();
        }
      }
      
      if (isCorrect) {
        correctCount++;
      }
      return { ...q, userAnswer, isCorrect };
    });
    setResults(gradedResults);
    setQuizState('results');
  }, [userAnswers]);

  const score = useMemo(() => {
    if (results.length === 0) return 0;
    const correctCount = results.filter(r => r.isCorrect).length;
    return (10 * correctCount) / QUIZ_QUESTIONS.length;
  }, [results]);

  const renderContent = () => {
    switch (quizState) {
      case 'active':
        return (
          <Quiz
            questions={QUIZ_QUESTIONS}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onSubmit={handleSubmit}
          />
        );
      case 'results':
        return (
          <ResultsScreen
            score={score}
            results={results}
            onRetry={handleStartQuiz}
          />
        );
      case 'welcome':
      default:
        return (
          <WelcomeScreen onStart={handleStartQuiz} totalQuestions={QUIZ_QUESTIONS.length} />
        );
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 flex flex-col items-center p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-5xl mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">English Language Quiz</h1>
        <p className="text-slate-600 mt-2 text-lg">6th Grade Mid-Term Assessment</p>
      </header>
      <main className="w-full max-w-5xl">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
