<template>
  <a class="card box-stagger" :class="typeClass" :href="href" target="_blank">
    <div class="card-content">
      <div
        class="card-image-block"
        :class="{'card-show-border': showBorder}"
        :style="{ backgroundColor: color}"
      >
        <el-image
          v-if="img"
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
        <div
          class="card-logo-text"
          :style="{color: textColor}"
          v-else
        >{{text ? text : title}}</div>
      </div>
      <div class="card-text-block">
        <h2 class="card-title text-omit">{{ title }}</h2>
        <p class="card-description text-omit">{{ description }}</p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    href: {
      type: String,
      default: " ",
    },
    img: {
      type: String,
      default: require("@/assets/img/google-logo.png"),
    },
    text: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: "你的描述不见了哦",
    },
    type: {
      type: String,
      default: "vertical",
    },
    textColor: {
      type: String,
      default: "#2c3e50"
    },
    color: {
      type: String,
      default: "#edf0f3",
    },
  },
  computed: {
    typeClass() {
      return this.type === "vertical" ? "card-vertical" : "card-horizontal";
    },
    showBorder() {
      return this.color === '#ffffff' ? true : false
    }
  },
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
  width: 290px;
  height: 94px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &.card-show-border {
    border: 1px solid #E4E7ED;
  }
}
.card-image-item {
  height: 60px;
}
.card-text-block {
  padding: 12px;
}
.card-title {
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  height: 36px;
  color: #002059;
}
.card-description {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  color: #667899;
  transition: color 0.2s ease;
}
.card-logo-text {
  font-size: 30px;
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
    margin-top: 8px;
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
    align-items: center;
    padding-left: 36px;
  }
  .card-title {
    width: 260px;
  }
  .card-description {
    width: 338px;
    padding-left: 20px;
  }
}
.text-omit {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>