<script lang="ts" setup>
import { questionList, questionStatusOptions } from '@/constants'
</script>

<template>
  <div class="flex p-5 gap-5">
    <aside class="w-[340px] bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col gap-8 min-h-[80vh]">
      <div
        class="text-lg font-semibold text-indigo-700 text-center pb-2 border-b border-indigo-100"
      >
        Jay Bhingradiya
      </div>

      <div class="flex-1 flex flex-col gap-6">
        <div>
          <p class="font-bold text-gray-700 mb-2">Navigation Panel</p>
          <div class="grid grid-cols-5 gap-3">
            <div
              class="flex justify-center items-center w-10 h-10 rounded-full font-bold shadow transition-all duration-200 cursor-pointer border-2 border-white hover:scale-110 hover:border-indigo-400"
              v-for="(question, index) in questionList"
              :key="question.id ?? index"
              :style="{
                backgroundColor: questionStatusOptions[index % 4].color,
                color: questionStatusOptions[index % 4].color === '#ffffff' ? '#000000' : '#ffffff',
              }"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 mt-4">
        <div>
          <p class="font-bold text-gray-700 mb-2">Indicators</p>
          <div class="flex flex-col gap-2">
            <div
              v-for="questionStatus in questionStatusOptions"
              :key="questionStatus.value"
              class="flex items-center gap-2"
            >
              <div
                class="w-5 h-5 rounded-full border border-gray-200 shadow"
                :style="{ backgroundColor: questionStatus.color }"
              ></div>
              <span class="text-sm text-gray-600">{{ questionStatus.label }}</span>
            </div>
          </div>
        </div>
        <button
          class="py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 font-semibold"
        >
          Read Instructions
        </button>
      </div>
    </aside>

    <main class="bg-blue-100 w-full">
      <div>Question Details</div>
    </main>
  </div>
</template>
