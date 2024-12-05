import {createRouter,createWebHashHistory} from 'vue-router';
import EnterNames from './enternames.vue';
import CharacterRoulette from "./characterroulette.vue";
import {pgtitle} from './store.js';

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
        meta:{title:pgtitle.value},
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,fro,next)=>{
    const title=pgtitle.value||to.meta.title||"Default";
    console.log('title is '+title+' vs '+(pgtitle.value||'none'));
    document.title=title;
    next();
});

export default router;