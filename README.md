# How to setup Laravel Vue.js:
## Create Folder "laravel-vue-demo":

```
composer create-project --prefer-dist laravel/laravel laravel-vue-demo
```

## Install JS dependencies and plugin-vue
```
npm install
```
```
npm install vue@next vue-loader@next @vitejs/plugin-vue
```
```
npm install axios
```
```
npm install vue-router
```

## Open the file called vite.config.js and add vue() to the config:
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin'; //add this
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(), //add this
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```

## Edit the app.js file and the snippet for the Vue 3 app bootstrap:
```js
import './bootstrap';
import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './router.js'
import App from './layouts/App.vue';

const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app')
```

## Create router.js
```js
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
```

## Create a file called App.vue and add the following:
```html
<template>
    <div id="top-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about/">About</router-link>
    </div>

    <div id="content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    };
</script>
```

## Create a file Home.vue and About.vue using this format:
```html
<template>
    Home
</template>

<script>
    export default {

    };
</script>
```

## Edit route
```php
Route::get('/{page?}', function() {
    return view('main');
})->where('page', '[\/\w\.-]*');
```

## Edit main.blade.php
```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vue.js</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        @vite('resources/css/app.css')
    </head>
    <body class="antialiased">
        <div id="app"></div>

        @vite('resources/js/app.js')
    </body>
</html>
```

## Edit app.css
```css
body{
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
}

#top-nav{
    background-color: black;
    padding: 20px 0;
}

#top-nav a{
    padding: 20px;
    color: #fff;
    text-decoration: none;
}
#top-nav a:hover, .router-link-active{
    background: #fff;
    color: #000!important;
}

#content{
    padding: 20px;
}
```

## Add Tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
### Edit tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```
### Add at the top of app.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
...

```

### Run the APP
```
npm run dev
```
