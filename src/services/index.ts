import { questionList, type QuestionResponse } from '@/constants'

export const getQuestionList = () => {
  return new Promise<QuestionResponse[]>((resolve) => setTimeout(() => resolve(questionList), 500))
}
