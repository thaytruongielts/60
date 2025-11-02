
import { Question, QuestionType } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  // Page 1
  {
    id: 'p1-i-1',
    section: 'I. Indicate the word whose bold part differs from the other three in pronunciation.',
    prompt: '1. Which word has a different sound for "a"?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['cleaner', 'woman', 'mother', 'man'],
    correctAnswer: 'man'
  },
  {
    id: 'p1-i-2',
    section: 'I. Indicate the word whose bold part differs from the other three in pronunciation.',
    prompt: '2. Which word has a different sound?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['nicer', 'safer', 'about', 'any'],
    correctAnswer: 'any'
  },
  {
    id: 'p1-i-3',
    section: 'I. Indicate the word whose bold part differs from the other three in pronunciation.',
    prompt: '3. Which word has a different sound for "e"?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['cheaper', 'bigger', 'compete', 'tutor'],
    correctAnswer: 'bigger'
  },
  {
    id: 'p1-i-4',
    section: 'I. Indicate the word whose bold part differs from the other three in pronunciation.',
    prompt: '4. Which word has a different sound for "ar"?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['larger', 'enter', 'grammar', 'verb'],
    correctAnswer: 'enter'
  },
  {
    id: 'p1-ii-1',
    section: 'II. Put the verbs in brackets in the correct form.',
    prompt: '1. I (not be) _________ at school at the weekend.',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'am not'
  },
  {
    id: 'p1-ii-2',
    section: 'II. Put the verbs in brackets in the correct form.',
    prompt: '2. She (not study) _________ on Friday.',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: "doesn't study"
  },
  {
    id: 'p1-ii-3',
    section: 'II. Put the verbs in brackets in the correct form.',
    prompt: '3. My students (be not) _________ hard working.',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'are not'
  },
  {
    id: 'p1-ii-4',
    section: 'II. Put the verbs in brackets in the correct form.',
    prompt: '4. He (have) _________ a new haircut today.',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'has'
  },
  {
    id: 'p1-ii-5',
    section: 'II. Put the verbs in brackets in the correct form.',
    prompt: '5. I usually (have) _________ breakfast at 7.00.',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'have'
  },
  {
    id: 'p1-iv-1',
    section: 'IV. Choose the letter A, B, C or D to answer these following questions.',
    prompt: '1. Does Charles live in a cottage?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['Yes, he is.', 'No, he doesn\'t.', 'Yes, he isn\'t.', 'No, he is.'],
    correctAnswer: 'No, he doesn\'t.'
  },
  {
    id: 'p1-iv-2',
    section: 'IV. Choose the letter A, B, C or D to answer these following questions.',
    prompt: '2. Is the villa in front of a shopping center?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['No, it isn\'t.', 'Yes, it does.', 'No, it doesn\'t.', 'Yes, it is.'],
    correctAnswer: 'No, it isn\'t.'
  },
  {
    id: 'p1-iv-3',
    section: 'IV. Choose the letter A, B, C or D to answer these following questions.',
    prompt: '3. What does his mother do?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['a manager', 'a teacher', 'a secretary', 'a nurse'],
    correctAnswer: 'a secretary'
  },
  {
    id: 'p1-iv-4',
    section: 'IV. Choose the letter A, B, C or D to answer these following questions.',
    prompt: '4. When do they go to the pagoda?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['At Tet', 'At Christmas', 'At Easter', 'Every day'],
    correctAnswer: 'At Tet'
  },
  {
    id: 'p1-iv-5',
    section: 'IV. Choose the letter A, B, C or D to answer these following questions.',
    prompt: '5. What do they do in the back yard?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['They talk with each other.', 'They play tennis.', 'They sit under the trees.', 'They have afternoon tea.'],
    correctAnswer: 'They have afternoon tea.'
  },
  {
    id: 'p1-v-1',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '1. She / not / sleep late at the weekends',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: "She doesn't sleep late at the weekends."
  },
  {
    id: 'p1-v-2',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '2. we / not / believe the Prime Minister',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: "We don't believe the Prime Minister."
  },
  {
    id: 'p1-v-3',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '3. you / understand the question?',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: 'Do you understand the question?'
  },
  {
    id: 'p1-v-4',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '4. David / want some coffee?',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: 'Does David want some coffee?'
  },
  {
    id: 'p1-v-5',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '5. when / she / go to her Chinese class?',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: 'When does she go to her Chinese class?'
  },
  {
    id: 'p1-v-6',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '6. why / I / have to clean up?',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: 'Why do I have to clean up?'
  },
  {
    id: 'p1-v-7',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '7. they / not / work late on Fridays',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: "They don't work late on Fridays."
  },
  {
    id: 'p1-v-8',
    section: 'V. Make sentence using words / phrases given.',
    prompt: '8. she / have three daughters',
    type: QuestionType.MAKE_SENTENCE,
    correctAnswer: 'She has three daughters.'
  },
  // Page 2
  {
    id: 'p2-i-1',
    section: 'I. Identify the underlined letters that are pronounced differently from the others.',
    prompt: '1. d<u>i</u>rty, c<u>i</u>ty, p<u>i</u>zza, b<u>i</u>g',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['dirty', 'city', 'pizza', 'big'],
    correctAnswer: 'dirty'
  },
  {
    id: 'p2-i-2',
    section: 'I. Identify the underlined letters that are pronounced differently from the others.',
    prompt: '2. g<u>a</u>me, s<u>a</u>fe, c<u>a</u>ke, m<u>a</u>n',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['game', 'safe', 'cake', 'man'],
    correctAnswer: 'man'
  },
  {
    id: 'p2-i-3',
    section: 'I. Identify the underlined letters that are pronounced differently from the others.',
    prompt: '3. t<u>a</u>ll, fl<u>a</u>t, c<u>a</u>t, f<u>a</u>t',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['tall', 'flat', 'cat', 'fat'],
    correctAnswer: 'tall'
  },
  {
    id: 'p2-ii-4',
    section: 'II. Identify the words whose main stresses are different from the others.',
    prompt: '4. tutor, compete, enter, mother',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['tutor', 'compete', 'enter', 'mother'],
    correctAnswer: 'compete'
  },
  {
    id: 'p2-ii-5',
    section: 'II. Identify the words whose main stresses are different from the others.',
    prompt: '5. expensive, dangerous, quieter, cinema',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['expensive', 'dangerous', 'quieter', 'cinema'],
    correctAnswer: 'expensive'
  },
  {
    id: 'p2-iii-6',
    section: 'III. Choose the best answer.',
    prompt: '6. She ______ up at 6 every morning.',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['gets', 'lies', 'goes', 'washes'],
    correctAnswer: 'gets'
  },
  {
    id: 'p2-iii-7',
    section: 'III. Choose the best answer.',
    prompt: '7. I ______ like cooking.',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['doesn\'t', 'don\'t', 'am not', 'am'],
    correctAnswer: 'don\'t'
  },
  {
    id: 'p2-iii-8',
    section: 'III. Choose the best answer.',
    prompt: '8. ______ your son get up?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['What time do', 'What time', 'What time does', 'What time is'],
    correctAnswer: 'What time does'
  },
  {
    id: 'p2-iii-9',
    section: 'III. Choose the best answer.',
    prompt: '9. He is ______ his brother.',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['friendlier than', 'friendly than', 'more friendly', 'more than friendly'],
    correctAnswer: 'friendlier than'
  },
  {
    id: 'p2-iii-10',
    section: 'III. Choose the best answer.',
    prompt: '10. ______ dogs are there?',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['How much', 'How old', 'How', 'How many'],
    correctAnswer: 'How many'
  },
  {
    id: 'p2-iv-11',
    section: 'IV. Supply the correct form of the word given in each sentence.',
    prompt: '11. There is an interesting park in their ______. (neighbor)',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'neighborhood'
  },
  {
    id: 'p2-iv-12',
    section: 'IV. Supply the correct form of the word given in each sentence.',
    prompt: '12. My sister is a famous ______. (sing)',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'singer'
  },
  {
    id: 'p2-iv-13',
    section: 'IV. Supply the correct form of the word given in each sentence.',
    prompt: '13. Their ______ goes back 25 years. (friend)',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'friendship'
  },
  {
    id: 'p2-iv-14',
    section: 'IV. Supply the correct form of the word given in each sentence.',
    prompt: '14. Nam often ______ his best friends to his birthday party. (invitation)',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'invites'
  },
  {
    id: 'p2-iv-15',
    section: 'IV. Supply the correct form of the word given in each sentence.',
    prompt: '15. Paris has a lot of ______ places. (beauty)',
    type: QuestionType.FILL_IN_THE_BLANK,
    correctAnswer: 'beautiful'
  },
  {
    id: 'p2-v-16',
    section: 'V. Choose the option that best completes each blank in the passage.',
    prompt: '16. Time zones (16)______ us know what time it is...',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['take', 'make', 'help', 'do'],
    correctAnswer: 'help'
  },
  {
    id: 'p2-v-17',
    section: 'V. Choose the option that best completes each blank in the passage.',
    prompt: '17. ...because when the Earth (17)______, the sun shines on only one part of the Earth...',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['rotates', 'runs', 'moves', 'goes'],
    correctAnswer: 'rotates'
  },
  {
    id: 'p2-v-18',
    section: 'V. Choose the option that best completes each blank in the passage.',
    prompt: '18. ...so when it\'s the morning in your country, it\'s night-time in (18)______ country.',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['other', 'another', 'an', 'some'],
    correctAnswer: 'another'
  },
  {
    id: 'p2-v-19',
    section: 'V. Choose the option that best completes each blank in the passage.',
    prompt: '19. The Earth has got twenty-four time (19)______. ',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['zones', 'places', 'directions', 'clocks'],
    correctAnswer: 'zones'
  },
  {
    id: 'p2-v-20',
    section: 'V. Choose the option that best completes each blank in the passage.',
    prompt: '20. The line on the map at 0° longitude is called the Prime Meridian. This line (20)______ Greenwich, in London.',
    type: QuestionType.MULTIPLE_CHOICE,
    options: ['comes from', 'moves up', 'goes through', 'gives up'],
    correctAnswer: 'goes through'
  },
  // Page 3
  {
    id: 'p3-vi-21',
    section: 'VI. Read the passage and decide whether each statement is True or False.',
    prompt: '21. Sue\'s older daughter always helps with the housework.',
    type: QuestionType.TRUE_FALSE,
    options: ['True', 'False'],
    correctAnswer: false
  },
  {
    id: 'p3-vi-22',
    section: 'VI. Read the passage and decide whether each statement is True or False.',
    prompt: '22. The younger children often watch TV.',
    type: QuestionType.TRUE_FALSE,
    options: ['True', 'False'],
    correctAnswer: false
  },
  {
    id: 'p3-vi-23',
    section: 'VI. Read the passage and decide whether each statement is True or False.',
    prompt: '23. It\'s not expensive for them to go to the restaurants.',
    type: QuestionType.TRUE_FALSE,
    options: ['True', 'False'],
    correctAnswer: false
  },
  {
    id: 'p3-vi-24',
    section: 'VI. Read the passage and decide whether each statement is True or False.',
    prompt: '24. The children don\'t go to bed after 9 p.m.',
    type: QuestionType.TRUE_FALSE,
    options: ['True', 'False'],
    correctAnswer: false
  },
  {
    id: 'p3-vi-25',
    section: 'VI. Read the passage and decide whether each statement is True or False.',
    prompt: '25. The parents go to bed after 10 p.m.',
    type: QuestionType.TRUE_FALSE,
    options: ['True', 'False'],
    correctAnswer: true
  },
  {
    id: 'p3-vii-26',
    section: 'VII. Rewrite the following sentences with the given beginning in such a way that the meanings stay unchanged.',
    prompt: '26. Her family is small. -> Her family is not _____.',
    type: QuestionType.REWRITE_SENTENCE,
    correctAnswer: 'large'
  },
  {
    id: 'p3-vii-27',
    section: 'VII. Rewrite the following sentences with the given beginning in such a way that the meanings stay unchanged.',
    prompt: '27. He sometimes helps with the housework. -> He doesn\'t always _____.',
    type: QuestionType.REWRITE_SENTENCE,
    correctAnswer: 'help with the housework'
  },
  {
    id: 'p3-vii-28',
    section: 'VII. Rewrite the following sentences with the given beginning in such a way that the meanings stay unchanged.',
    prompt: '28. My parents relax in the evening. -> My parents don\'t _____.',
    type: QuestionType.REWRITE_SENTENCE,
    correctAnswer: 'work in the evening'
  },
  {
    id: 'p3-vii-29',
    section: 'VII. Rewrite the following sentences with the given beginning in such a way that the meanings stay unchanged.',
    prompt: '29. Young children often go to bed early in the evening. -> Young children don\'t _____.',
    type: QuestionType.REWRITE_SENTENCE,
    correctAnswer: 'often go to bed late in the evening'
  },
  {
    id: 'p3-vii-30',
    section: 'VII. Rewrite the following sentences with the given beginning in such a way that the meanings stay unchanged.',
    prompt: '30. She usually gets up late in the morning. -> She doesn\'t often _____.',
    type: QuestionType.REWRITE_SENTENCE,
    correctAnswer: 'get up early in the morning'
  },
];
