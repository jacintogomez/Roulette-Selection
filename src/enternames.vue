<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { characters } from './store.js'

const router = useRouter()
const names = ref([''])

const addName = () => {
    names.value.push('')
}

const removeName = (index) => {
    names.value.splice(index, 1)
}

const startGame = () => {
    characters.value = names.value.filter(name => name.trim() !== '')
    router.push('/roulette')
}
</script>

<template>
    <div>
        <h1>Enter Names</h1>
        <form @submit.prevent="startGame">
            <div v-for="(name, index) in names" :key="index">
                <input v-model="names[index]" placeholder="Enter name" />
                <button @click.prevent="removeName(index)">Remove</button>
            </div>
            <button type="button" @click="addName">Add Name</button>
            <button type="submit">Start Game</button>
        </form>
    </div>
</template>