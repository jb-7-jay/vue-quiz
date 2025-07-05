<script lang="ts" setup></script>

<template>
  <div
    class="min-h-[calc(100vh-70px)] flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100"
  >
    <div
      class="flex flex-col justify-center items-center gap-10 bg-white rounded-3xl shadow-2xl px-12 py-16 animate-fade-in"
    >
      <div class="text-5xl font-extrabold text-indigo-700 drop-shadow-xl mb-2 text-center">
        Welcome to the Vue Quiz App!
      </div>
      <div class="text-lg text-gray-600 mb-6 max-w-xl text-center">
        Test your knowledge with our interactive quiz.<br />Click the button below to get started
        and see how much you know!
      </div>
      <RouterLink to="/quiz">
        <button
          class="cursor-pointer py-4 px-10 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 text-2xl font-bold animate-bounce"
        >
          Start Quiz
        </button>
      </RouterLink>
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
</style>
