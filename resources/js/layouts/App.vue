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
