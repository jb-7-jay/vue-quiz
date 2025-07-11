import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
import router from './routes'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.directive('highlight', (el) => {
  el.style.backgroundColor = 'lightyellow'
})

app.mount('#app')
