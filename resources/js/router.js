import {createRouter} from 'vue-router'

import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
    {
      path: '/',
      component: Home
    },

    {
      path: '/about/',
      component: About
    }
  ]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}
