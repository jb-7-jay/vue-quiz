import { QuestionStatus, type Question } from '@/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useQuizStore = defineStore('quiz', () => {
  const questions = ref<Question[]>([])

  const curentQuestionIndex = ref(0)

  const currentQuestion = computed(() => {
    if (!questions.value) return null

    return questions.value?.[curentQuestionIndex.value] || null
  })

  const onQuestionChange = (currentIndex: number) => {
    if (currentIndex < 0 || currentIndex >= questions.value.length) return

    curentQuestionIndex.value = currentIndex

    questions.value = questions.value.map((question, idx) => {
      // If Current Question is the same as the clicked question
      if (idx === curentQuestionIndex.value) {
        return {
          ...question,
          status: QuestionStatus.ACTIVE,
        }
      }

      if (question.status === QuestionStatus.ACTIVE) {
        return {
          ...question,
          status: question.isAttempted ? QuestionStatus.RESPONDED : QuestionStatus.SKIPPED,
        }
      }

      return question
    })
  }

  const setQuestions = (questionResponse: Question[]) => {
    questions.value = questionResponse
  }

  return { questions, setQuestions, curentQuestionIndex, onQuestionChange, currentQuestion }
})

export default useQuizStore
