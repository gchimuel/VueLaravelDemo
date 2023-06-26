import './bootstrap';
import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './router.js'
import App from './layouts/App.vue';

const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router)
app.mount('#app')
