<template>
  <transition name="fade-transform" mode="out-in">
    <main class="default-content version-heart" :key="contentKey">
      <Card
        v-for="(value, key) in marksList"
        :key="key"
        :title="value.title"
        :description="value.description"
        :img="value.img ? require(`@/assets/img/${value.img}`) : null"
        :text="value.text"
        :color="value.color"
        :textColor="value.textColor"
        :type="cardType"
        :href="value.href"
      />
    </main>
  </transition>
</template>
<script>
import Card from './Card'
import getBookMarks from '@/mixins/BookMarks.js'
export default {
  components: { Card },
  mixins: [getBookMarks]
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