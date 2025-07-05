<script setup lang="ts">
import useQuizStore from '@/store/useQuizStore'

const quizStore = useQuizStore()
</script>

<template>
  <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-6">
    <h4 class="font-semibold text-lg text-indigo-700 mb-2">
      {{ quizStore.curentQuestionIndex + 1 }}. {{ quizStore.currentQuestion?.question }}
    </h4>

    <div class="flex flex-col gap-3">
      <div
        v-show="quizStore.currentQuestion?.questionType === 'SingleChoice'"
        v-for="(option, optionIndex) in quizStore.currentQuestion?.options"
        :key="option.text"
      >
        <label
          class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 cursor-pointer transition-all"
        >
          <input
            type="radio"
            :name="quizStore.currentQuestion?.question"
            :value="option.text"
            :checked="option.correctAnswerByUser"
            @change="quizStore.onQuestionUpdate(optionIndex, $event)"
            class="accent-indigo-500 w-5 h-5"
          />
          <span class="text-gray-800 text-base">{{ option.text }}</span>
        </label>
      </div>

      <div
        v-show="quizStore.currentQuestion?.questionType === 'MultipleChoice'"
        v-for="(option, optionIndex) in quizStore.currentQuestion?.options"
        :key="option.text"
      >
        <label
          class="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-indigo-50 cursor-pointer transition-all"
        >
          <input
            type="checkbox"
            :checked="option.correctAnswerByUser"
            @change="quizStore.onQuestionUpdate(optionIndex, $event)"
            :value="option.text"
            name="multieChoice"
            class="accent-purple-500 w-5 h-5"
          />
          <span class="text-gray-800 text-base">{{ option.text }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
