<template>
  <div id="app">
    <header class="navbar"></header>
    <main class="default-content">
      <Card
        v-for="item in 10"
        :key="item"
      />
    </main>
  </div>
</template>

<script>
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
