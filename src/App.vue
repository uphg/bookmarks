<template>
  <div id="app">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <Navbar />
      <Main />
      <Setting />
    </el-scrollbar>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Setting from './components/Setting'
export default {
  name: 'App',
  components: { Navbar, Main, Setting },
  data() {
    return { eventBus: new Vue() }
  },
  provide() {
    return {
      eventBus: this.eventBus, 
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-scrollbar {
  height: 100%;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}


</style>
