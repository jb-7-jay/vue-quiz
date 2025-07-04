<script setup lang="ts">
// This is the main entry point for the Vue application.
</script>

<template>
  <header>
    <div>Header</div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/quiz">Quiz</RouterLink>
  </header>

  <RouterView />

  <footer>This is Footer</footer>
</template>

<style scoped></style>
