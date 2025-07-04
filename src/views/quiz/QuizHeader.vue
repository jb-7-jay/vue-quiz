<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'
import { RouterLink } from 'vue-router'

const quizStore = useQuizStore()
</script>

<template>
  <div>
    <RouterLink to="/">
      <button>Back</button>
    </RouterLink>

    <div>
      {{ quizStore.curentQuestionIndex + 1 }} out of
      {{ quizStore.questions.length }}
    </div>

    <div>
      <!-- Time function -->
      <span class="font-bold">Time Left:</span>
      <span class="text-red-500">00:30</span>
    </div>
  </div>
</template>
