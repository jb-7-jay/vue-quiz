<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()

const timer = ref()

const remainingTime = ref(quizStore.quizTimeLeft)

onMounted(() => {
  timer.value = setInterval(() => {
    remainingTime.value -= 1

    if (remainingTime.value === -1) {
      clearInterval(timer.value)

      console.log('Time is up! Ending quiz...')
    }
  }, 1000)
})

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const s = (seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}
</script>

<template>
  <div class="flex items-center justify-between gap-6 p-4 bg-white rounded-xl shadow mb-4">
    <RouterLink to="/">
      <button
        class="py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-purple-600 transition-all duration-200"
      >
        Back
      </button>
    </RouterLink>

    <div class="text-lg font-medium text-gray-700">
      {{ quizStore.curentQuestionIndex + 1 }} out of {{ quizStore.questions.length }}
    </div>

    <div class="flex items-center gap-2">
      <span class="font-bold text-gray-700">Time Left:</span>
      <span class="text-xl font-mono font-bold text-indigo-500 bg-red-50 px-3 py-1 rounded">
        {{ formatTime(remainingTime) }}
      </span>
    </div>
  </div>
</template>
