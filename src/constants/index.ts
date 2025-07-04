export const quizTime = 60 * 5 // 5 minutes in seconds

export type QuestionType = 'SingleChoice' | 'MultipleChoice' | 'Boolean'

export interface quizOption {
  text: string
  isCorrect: boolean
}

export interface Question {
  id?: string // Optional: for unique identification
  question: string
  questionType: QuestionType
  options: quizOption[]
  explanation?: string // Optional: for feedback after answer
  image?: string // Optional: for image-based questions
}

export const questionList: Question[] = [
  {
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
    question: 'The Earth is flat.',
    questionType: 'Boolean',
    options: [
      { text: 'True', isCorrect: false },
      { text: 'False', isCorrect: true },
    ],
  },
]

export enum QuestionStatus {
  RESPONDED = 'Responded',
  SKIPPED = 'Skipped',
  ACTIVE = 'Active',
  UNATTEMPTED = 'Unattempted',
}

export const questionStatusOptions = [
  { value: QuestionStatus.RESPONDED, label: 'Responded', color: '#3ddc97' }, // parrot green
  { value: QuestionStatus.SKIPPED, label: 'Skipped', color: '#a0aec0' }, // grey
  { value: QuestionStatus.ACTIVE, label: 'Active', color: '#a259e6' }, // purple
  { value: QuestionStatus.UNATTEMPTED, label: 'Unattempted', color: '#ffffff' }, // white
]
