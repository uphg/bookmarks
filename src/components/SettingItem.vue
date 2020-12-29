<template>
  <section class="setting-item">
    <div class="setting-item-title">{{title}}</div>
    <div class="setting-item-content">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SettingItem',
  props: ['title']
}
</script>