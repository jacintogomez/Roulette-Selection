<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {characters,pgtitle} from './store.js';

const router=useRouter();
const namesText=ref('');
const newpgtitle=ref('');

const startgame=()=>{
    // Split by newlines and filter out empty lines
    const namesList = namesText.value
        .split('\n')
        .map(name => name.trim())
        .filter(name => name !== '');

    characters.value = namesList;
    pgtitle.value = newpgtitle.value;
    router.push('/roulette');
}

// Prevent Enter key from submitting the form when in textarea
const handleKeydown = (event) => {
    if (event.key === 'Enter' && event.target.tagName === 'TEXTAREA') {
        // Allow Enter in textarea, prevent form submission
        event.stopPropagation();
    }
}
</script>

<template>
    <title>Enter Names</title>
    <div v-bind:class="'container'">
        <h1>Enter Character Names</h1>
        <form @submit.prevent="startgame" @keydown.enter="handleKeydown">
            <input v-model="newpgtitle" placeholder="Group title">
            <textarea
                v-model="namesText"
                placeholder="Enter character names (one per line)"
                rows="10"
                @keydown.enter.stop
            ></textarea>
            <button type='button' @click="startgame">Begin</button>
        </form>
    </div>
</template>

<style scoped>
.container{
    width: 500px;
    height: 500px;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: lightcoral;
}

textarea {
    width: 80%;
    margin: 10px 0;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-family: inherit;
    resize: vertical;
}

input {
    margin: 5px 0;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>

<style>
body{
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>