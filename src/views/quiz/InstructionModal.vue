<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <teleport to="body">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-gray-900 opacity-60"></div>
      <div
        class="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center gap-6 animate-fade-in"
      >
        <button
          class="absolute top-3 right-3 text-gray-400 hover:text-indigo-600 text-2xl font-bold focus:outline-none"
          @click="emit('close')"
        >
          &times;
        </button>
        <h2 class="text-2xl font-extrabold text-indigo-700 text-center">Quiz Instructions</h2>
        <ul class="text-gray-700 text-base list-disc pl-6 space-y-2 text-left">
          <li>Read each question carefully before answering.</li>
          <li>You cannot restart the quiz once started.</li>
          <li>Each question may be single or multiple choice.</li>
          <li>Use the navigation panel to jump between questions.</li>
          <li>Timer will auto-submit the quiz when time is up.</li>
          <li>Click "Submit" when you are done.</li>
        </ul>
        <button
          class="mt-2 py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-semibold"
          @click="emit('close')"
        >
          Got it!
        </button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
