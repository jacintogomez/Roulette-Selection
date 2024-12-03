<script setup>
import { ref, computed } from 'vue';
import CharacterRoulette from './characterroulette.vue'; // Import the new component
import EnterNames from './enternames.vue';

const routes = {
  '/': EnterNames, // Set as the homepage
  '/roulette': CharacterRoulette,
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] ;
});
</script>

<template>
  <div>
    <nav>
      <a href="#/">Enter Names</a> |
      <a href="#/roulette">Roulette</a> <!-- You can add this later -->
    </nav>
    <component :is="currentView" />
  </div>
</template>
