<template>
  <header class="navbar version-heart">
    <div
      class="navbar-left"
      @mouseover="showIconDown = true"
      @mouseleave="showIconDown = false"
    >
      <el-dropdown
        trigger="click"
        placement="bottom"
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
            @click.native="clickDropdown(value, key)"
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
      // return this.showIconDown ? 'el-icon-arrow-down' : 'el-icon-collection-tag'
      return this.showIconDown ? 'v-down' : 'v-bookmark'
    }
  },
  mounted() {
    const index = Number(localStorage.getItem("bookmark-index-key")) || 0;
    this.index = index;
    this.initStatus();
  },
  methods: {
    initStatus() {
      this.eventBus.$on("data-setting-close", (status) => {
        this.settingStatus = status;
      });
    },
    openSetting() {
      this.eventBus.$emit("data-setting-status", true);
      this.settingStatus = true;
    },
    clickDropdown(value, index) {
      console.log("# value");
      console.log(value);
      console.log("# index");
      console.log(index);
      this.index = index;
      this.eventBus.$emit("data-card-index", index || 0);
      localStorage.setItem("bookmark-index-key", index);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0 10px;
  min-height: 50px;
  // margin: 36px auto;
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
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>