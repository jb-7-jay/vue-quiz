import { QuestionStatus, type Question, quizTime } from '@/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useQuizStore = defineStore('quiz', () => {
  const questions = ref<Question[]>([])

  // Store timestamp to calculate quiz duration
  const quizStartedAt = ref<Date | null>(null)
  const quizEndAt = ref<Date | null>(null)

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

  // Start quiz: set start and end timestamps
  const startQuiz = () => {
    const now = new Date()
    quizStartedAt.value = now
    quizEndAt.value = new Date(now.getTime() + quizTime * 1000)
  }

  // Computed: seconds left
  const quizTimeLeft = computed(() => {
    if (!quizEndAt.value) return 0
    const now = new Date()
    const diff = Math.floor((quizEndAt.value.getTime() - now.getTime()) / 1000)
    return diff > 0 ? diff : 0
  })

  return {
    questions,
    setQuestions,
    curentQuestionIndex,
    onQuestionChange,
    currentQuestion,
    quizStartedAt,
    quizEndAt,
    startQuiz,
    quizTimeLeft,
  }
})

export default useQuizStore
