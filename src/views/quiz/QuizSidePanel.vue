<script setup lang="ts">
import { questionStatusOptionsMap } from '@/constants'
import useQuizStore from '@/store/useQuizStore'
const quizStore = useQuizStore()
</script>

<template>
  <aside class="w-[340px] bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col gap-8 min-h-[80vh]">
    <div class="flex items-center justify-center bg-white rounded-xl shadow h-[72px]">
      <span class="text-xl font-bold text-indigo-700 tracking-wide">Jay Bhingradiya</span>
    </div>

    <div class="flex-1 flex flex-col gap-6">
      <p class="font-bold text-gray-700">Navigation Panel</p>
      <div class="grid grid-cols-5 gap-x-4 gap-y-2">
        <button
          class="flex justify-center items-center w-9 h-9 rounded-full transition-all duration-200 cursor-pointer border-2 hover:scale-110 border-indigo-100 hover:border-indigo-300"
          v-for="(question, index) in quizStore.questions"
          :key="question.id"
          :style="{
            backgroundColor: questionStatusOptionsMap[question.status].color,
            color:
              questionStatusOptionsMap[question.status].color === '#ffffff' ? '#000000' : '#ffffff',
          }"
          @click="quizStore.onQuestionChange(index)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-4">
      <div>
        <p class="font-bold text-gray-700 mb-2">Indicators</p>
        <div class="flex flex-col gap-2">
          <div
            v-for="[status, option] in Object.entries(questionStatusOptionsMap)"
            :key="status"
            class="flex items-center gap-2"
          >
            <div
              class="w-5 h-5 rounded-full border border-gray-200 shadow"
              :style="{ backgroundColor: option.color }"
            ></div>
            <span class="text-sm text-gray-600">{{ option.label }}</span>
          </div>
        </div>
      </div>

      <div class="mt-auto flex justify-between items-center gap-4 pt-6 border-t border-gray-200">
        <button
          class="mx-auto py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-semibold"
        >
          Read Instructions
        </button>
      </div>
    </div>
  </aside>
</template>
