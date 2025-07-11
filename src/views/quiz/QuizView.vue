<script lang="ts" setup>
import { QuestionStatus, type Question } from '@/constants'
import { getQuestionList } from '@/services'
import useQuizStore from '@/store/useQuizStore'
import { onMounted } from 'vue'

import QuizSidePanel from './QuizSidePanel.vue'
import QuizHeader from './QuizHeader.vue'
import QuizFooter from './QuizFooter.vue'
import QuestionResolver from './QuestionResolver.vue'
import { useRouter } from 'vue-router'

const quizStore = useQuizStore()
const router = useRouter()

onMounted(async () => {
  const questionResponse = await getQuestionList()

  const prepareInitialQuizStates: Question[] = questionResponse.map((question, index) => ({
    ...question,
    status:
      quizStore.curentQuestionIndex === index ? QuestionStatus.ACTIVE : QuestionStatus.UNATTEMPTED,
    options: question.options.map((option) => ({
      ...option,
      correctAnswerByUser: false,
    })),
    isAttempted: false,
  }))

  quizStore.setQuestions(prepareInitialQuizStates)

  quizStore.startQuiz()
})

const onSubmitQuiz = () => {
  console.log('Submitting quiz...')
  // alert('Time is up!, you will be redirected to the summary page.')
  router.push('/quiz/summary')
}
</script>

<template>
  <div class="flex p-5 gap-5">
    <QuizSidePanel />

    <main class="w-full bg-gray-50 rounded-2xl shadow-lg p-6">
      <div class="flex flex-col gap-8 h-full" v-if="quizStore.questions.length">
        <QuizHeader @on-submit-quiz="onSubmitQuiz" />

        <QuestionResolver />

        <QuizFooter @on-submit-quiz="onSubmitQuiz" />
      </div>

      <div v-else class="animate-bounce">Loading...</div>
    </main>
  </div>
</template>
