
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_IN_THE_BLANK = 'FILL_IN_THE_BLANK',
  REWRITE_SENTENCE = 'REWRITE_SENTENCE',
  MAKE_SENTENCE = 'MAKE_SENTENCE',
  TRUE_FALSE = 'TRUE_FALSE',
}

export interface Question {
  id: string;
  section: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string | boolean;
  userAnswer?: string | boolean;
  isCorrect?: boolean;
}

export type UserAnswers = {
  [key: string]: string | boolean;
};
