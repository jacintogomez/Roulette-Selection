<script>
import {characters,pgtitle} from './store.js';
export default{
    data(){
        return {
            eliminated:[],
            mostrecentmsg:'None',
            randomized:[],
        };
    },
    created(){
        this.randomized=this.scrambled(characters.value);
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
            <div v-bind:style="{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}">
                <div v-bind:class="'inner-container'" v-bind:style="{minHeight:'300px',minWidth:'200px'}">
                    <h3>Eliminated</h3>
                    <ol>
                        <li v-for="person in eliminated" :key=person>
                            {{person}}
                        </li>
                    </ol>
                </div>
                <div v-bind:class="'inner-container'" v-bind:style="{minHeight:'300px',minWidth:'200px'}">
                    <h3>Contestants</h3>
                    <ol>
                        <li v-for="person in characters" :key=person>
                            {{person}}
                        </li>
                    </ol>
                </div>
                <button v-on:click="eliminate1()">Eliminate!</button>
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
    background-color: lightcoral;
}
li:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
}
.main-container{
    display: flex;
    flex-direction: column;
}
.inner-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 0 5%;
    flex: 1;
    background-color: white;
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
    border-radius: 5px;
    background-color: red;
    flex: 0.4;
}
</style>







