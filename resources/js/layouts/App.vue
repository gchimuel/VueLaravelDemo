<template>
    <div id="top-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/chatGPT/">ChatGPT</router-link>
        <router-link to="/post/">Post</router-link>
    </div>

    <div id="content">
        <router-view></router-view>
    </div>

    <div wire:loading id="main-loading-overlay" class="invisible fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-95 flex flex-col items-center justify-center">
        <div class="text-white m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>
