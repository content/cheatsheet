import { createRouter, createWebHistory } from "vue-router";
import Example from "./pages/Example.vue";
import App from "./pages/Home.vue";
import Form from "./pages/Form.vue";

const routes = [
    {
        name: 'Home',
        path: "/",
        component: App 
    },
    {
        name: "Example",
        path: "/example",
        component: Example
    },
    {
        name: "Form",
        path: "/form",
        component: Form
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;