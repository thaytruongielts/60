import React from 'react';
import { Question, UserAnswers } from '../types';
import QuestionCard from './QuestionCard';

interface QuizProps {
  questions: Question[];
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: string | boolean) => void;
  onSubmit: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, userAnswers, onAnswerChange, onSubmit }) => {
  // FIX: Explicitly type the accumulator for the reduce function to ensure correct type inference.
  const sections = questions.reduce<Record<string, Question[]>>((acc, q) => {
    if (!acc[q.section]) {
      acc[q.section] = [];
    }
    acc[q.section].push(q);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {Object.entries(sections).map(([sectionTitle, sectionQuestions]) => (
        <div key={sectionTitle} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-3">{sectionTitle}</h2>
          <div className="space-y-6">
            {sectionQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                userAnswer={userAnswers[question.id]}
                onAnswerChange={onAnswerChange}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-12">
        <button
          onClick={onSubmit}
          className="bg-green-600 text-white font-bold py-3 px-12 rounded-full hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default Quiz;
