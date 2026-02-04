<script>
import {characters,pgtitle} from './store.js';
export default{
    data(){
        return {
            eliminated:[],
            mostrecentmsg:'None',
            randomized:[],
            gameInProgress: true,
        };
    },
    created(){
        this.randomized=this.scrambled(characters.value);
    },
    mounted(){
        // Add beforeunload listener when component is mounted
        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
    beforeUnmount(){
        // Clean up the event listener when component is destroyed
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    computed:{
        pgtitle() {
            return pgtitle;
        },
        characters(){
            return this.randomized;
        }
    },
    methods:{
        handleBeforeUnload(event){
            // Only show warning if game is still in progress (no winner yet)
            if(this.gameInProgress){
                event.preventDefault();
                // Chrome requires returnValue to be set
                event.returnValue = '';
                return '';
            }
        },
        scrambled(originalar){
            let ar=[...originalar];
            for(let i=ar.length-1;i>0;i--){
                const j=Math.floor(Math.random()*(i+1));
                [ar[i],ar[j]]=[ar[j],ar[i]];
            }
            return ar;
        },
        eliminate1(){
            if(this.randomized.length===1){
                this.mostrecentmsg=this.randomized[0]+' is the Winner!';
                document.title=this.randomized[0]+' Wins!';
                // Game is over, disable the warning
                this.gameInProgress = false;
            }else{
                let i=Math.floor(Math.random()*this.randomized.length);
                let character=this.randomized.splice(i,1)[0];
                this.eliminated.push(character);
                this.mostrecentmsg=character+' has been eliminated!';
            }
        }
    }
};
</script>

<template>
    <div id='app'>
        <div v-bind:class="'main-container'">
            <h1>{{pgtitle}}</h1>
            <p>Randomly eliminate names until only 1 remains</p>
            <h1 v-bind:style="{paddingBottom:'30px'}">{{mostrecentmsg}}</h1>
            <div v-bind:class="'content-wrapper'">
                <div v-bind:class="'boxes-container'">
                    <div v-bind:class="'inner-container'" v-bind:style="{minWidth:'200px'}">
                        <h3>Eliminated</h3>
                        <ol>
                            <li v-for="person in eliminated" :key=person>
                                {{person}}
                            </li>
                        </ol>
                    </div>
                    <div v-bind:class="'inner-container'" v-bind:style="{minWidth:'200px'}">
                        <h3>Contestants</h3>
                        <ol>
                            <li v-for="person in characters" :key=person>
                                {{person}}
                            </li>
                        </ol>
                    </div>
                </div>
                <div v-bind:class="'button-container'">
                    <button v-on:click="eliminate1()">Eliminate!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#app {
    border: 1px solid black;
    width: 90vw;
    height: 90vh;
    text-align: center;
    border-radius: 15px;
    padding: 2%;
    background-color: lightgreen;
}
li:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
}
.main-container{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex: 1;
    overflow: hidden;
}
.boxes-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex: 1;
    align-items: flex-start;
    overflow-y: auto;
}
.button-container {
    display: flex;
    align-items: flex-start;
    padding-top: 20px;
}
.inner-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    background-color: white;
    max-height: 100%;
    overflow-y: auto;
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
}
button {
    height: 50px;
    width: 120px;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;
}
</style>