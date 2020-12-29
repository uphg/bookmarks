<template>
  <a class="card" :class="typeClass" :href="href" target="_blank">
    <div class="card-content">
      <div class="card-image-block" :style="{ backgroundColor: color }">
        <el-image
          class="card-image-item"
          :src="img"
          :fit="'scale-down'"
          scroll-container=".scrollbar-wrapper"
          lazy
        >
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
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
      default: '谷歌搜索',
    },
    href: {
      type: String,
      default: ' ',
    },
    img: {
      type: String,
      default: require('@/assets/img/google.png'),
    },
    description: {
      type: String,
      default: '谷歌搜索，国内不知名404小厂',
    },
    type: {
      type: String,
      default: 'vertical',
    },
    color: {
      type: String,
      default: '#edf0f3',
    }
  },
  computed: {
    typeClass() {
      return this.type === "vertical" ? "card-vertical" : "card-horizontal";
    },
  }
};
</script>
<style lang="scss" scoped>
.card {
  display: block;
  padding: 10px;
  margin-bottom: 9px;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    border-color: #edf0f3;
    box-shadow: 0 2px 10px rgba(209, 217, 231, 0.3);
    .card-description {
      color: #002059;
    }
  }
}
.card-image-block {
  width: 288px;
  height: 94px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image-item {
  max-height: 48px;
}
.card-text-block {
  padding: 12px;
}
.card-title {
  font-size: 24px;
  line-height: 1;
  color: #002059;
}
.card-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #667899;
  transition: color 0.2s ease;
}
.card-horizontal {
  width: calc(33.333333% - 6px);
  margin-right: 9px;
  &:last-child {
    width: calc(33.333334% - 6px);
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
  .card-title {
    margin-bottom: 10px;
    padding-top: 12px;
  }
}
.card-vertical {
  width: 100%;
  .card-content {
    display: flex;
  }
  .card-text-block {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 36px;
  }
}
</style>