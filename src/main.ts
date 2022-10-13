import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './styles/element-plus/light.scss'
import './styles/element-plus/dark.scss'

const app = createApp(App)
app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
