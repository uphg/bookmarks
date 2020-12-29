<template>
  <transition name="fade-transform" mode="out-in">
    <main class="default-content version-heart" :key="contentKey">
      <Card
        v-for="(value, key) in cardList"
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
import bookMarks from '@/api/bookmarks'
import listenEvents from '@/mixin/listen-events.js' /* 存放监听事件 */
export default {
  mixins: [listenEvents],
  components: { Card },
  data() {
    return {
      cardType: 'horizontal', // 展示类型（横排[horizontal] / 竖排[vertical]）
      cardIndex: 0, // 当前分类的 index，与 id 对应
      bookMarks: bookMarks, // 书签数据
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