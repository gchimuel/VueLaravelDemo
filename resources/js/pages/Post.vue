<template>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="formSubmit">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Username
            </label>
            <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Username">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="description"></textarea>
        </div>

        <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
    </form>

    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Output:</label>
        <pre class="text-justify">
            {{output}}
        </pre>
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
                name: '',
                description: '',
                output: ''
            };
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();

                let currentObj = this;

                axios.post('/query', {
                    name: this.name,
                    description: this.description
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    currentObj.output = error;
                });
            }
        }
    };
</script>
