import { createRouter, createWebHashHistory } from 'vue-router'
import EnterNames from './enternames.vue'
import CharacterRoulette from './characterroulette.vue'

const routes = [
    {
        path: '/',
        name: 'EnterNames',
        component: EnterNames
    },
    {
        path: '/roulette',
        name: 'CharacterRoulette',
        component: CharacterRoulette
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router