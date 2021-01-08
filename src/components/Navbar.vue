<template>
  <header class="navbar version-heart">
    <div class="navbar-left">
      <!-- <div class="navbar-logo">
        <i class="el-icon-apple"></i>
      </div>
      <div class="divider"></div> -->
      <div class="navbar-title">
        <el-dropdown trigger="click" placement="bottom">
          <span class="el-dropdown-link">
            <span class="navbar-icon-down"><i class="el-icon-arrow-down el-icon--left"></i></span>
            <span>{{ title }}</span>
          </span>
          <el-dropdown-menu slot="dropdown" class="navbar-dropdown-menu">
            <el-dropdown-item
              v-for="(value, key) in titleList"
              :key="key"
              @click.native="clickDropdown(value, key)"
            >{{ value.title }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
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
export default {
  inject: ["eventBus"],
  data() {
    return {
      settingStatus: false,
      index: 0,
      titleList: bookMarks,
    };
  },
  computed: {
    title() {
      return bookMarks[this.index].title;
    },
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
</style>