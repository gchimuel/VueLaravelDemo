import {createRouter} from 'vue-router'

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Post from './pages/Post.vue';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about/',
      component: About
    },
    {
      path: '/post/',
      component: Post
    }
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}
