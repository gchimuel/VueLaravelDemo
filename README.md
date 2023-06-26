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

## Open the file called vite.config.js and add vue() to the config:
```
import vue from '@vitejs/plugin-vue'
```

## Edit the app.js file and the snippet for the Vue 3 app bootstrap:
```
require('./bootstrap');

import {createApp} from 'vue'

import App from './App.vue'

createApp(App).mount("#app")
```

## Create a file called App.vue and add the following:
```
<template>
    <h1> Hello, Vuejs with Laravel </h1>
</template>

<script>
    export default {
        setup() {

        }
    }
</script>
```

## Edit welcome.blade.php
```
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

### Run the APP
```
npm run dev
```
