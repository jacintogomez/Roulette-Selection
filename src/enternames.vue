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

<script>
export default {
  data() {
    return {
      names: [''] // Start with an empty array for user names
    };
  },
  methods: {
    addName() {
      this.names.push('');
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
    startGame() {
      // Navigate to the roulette page and pass data
      this.$router.push({
        path: '/roulette',
        query: { names: JSON.stringify(this.names) }
      });
    }
  }
};
</script>
