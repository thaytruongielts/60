
import React from 'react';
import { Question } from '../types';

interface ResultsScreenProps {
  score: number;
  results: Question[];
  onRetry: () => void;
}

const CheckIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const XCircleIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, results, onRetry }) => {
  const scoreColor = score >= 8 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600">Here's how you did:</p>
        <p className={`text-7xl font-bold mt-4 ${scoreColor}`}>{score.toFixed(2)}</p>
        <p className="text-slate-500 font-medium">out of 10</p>
      </div>

      <div className="space-y-6 mb-8">
        <h3 className="text-2xl font-bold text-center text-indigo-800 border-b-2 border-indigo-200 pb-3">Answer Breakdown</h3>
        {results.map(result => (
          <div key={result.id} className="p-4 rounded-lg border flex items-start space-x-4" style={{ borderColor: result.isCorrect ? '#a7f3d0' : '#fecaca', backgroundColor: result.isCorrect ? '#f0fdf4' : '#fef2f2' }}>
            {result.isCorrect ? <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" /> : <XCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />}
            <div>
              <p className="text-slate-800 font-medium" dangerouslySetInnerHTML={{ __html: result.prompt }}/>
              <p className={`mt-2 text-sm ${result.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                Your answer: <span className="font-semibold">{result.userAnswer?.toString() || 'No answer'}</span>
              </p>
              {!result.isCorrect && (
                <p className="mt-1 text-sm text-green-800">
                  Correct answer: <span className="font-semibold">{result.correctAnswer.toString()}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onRetry}
          className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
