<script setup lang="ts">
defineEmits(['handleSubmitQuiz'])
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-gray-800 opacity-60"></div>
      <div
        class="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6 min-w-[320px] max-w-[90vw]"
      >
        <h1 class="text-xl font-bold text-gray-800 text-center">
          Are you sure you want to submit the Quiz?
        </h1>
        <div class="flex gap-4 w-full justify-center">
          <button
            class="py-2 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all"
            @click="$emit('handleSubmitQuiz', false)"
          >
            No
          </button>
          <button
            class="py-2 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition-all"
            @click="$emit('handleSubmitQuiz', true)"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
