<template>
    <div id='app'>
        <h1>Character Roulette</h1>
        <p>Randomly eliminate names until only 2 remains</p>
        <h1 v-bind:style="{paddingBottom:'30px'}">{{mostrecentmsg}}</h1>
        <div v-bind:style="{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}">
            <div v-bind:class="'inner-container'" v-bind:style="{ minHeight: '300px', minWidth: '150px' }">
                <h3>Eliminated</h3>
                <ol>
                    <li v-for="person in eliminated" :key=person>
                        {{person}}
                    </li>
                </ol>
            </div>
        </div>
        <div v-bind:class="'inner-container'" v-bind:style="{ minHeight: '300px', minWidth: '150px' }">
            <h3>Eliminated</h3>
            <ol>
                <li v-for="person in characters" :key=person>
                    {{person}}
                </li>
            </ol>
        </div>
        <button v-on:click="eliminate1()">Eliminate!</button>
    </div>
</template>
<script setup lang="ts">
import {characters} from './store.js';
export default{
    data(){
        return {
            eliminated:[],
            mostrecentmsg:'None',
        };
    },
    computed:{
        characters(){
            return characters.value;
        }
    },
    methods:{
        eliminate1(){
            if(this.characters.length===1){
                this.mostrecentmsg=this.characters[0]+' is the Winner!';
                document.title=this.characters[0]+' Wins!';
            }else{
                let i=Math.floor(Math.random()*this.characters.length);
                let character=this.characters.splice(i,1)[0];
                this.eliminated.push(character);
                this.mostrecentmsg=character+' has been eliminated!';
            }
        }
    }
};
</script>

<style scoped>
#app {
    border: 1px solid black;
    width: 90vw;
    height: 90vh;
    margin: 2% 5%;
    text-align: center;
    border-radius: 15px;
}
li:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
}
.inner-container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
}
#app > ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    border-radius: 5px;
}
#app li {
    padding-left: 6px;
    border-radius: 5px;
    width: 70px;
}
button {
    height: 50px;
    border-radius: 5px;
    background-color: red;
}
</style>







