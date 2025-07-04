<script lang="ts" setup>
import { QuestionStatus, type Question } from '@/constants'
import { getQuestionList } from '@/services'
import useQuizStore from '@/store/useQuizStore'
import { onMounted } from 'vue'

import QuizSidePanel from './QuizSidePanel.vue'
import QuizHeader from './QuizHeader.vue'
import QuizFooter from './QuizFooter.vue'

const quizStore = useQuizStore()

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
})
</script>

<template>
  <div class="flex p-5 gap-5">
    <QuizSidePanel />

    <main class="w-full bg-gray-50 rounded-2xl shadow-lg p-6">
      <div class="flex flex-col gap-8 h-full" v-if="quizStore.questions.length">
        <QuizHeader />

        <!-- Progress Bar -->
        <div></div>

        <!-- Line Break -->
        <div>
          <h4 class="font-semibold">
            {{ quizStore.curentQuestionIndex + 1 }}. {{ quizStore.currentQuestion?.question }}
          </h4>
          <!-- Question container -->
        </div>

        <QuizFooter />
      </div>

      <div v-else class="animate-bounce">Loading...</div>
    </main>
  </div>
</template>
