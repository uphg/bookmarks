<template>
  <header class="navbar version-heart">
    <div class="navbar-left">
      <div class="navbar-logo">
        <i class="el-icon-notebook-2"></i>
      </div>
      <div class="divider"></div>
      <div class="navbar-title">
        <el-dropdown trigger="click" placement="bottom">
          <span class="el-dropdown-link"
            >{{ title }}<i class="el-icon-arrow-down el-icon--right"></i
          ></span>
          <el-dropdown-menu slot="dropdown" class="navbar-dropdown-menu">
            <el-dropdown-item
              v-for="(value, key) in titleList"
              :key="key"
              @click.native="clickDropdown(value)"
              >{{ value.title }}</el-dropdown-item
            >
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
import bookMarks from '../api/bookmarks'
export default {
  inject: ['eventBus'],
  data() {
    let index = 0
    let createItem = (name) => {
      const id = index
      index += 1
      return { id: index, name }
    }
    return {
      settingStatus: false,
      title: '黄金糕',
      titleList: bookMarks
    }
  },
  mounted() {
    this.initStatus()
  },
  methods: {
    initStatus() {
      this.eventBus.$on('data-setting-close', (status) => {
        this.settingStatus = status
      })
    },
    openSetting() {
      this.eventBus.$emit('data-setting', true)
      this.settingStatus = true
    },
    clickDropdown(value) {
      this.title = value.title
      console.log('# value')
      console.log(value)
      this.eventBus.$emit('data-card-index', value.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0 10px;
  min-height: 50px;
  margin: 36px auto;
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