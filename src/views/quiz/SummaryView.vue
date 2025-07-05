<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'

const quizStore = useQuizStore()

const scorePercent = quizStore.quizScore.percentage
const total = quizStore.quizScore.totalScore
const score = quizStore.quizScore.userScore
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-indigo-100 via-white to-purple-100 animate-fade-in"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-lg animate-slide-up"
    >
      <h1 class="text-3xl font-extrabold text-indigo-700 text-center">Quiz Summary</h1>
      <div class="w-full flex flex-col items-center gap-4">
        <div class="text-2xl font-bold text-gray-800">
          Your Score: <span class="text-purple-600">{{ score }}/{{ total }}</span>
        </div>
        <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
            :style="{ width: scorePercent + '%' }"
          ></div>
        </div>
        <div class="text-lg font-semibold text-gray-700 mt-2 animate-pulse">
          <span v-if="scorePercent >= 90">Excellent! 🎉</span>
          <span v-else-if="scorePercent >= 70">Great job! 👍</span>
          <span v-else-if="scorePercent >= 50">Good effort! Keep practicing! 💪</span>
          <span v-else>Don't give up! Try again! 🚀</span>
        </div>
      </div>
      <button
        class="mt-4 py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 text-lg font-semibold animate-bounce"
        @click="$router.push('/')"
      >
        Start Quiz Again
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease;
}
@keyframes slide-up {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-up {
  animation: slide-up 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
