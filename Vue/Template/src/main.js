import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import axios from 'axios';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

// You may want to set the base URL for axios requests here, for example:
// axios.defaults.baseURL = "http://localhost:3000/api"; // Set this to your API base URL
axios.defaults.baseURL = "";

createApp(App)
    .use(router)
    .mount('#app')
