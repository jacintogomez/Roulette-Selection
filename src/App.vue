<script setup>

import {ref,computed} from 'vue';
import CharacterRoulette from './characterroulette.vue';
import EnterNames from './enternames.vue';
import {RouterView} from 'vue-router';
import {watch} from 'vue';
import {useRoute} from 'vue-router';

const route=useRoute();

const routes={
    '/': EnterNames,
    '/roulette': CharacterRoulette,
};

const currentPath=ref(window.location.hash);
window.addEventListener('hashchange',()=>{
    currentPath.value=window.location.hash;
});

const currentView=computed(()=>{
    return routes[currentPath.value.slice(1)||'/'];
});

watch(
    ()=>route.meta.title,
    (newtitle)=>{
        if(newtitle){
            document.title=newtitle;
        }
    }
);

</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">Enter Names</RouterLink> |
            <RouterLink to="/roulette">Roulette</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>