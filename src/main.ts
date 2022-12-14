import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element-plus/light.scss'
import './styles/element-plus/dark.scss'
import './styles/theme/theme.css'

const app = createApp(App)
app.use(createPinia()).use(router).use(ElementPlus).mount('#app')
