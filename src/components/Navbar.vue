<template>
  <header class="navbar version-heart">
    <div
      class="navbar-left"
    >
      <el-dropdown
        trigger="click"
        placement="bottom"
        @command="handleCommand"
        @visible-change="handleVisible"
      >
        <div class="nav-dropdown">
          <div class="navbar-logo">
            <transition name="component-fade" mode="out-in">
              <component :is="leftIcon"></component>
            </transition>
          </div>
          <div class="divider"></div>
          <div class="navbar-title">
            <span class="el-dropdown-link">{{ title }}</span>
          </div>
        </div>
        <el-dropdown-menu
          slot="dropdown"
          class="navbar-dropdown-menu"
        >
          <el-dropdown-item
            v-for="(value, key) in titleList"
            :key="key"
            :command="key"
            >{{ value.title }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="navbar-setting">
      <i
        class="el-icon-setting"
        :class="{ active: settingStatus }"
        @click="openSetting"
      ></i>
    </div>
  </header>
</template>
<script>
import bookMarks from "@/api/json-list.js";
import NavIconBookmark from "./NavIconBookmark.vue"
import NavIconDown from "./NavIconDown.vue"
export default {
  inject: ["eventBus"],
  components: {
    'v-bookmark': NavIconBookmark,
    'v-down': NavIconDown,
  },
  data() {
    return {
      settingStatus: false,
      index: 0,
      titleList: bookMarks,
      showIconDown: false,
    };
  },
  computed: {
    title() {
      return bookMarks[this.index].title;
    },
    leftIcon() {
      return this.showIconDown ? 'v-down' : 'v-bookmark'
    }
  },
  mounted() {
    const index = Number(localStorage.getItem("bookmark-index-key")) || 0;
    this.index = index;
    this.initStatus();
  },
  methods: {
    // 监听抽屉状态变化
    initStatus() {
      this.eventBus.$on("data-setting-close", (status) => {
        this.settingStatus = status;
      });
    },
    // 打开右侧设置抽屉
    openSetting() {
      this.eventBus.$emit("data-setting-status", true);
      this.settingStatus = true;
    },
    // 点击下拉触发
    handleCommand(index) {
      this.index = index;
      this.eventBus.$emit("data-card-index", index || 0);
      localStorage.setItem("bookmark-index-key", index);
    },
    // 下拉菜单的 显示/隐藏 回调函数
    handleVisible(status) {
      this.showIconDown = status
    }
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0 10px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar i:before {
  cursor: pointer;
}

.navbar-left {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.navbar-logo,
.navbar-title {
  display: flex;
  cursor: pointer;
}
.navbar-logo {
  width: 26px;
  height: 26px;
}

.el-icon-setting {
  transition: transform 0.8s;
  &.active {
    color: #007dff;
    transform: rotate(0.5turn);
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #002059;
}
.nav-dropdown {
  display: flex;
  &:focus {
    outline: none;
  }
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>