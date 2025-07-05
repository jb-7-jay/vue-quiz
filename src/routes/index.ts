import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/dashboard/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DashboardView,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('@/views/quiz/QuizView.vue'),
    },
    {
      path: '/quiz/summary',
      name: 'Quiz Summary',
      component: () => import('@/views/quiz/SummaryView.vue'),
    },
  ],
})

export default router
