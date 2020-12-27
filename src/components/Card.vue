<template>
  <a class="card" :class="className" :href="href">
    <div class="card-content">
      <div class="card-image-block">
        <img class="card-image-item" :src="img" alt="背景图片" />
      </div>
      <div class="card-text-block">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-description">{{ description }}</p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "谷歌搜索",
    },
    href: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: require("@/assets/img/google.png"),
    },
    description: {
      type: String,
      default: "谷歌搜索，国内不知名404小厂",
    },
    type: {
      type: String,
      default: "horizontal",
    },
  },
  computed: {
    className() {
      return this.default === "vertical" ? "card-vertical" : "card-horizontal";
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  display: block;
  width: calc(33.333333% - 6px);
  padding: 10px;
  margin-right: 9px;
  margin-bottom: 9px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    border-color: #e0e0e0;
    box-shadow: 0 2px 10px rgba(209, 217, 231, 0.3);
  }
  &:last-child {
    width: calc(33.333334% - 6px);
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
}
.card-horizontal {
  .card-image-block {
    width: 288px;
    height: 94px;
    border-radius: 10px;
    background-color: #eee;
    overflow: hidden;
  }
  .card-image-item {
    width: 100%;
    height: 100%;
  }
  .card-text-block {
    padding: 12px;
  }
  .card-title {
    font-size: 24px;
    line-height: 1;
    color: #002059;
    margin-bottom: 10px;
    padding-top: 12px;
  }
  .card-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #667899;
  }
}
.card-vertical {

}
</style>