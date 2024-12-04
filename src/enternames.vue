<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {characters} from './store.js';

const router=useRouter();
const names=ref(['']);

const addname=()=>{names.value.push('');}
const removename=(index)=>{names.value.splice(index,1);}
const startgame=()=>{
    characters.value=names.value.filter(name=>name.trim()!=='');
    router.push('/roulette');
}
</script>

<template>
    <div>
        <h1>Enter Character Names</h1>
        <form @submit.prevent="startgame">
            <div v-for="(name,index) in names" :key="index">
                <input v-model="names[index]" placeholder="Enter name">
                <button @click.prevent="removename(index)">-</button>
            </div>
            <button type='button' @click="addname">+</button>
            <button type='submit'>Begin</button>
        </form>
    </div>
</template>