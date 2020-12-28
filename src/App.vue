<template>
  <div id="app">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <Navbar />
      <transition name="fade-transform" mode="out-in">
        <main class="default-content version-heart" :key="contentKey">
          <Card
            v-for="(value, key) in cardList[cardIndex]['list']"
            :key="key"
            :title="value.title"
            :description="value.description"
            :img="value.img"
            :type="cardType"
          />
        </main>
      </transition>
      <Setting />
    </el-scrollbar>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar'
import Setting from './components/Setting'
import Card from './components/Card'
import bookMarks from './api/bookmarks'

export default {
  name: 'App',
  components: {
    Navbar,
    Setting,
    Card,
  },
  data() {
    return {
      eventBus: new Vue(),
      cardType: 'horizontal',
      cardIndex: 0,
      cardList: bookMarks,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  computed:{
    contentKey() {
      return this.cardIndex + this.cardType
    }
  },
  mounted() {
    this.eventBus.$on('data-setting-card-type', (type) => {
      this.cardType = type
    })
    this.eventBus.$on('data-card-index', (index) => {
      console.log('列表内容改变了')
      console.log(index)
      this.cardIndex = index
    })
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

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
