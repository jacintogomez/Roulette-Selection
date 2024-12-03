import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/enternames.vue';
import RoulettePage from './pages/roulette.vue';

const routes = [
    { path: '/', component: HomePage }, // Page for entering names
    { path: '/roulette', component: RoulettePage } // Page for the roulette game
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
