import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//import { create } from 'core-js/core/object'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
