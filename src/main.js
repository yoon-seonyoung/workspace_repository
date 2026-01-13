import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3ConfirmDialog from 'vue3-confirm-dialog'
import 'vue3-confirm-dialog/style'
import App from './App.vue'
import router from './router'


createApp(App)
    .use(Vue3ConfirmDialog)
    .use(router)
    .use(createPinia())
    .mount('#app')