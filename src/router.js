import {createRouter,createWebHashHistory} from 'vue-router';
import EnterNames from './enternames.vue';
import CharacterRoulette from "./characterroulette.vue";

const routes=[
    {
        path:'/',
        name:'EnterNames',
        component:EnterNames,
        meta:{title:"Enter Names"},
    },
    {
        path:'/roulette',
        name:'CharacterRoulette',
        component:CharacterRoulette,
        meta:{title:"Roulette"},
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;