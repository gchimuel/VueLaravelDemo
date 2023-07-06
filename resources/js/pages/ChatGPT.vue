<template>
    <form class="mb-4" @submit="chatSubmit">
        <input v-model="query"  @keyup.enter="chatSubmit" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="query" type="text" placeholder="Query">
    </form>
    <div class="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 min-h-screen">
        <pre class="text-justify text-white">{{output}}</pre>
    </div>
</template>

<style>

</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                query: '',
                output: ''
            };
        },
        methods: {
            chatSubmit(e) {
                e.preventDefault();

                let currentObj = this;

                document.getElementById('main-loading-overlay').classList.remove('invisible');

                axios.post('/chat', {
                    query: this.query
                })
                .then(function (response) {
                    document.getElementById('main-loading-overlay').classList.add('invisible');
                    console.log(response);
                    currentObj.output = response.data.reply;
                })
                .catch(function (error) {
                    document.getElementById('main-loading-overlay').classList.add('invisible');
                    console.log(error);
                    currentObj.output = error;
                });
            }
        }
    };
</script>
