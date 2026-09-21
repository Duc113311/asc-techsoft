import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { vReveal } from './directives/reveal.js'

createApp(App).use(router).directive('reveal', vReveal).mount('#app')
