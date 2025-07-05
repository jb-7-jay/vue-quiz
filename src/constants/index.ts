export const quizTime = 60 * 2 // 2 minutes in seconds
// export const quizTime = 10 // 2 minutes in seconds

export type QuestionType = 'SingleChoice' | 'MultipleChoice' | 'Boolean'

export interface QuizOption {
  text: string
  isCorrect: boolean
}

export interface QuestionResponse {
  id: number
  question: string
  questionType: QuestionType
  options: QuizOption[]
}

interface UserAnseredOption extends QuizOption {
  correctAnswerByUser: boolean
}

export interface Question extends QuestionResponse {
  status: QuestionStatus
  options: UserAnseredOption[]
  isAttempted: boolean
}

export const questionList: QuestionResponse[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    questionType: 'SingleChoice',
    options: [
      { text: 'Paris', isCorrect: true },
      { text: 'London', isCorrect: false },
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    questionType: 'SingleChoice',
    options: [
      { text: 'Earth', isCorrect: false },
      { text: 'Mars', isCorrect: true },
      { text: 'Jupiter', isCorrect: false },
      { text: 'Venus', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Select all programming languages that are statically typed.',
    questionType: 'MultipleChoice',
    options: [
      { text: 'TypeScript', isCorrect: true },
      { text: 'Java', isCorrect: true },
      { text: 'JavaScript', isCorrect: false },
      { text: 'Python', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'Which of the following are JavaScript frameworks?',
    questionType: 'MultipleChoice',
    options: [
      { text: 'Vue.js', isCorrect: true },
      { text: 'React', isCorrect: true },
      { text: 'Laravel', isCorrect: false },
      { text: 'Angular', isCorrect: true },
    ],
  },
  {
    id: 5,
    question: 'The Earth is flat.',
    questionType: 'SingleChoice',
    options: [
      { text: 'True', isCorrect: false },
      { text: 'False', isCorrect: true },
    ],
  },
  {
    id: 6,
    question: 'Which language is primarily used for styling web pages?',
    questionType: 'SingleChoice',
    options: [
      { text: 'HTML', isCorrect: false },
      { text: 'CSS', isCorrect: true },
      { text: 'JavaScript', isCorrect: false },
      { text: 'Python', isCorrect: false },
    ],
  },
  {
    id: 7,
    question: 'Which of the following are fruits?',
    questionType: 'MultipleChoice',
    options: [
      { text: 'Apple', isCorrect: true },
      { text: 'Carrot', isCorrect: false },
      { text: 'Banana', isCorrect: true },
      { text: 'Potato', isCorrect: false },
    ],
  },
  {
    id: 8,
    question: 'React is maintained by Facebook.',
    questionType: 'SingleChoice',
    options: [
      { text: 'True', isCorrect: true },
      { text: 'False', isCorrect: false },
    ],
  },
  {
    id: 9,
    question: 'Which of the following are valid HTTP methods?',
    questionType: 'MultipleChoice',
    options: [
      { text: 'GET', isCorrect: true },
      { text: 'POST', isCorrect: true },
      { text: 'FETCH', isCorrect: false },
      { text: 'PUT', isCorrect: true },
    ],
  },
  {
    id: 10,
    question: 'Vue.js is a backend framework.',
    questionType: 'SingleChoice',
    options: [
      { text: 'True', isCorrect: false },
      { text: 'False', isCorrect: true },
    ],
  },
]

export enum QuestionStatus {
  UNATTEMPTED = 'Unattempted',
  ACTIVE = 'Active',
  RESPONDED = 'Responded',
  SKIPPED = 'Skipped',
}

export const questionStatusOptionsMap = {
  [QuestionStatus.UNATTEMPTED]: { label: 'Unattempted', color: '#ffffff' },
  [QuestionStatus.ACTIVE]: { label: 'Active', color: '#a259e6' },
  [QuestionStatus.RESPONDED]: { label: 'Responded', color: '#3ddc97' },
  [QuestionStatus.SKIPPED]: { label: 'Skipped', color: '#a0aec0' },
}
