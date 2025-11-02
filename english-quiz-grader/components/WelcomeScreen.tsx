
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up flex flex-col items-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Ready for your test?</h2>
      <p className="text-slate-600 mb-2 max-w-md">
        This is a comprehensive English test covering pronunciation, grammar, reading comprehension, and writing skills.
      </p>
      <p className="text-slate-600 mb-8 font-medium">
        Total questions: {totalQuestions}
      </p>
      <button
        onClick={onStart}
        className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeScreen;
