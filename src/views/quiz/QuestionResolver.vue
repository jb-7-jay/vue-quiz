<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'
import { ref } from 'vue'

const quizStore = useQuizStore()

const singleChoiceValue = ref('')
const multiChoiceValue = ref([])
</script>

<template>
  <div>
    <h4 class="font-semibold">
      {{ quizStore.curentQuestionIndex + 1 }}. {{ quizStore.currentQuestion?.question }}
    </h4>

    <div>
      <div
        v-show="quizStore.currentQuestion?.questionType === 'SingleChoice'"
        v-for="option in quizStore.currentQuestion?.options"
        :key="option.text"
      >
        <label>
          <input
            type="radio"
            v-model="singleChoiceValue"
            :name="option.text"
            :value="option.text"
          />
          {{ option.text }}
        </label>
      </div>

      <div
        v-show="quizStore.currentQuestion?.questionType === 'MultipleChoice'"
        v-for="option in quizStore.currentQuestion?.options"
        :key="option.text"
      >
        <label>
          <input
            type="checkbox"
            v-model="multiChoiceValue"
            :value="option.text"
            name="multieChoice"
          />

          {{ option.text }}
        </label>
      </div>
    </div>

    <div>Selected Ans: {{ singleChoiceValue }} {{ multiChoiceValue }}</div>
  </div>
</template>
