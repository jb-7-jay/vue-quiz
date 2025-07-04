<script setup lang="ts">
// This is the main entry point for the Vue application.
</script>

<template>
  <div class="bg-gradient-to-br from-indigo-100 to-indigo-200">
    <header
      class="h-[70px] flex justify-between items-center bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-700 text-white px-12 py-5 shadow-xl rounded-b-3xl border-b-2 border-indigo-300/40 backdrop-blur-md transition-all duration-300"
    >
      <div class="container mx-auto">
        <RouterLink to="/">
          <h1
            class="text-3xl font-black tracking-wider drop-shadow-lg hover:scale-105 hover:text-indigo-100 transition-all duration-300 cursor-pointer select-none"
          >
            Vue Quiz App
          </h1>
        </RouterLink>
      </div>
    </header>

    <div class="min-h-[calc(100vh-70px)] container mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
