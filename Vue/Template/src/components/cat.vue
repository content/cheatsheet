<script>
    import axios from 'axios';

    export default {
        props: {
            // Props to be passed to the component
            example: {
                type: String,
                default: '',
                required: false
            }
        },
        data() {
            return {
                // Properties data to be used in the component
                name: "cat",
                url: "",
            }
        },
        mounted() {
            // Lifecycle hook to perform actions when the component is mounted
            axios.get('https://api.thecatapi.com/v1/images/search')
                .then(response => {
                    console.log(response.data[0].url);
                    this.url = response.data[0].url;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        computed: {
            // Computed properties to compute values based on the component's data
            nameUpperCase() {
                return this.name.toUpperCase();
            },
            nameLowerCase() {
                return this.name.toLowerCase();
            }
        },
        methods: {
            // Methods to define functions that can be called in the component
            // ...
        },
        watch: {
            // Watchers to watch for changes in data properties and perform actions accordingly
            name(newValue, oldValue) {
                console.log(`Name changed from ${oldValue} to ${newValue}`);
            }
        }
    }
</script>

<template>
    <div class="cat-component">
        <h1>This is rendered within a page component</h1>
        <p>Example string which was passed through a prop: {{ example }}</p>
        <img :src=url alt="" width="400">
    </div>
</template>

<style scoped>
    .cat-component {
        text-align: center;
        border-radius: 25px;
        background-color: rgba(0,0,0, 0.1);
        padding: 20px;
    }

    .cat-component img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        margin-top: 20px;
    }
</style>