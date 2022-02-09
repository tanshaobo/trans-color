import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import store from './store'
import './style/common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
