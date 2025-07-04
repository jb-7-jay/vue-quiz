<script lang="ts" setup></script>

<template>
  <div class="flex flex-col justify-center items-center min-h-[calc(100vh-70px)] gap-10">
    <div class="text-4xl font-bold text-indigo-700 drop-shadow-lg mb-2">
      Welcome to the Vue Quiz App!
    </div>
    <div class="text-lg text-gray-600 mb-6 max-w-xl text-center">
      Test your knowledge with our interactive quiz. Click the button below to get started and see
      how much you know!
    </div>

    <RouterLink to="/quiz">
      <button
        class="cursor-pointer py-4 px-8 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 text-xl font-semibold"
      >
        Start Quiz
      </button>
    </RouterLink>
  </div>
</template>
