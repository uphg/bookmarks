<template>
  <transition name="fade-transform" mode="out-in">
    <main class="default-content version-heart" :key="contentKey">
      <Card
        v-for="(value, key) in marksList"
        :key="key"
        :title="value.title"
        :description="value.description"
        :img="value.img"
        :type="cardType"
      />
    </main>
  </transition>
</template>
<script>
import Card from './Card'

import getBookMarks from '@/mixins/BookMarks.js'
export default {
  components: { Card },
  mixins: [getBookMarks],
  data() {
    return {
      // cardType: 'horizontal', // 展示类型（横排[horizontal] / 竖排[vertical]）
      type: null
    }
  },
  inject: ['eventBus'],
  computed: {
    /* 每次操作页面时刷新 key */
    contentKey() {
      return this.cardIndex + this.cardType
    },
    cardList() {
      return this.bookMarks[this.cardIndex]['list'] || []
    },
    cardType: {
      get() {
        return this.type ? this.type : localStorage.getItem('bookmark-type-key') || 'horizontal'
      },
      set(value) {
        this.type = value
        localStorage.setItem('bookmark-type-key', value)
      }
    }
  },
  mounted() {
    // this.cardType = localStorage.getItem('bookmark-type-key') || 'horizontal'
    this.listenEvents()
  },
  methods: {
    /* @监听事件 */
    listenEvents() {
      /* 监听书签卡片展示类型的变化 */
      this.eventBus.$on('data-setting-card-type', (type) => {
        this.cardType = type
      })
      /* 监听书签数据分类 index 的变化 */
      this.eventBus.$on('data-card-index', (index) => {
        this.cardIndex = index
      })
    }
  },
}
</script>
<style lang="scss" scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s ease;
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