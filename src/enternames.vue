<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {characters} from './store.js';

const router=useRouter();
const names=ref(['']);
const numppl=ref('');

const addname=()=>{names.value.push('');}
const removename=(index)=>{names.value.splice(index,1);}
const startgame=()=>{
    characters.value=names.value.filter((name)=>name.trim()!=='');
    router.push('/roulette');
}
const addtototal=(numppl)=>{
    const num=parseInt(numppl,10);
    if(!isNaN(num)&&num>0){
        names.value=Array(num).fill('');
    }
}
</script>

<template>
    <title>Enter Names</title>
    <div v-bind:class="'container'">
        <h1>Enter Character Names</h1>
        <form @submit.prevent="startgame">
            <input v-model="numppl" type="number" placeholder="Enter # of characters">
            <button type="button" @click.prevent="addtototal(numppl)">Add all</button>
            <div v-for="(name,index) in names" :key="index">
                <input v-model="names[index]" placeholder="Enter name">
            </div>
            <button type='button' @click="addname">+</button>
            <button type='submit'>Begin</button>
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