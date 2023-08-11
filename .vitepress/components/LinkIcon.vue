<template>
  <div class="icon">
    <span class="placeholder" v-if="isError">☁</span>
    <img v-else class="icon-image" :src="_icon" @error="onError">
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';

const props = defineProps({
  icon: String as PropType<string>,
  link: String as PropType<string>
})

const isError = ref(false)

const url = computed(() => {
  const { link } = props;
  return link && (/(^http(s)?:\/\/)|(^\/\/)/.test(link) ? link : `https://${link}`)
})

const _icon = computed(() => {
  return props.icon || url.value + (/\/$/.test(url.value!) ? `favicon.ico` : `/favicon.ico`)
})

const onError = () => {
  isError.value = true
}
</script>

<style scoped>
.icon {
  display: flex;
}

.placeholder, .icon-image {
  width: 24px;
  height: 24px;
}

.placeholder {
  text-align: center;
}

</style>