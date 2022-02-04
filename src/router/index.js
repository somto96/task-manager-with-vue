import { createRouter, createWebHistory } from "vue-router";

//  Lazy loading route
const About = () => import('@/views/About');
const Home = () => import('@/views/Home');

const routes = [
    {
        path: "/",
        component: Home,
        name: Home
    },
    {
        path: "/about",
        component: About,
        name: About
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;