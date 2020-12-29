<template>
  <div id="app" :class="{ dark: themeType === 'dark' }">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="box-stagger" style="display: none; transition: ease 0s"></div>
      <div class="box-stagger">
        <Navbar />
      </div>
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
    return {
      eventBus: new Vue(),
      themeType: 'light'
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.themeType = this.getLocal('bookmark-theme-key')
      this.loadingTransition()
      this.eventBus.$on('data-setting-card-theme', (type) => {
        this.themeType = type
      })
    },
    loadingTransition() {
      const elements = document.querySelectorAll('.box-stagger')
      Velocity(elements, 'transition.slideLeftBigIn', { stagger: 100 })
    },
    getLocal(name) {
      return localStorage.getItem(name)
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
