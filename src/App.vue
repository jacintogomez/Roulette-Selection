<script setup>

import {ref,computed} from 'vue';
import CharacterRoulette from './characterroulette.vue';
import EnterNames from './enternames.vue';
import {RouterView} from 'vue-router';

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

</script>

<template>
    <div>
        <nav>
            <RouterLink to="/">Enter Names</RouterLink>
            <RouterLink to="/roulette">Roulette</RouterLink>
        </nav>
        <RouterView />
    </div>
</template>