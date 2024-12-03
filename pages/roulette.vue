<template>
  <div>
    <h1>Character Roulette</h1>
    <p>Randomly eliminate names from a list until only 1 remains</p>
    <h1>{{ mostRecentMsg }}</h1>
    <div style="display: flex; justify-content: space-around;">
      <div class="inner-container">
        <h3>Eliminated</h3>
        <ol>
          <li v-for="person in eliminated" :key="person">{{ person }}</li>
        </ol>
      </div>
      <div class="inner-container">
        <h3>Remaining</h3>
        <ol>
          <li v-for="person in characters" :key="person">{{ person }}</li>
        </ol>
      </div>
    </div>
    <button @click="eliminate1">Eliminate!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostRecentMsg: 'None',
      characters: [],
      eliminated: []
    };
  },
  mounted() {
    // Get names from the query params and initialize
    const names = JSON.parse(this.$route.query.names || '[]');
    this.characters = names.map(name => name.trim()).filter(name => name);
  },
  methods: {
    eliminate1() {
      if (this.characters.length === 1) {
        this.mostRecentMsg = `${this.characters[0]} is the Winner!`;
      } else {
        const index = Math.floor(Math.random() * this.characters.length);
        const eliminatedPerson = this.characters.splice(index, 1)[0];
        this.eliminated.push(eliminatedPerson);
        this.mostRecentMsg = `${eliminatedPerson} has been eliminated`;
      }
    }
  }
};
</script>

<style>
.inner-container {
  border: 1px solid black;
  padding: 10px;
  min-height: 200px;
}
</style>
