import {createRouter} from 'vue-router'

import Home from './pages/Home.vue';
import ChatGPT from './pages/ChatGPT.vue';
import Post from './pages/Post.vue';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/chatGPT/',
      component: ChatGPT
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
