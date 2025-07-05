<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'
import ConfirmSubmit from './ConfirmSubmit.vue'
import { ref } from 'vue'

const emit = defineEmits(['on-submit-quiz'])

const quizStore = useQuizStore()

const isSubmitModalOpen = ref(false)

const handleSubmitQuiz = (shouldSubmit: boolean) => {
  if (shouldSubmit) {
    emit('on-submit-quiz')
  }

  isSubmitModalOpen.value = false
}
</script>

<template>
  <div class="mt-auto flex justify-between items-center gap-4 pt-6 border-t border-gray-200">
    <button
      :disabled="quizStore.curentQuestionIndex === 0"
      @click="quizStore.onQuestionChange(quizStore.curentQuestionIndex - 1)"
      class="py-2 px-6 rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>

    <button
      v-show="quizStore.curentQuestionIndex !== quizStore.questions.length - 1"
      :disabled="quizStore.curentQuestionIndex === quizStore.questions.length - 1"
      @click="quizStore.onQuestionChange(quizStore.curentQuestionIndex + 1)"
      class="py-2 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold shadow hover:from-purple-600 hover:to-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>

    <button
      v-show="quizStore.curentQuestionIndex === quizStore.questions.length - 1"
      @click="isSubmitModalOpen = true"
      class="py-2 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold shadow hover:from-purple-600 hover:to-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Submit
    </button>

    <ConfirmSubmit v-if="isSubmitModalOpen" @handle-submit-quiz="handleSubmitQuiz" />
  </div>
</template>
