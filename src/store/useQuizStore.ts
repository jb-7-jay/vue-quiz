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

  const onQuestionUpdate = (optionIndex: number, event: Event) => {
    const eventTarget = event.target as HTMLInputElement

    questions.value.forEach((question, idx) => {
      if (currentQuestion.value?.id === question.id) {
        const questionDetails = questions.value[idx]

        questionDetails.options.forEach((option, optIdx) => {
          if (question.questionType === 'SingleChoice') {
            option.correctAnswerByUser = optIdx === optionIndex ? eventTarget.checked : false
          }

          if (question.questionType === 'MultipleChoice') {
            option.correctAnswerByUser =
              optIdx === optionIndex ? eventTarget.checked : option.correctAnswerByUser
          }
        })

        questionDetails.isAttempted = true
      }
    })
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

  const quizScore = computed(() => {
    const totalScore = questions.value.length || 0
    const userScore = questions.value.reduce((score, question) => {
      const correctAnswers = question.options.filter(
        (option) => option.isCorrect && option.correctAnswerByUser,
      ).length

      if (correctAnswers > 0) {
        score += 1
      }

      return score
    }, 0)

    return {
      userScore,
      totalScore,
      percentage: parseFloat(((userScore / totalScore) * 100).toFixed(2)),
    }
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
    onQuestionUpdate,
    quizScore,
  }
})

export default useQuizStore
