
import React from 'react';
import { Question, QuestionType } from '../types';

interface QuestionCardProps {
  question: Question;
  userAnswer?: string | boolean;
  onAnswerChange: (questionId: string, answer: string | boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, userAnswer, onAnswerChange }) => {
  const renderInput = () => {
    switch (question.type) {
      case QuestionType.MULTIPLE_CHOICE:
      case QuestionType.TRUE_FALSE:
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <label key={index} className="flex items-center p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-indigo-50 transition-colors has-[:checked]:bg-indigo-100 has-[:checked]:border-indigo-400">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={userAnswer === (question.type === QuestionType.TRUE_FALSE ? option === 'True' : option)}
                  onChange={() => onAnswerChange(question.id, question.type === QuestionType.TRUE_FALSE ? option === 'True' : option)}
                  className="h-5 w-5 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                />
                <span className="ml-4 text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        );
      case QuestionType.FILL_IN_THE_BLANK:
      case QuestionType.REWRITE_SENTENCE:
      case QuestionType.MAKE_SENTENCE:
        return (
          <input
            type="text"
            value={(userAnswer as string) || ''}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            className="mt-2 block w-full px-4 py-2 text-slate-900 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your answer here..."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-slate-200 pt-4">
      <p className="text-lg text-slate-800 font-medium mb-4" dangerouslySetInnerHTML={{ __html: question.prompt }} />
      {renderInput()}
    </div>
  );
};

export default QuestionCard;
