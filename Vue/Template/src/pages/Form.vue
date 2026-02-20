<script>
    // import axios from 'axios';

    export default {
        data() {
            return {
                // Properties data to be used in the component
                email: "",
                password: ""
            }
        },
        methods: {
            submitForm() {
                // Handle form submission logic here
                console.log("Email:", this.email);
                console.log("Password:", this.password);

                // Example post request using axios
                // axios.post("https://example.com/api/login", {
                //     email: this.email,
                //     password: this.password
                // }).then(response => {
                //     console.log("Login successful:", response.data);
                // }).catch(error => {
                //     console.error("Login failed:", error);
                // });
            }
        }
    }
</script>

<template>
    <div class="wrapper">
        <form action="" class="form">
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" class="form-control" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
        </form>
        <div>
            <h2>Values update automatically using <span class="code">v-model</span></h2>
            <p>Email: {{ email }}</p>
            <p>Password: {{ password }}</p>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.code {
    background-color: rgba(0,0,0,0.05);
    padding: 2px 4px;
    border-radius: 8px;
    font-family: monospace;
}
</style>