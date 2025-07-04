<script setup lang="ts">
// This is the main entry point for the Vue application.
</script>

<template>
  <header class="h-[60px] flex justify-between items-center bg-purple-500 text-white p-4">
    <h1 class="text-2xl font-bold">Vue Quiz App</h1>

    <div class="flex gap-4">
      <!-- <RouterLink to="/">Home</RouterLink> -->
      <!-- <RouterLink to="/quiz">Start Quiz</RouterLink> -->
    </div>
  </header>

  <div class="min-h-[calc(100vh-120px)]">
    <RouterView />
  </div>
</template>

<style scoped></style>
