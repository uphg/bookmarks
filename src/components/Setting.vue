<template>
  <el-drawer
    class="setting"
    title="我是标题"
    :visible.sync="visible"
    :with-header="false"
    @close="close"
    :modal="true"
  >
    <div class="setting">
      <div class="setting-title">
        <span class="setting-title-container">
          <i class="el-icon-setting"></i>
          <span class="setting-title-text">{{ "设置" }}</span>
        </span>
        <i
          class="el-icon-close setting-title-close"
          @click="visible = false"
        ></i>
      </div>
      <div class="setting-content">
        <setting-item title="切换排列方式">
          <el-switch
            v-model="type"
            active-text="竖排"
            inactive-text="横排"
            @change="changeTypeSwitch"
          >
          </el-switch>
        </setting-item>
        <setting-item title="切换皮肤">
          <el-switch
            v-model="theme"
            active-text="睡觉"
            inactive-text="起床"
            @change="changeThemeSwitch"
          >
          </el-switch>
        </setting-item>
      </div>
    </div>
  </el-drawer>
</template>
<script>
import SettingItem from './SettingItem.vue';
export default {
  components: { SettingItem },
  name: 'Setting',
  inject: ['eventBus'],
  data() {
    return {
      visible: false,
      type: false,
      theme: false,
    }
  },
  mounted() {
    this.initStatus()
  },
  methods: {
    initStatus() {
      this.eventBus.$on('data-setting-status', (status) => { this.visible = status })
      this.type = localStorage.getItem('bookmark-type-key') === 'vertical' ? true : false
      this.theme = localStorage.getItem('bookmark-theme-key') === 'dark' ? true : false
    },
    /* 关闭时通知其他页面刷新状态 */
    close() {
      this.addEvent('data-setting-close', false)
    },
    changeTypeSwitch() {
      if (this.type) {
        this.setType('vertical')
      } else {
        this.setType('horizontal')
      }
    },
    changeThemeSwitch() {
      if(this.theme) {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }
    },
    /* 修改主题 */
    setTheme(type) {
      this.addEvent('data-setting-card-theme', type)
      localStorage.setItem('bookmark-theme-key', type)
    },
    /* 修改展示方式（列 / 行） */
    setType(type) {
      this.addEvent('data-setting-card-type', type)
      localStorage.setItem('bookmark-type-key', type)
    },
    /* 添加事件 */
    addEvent(name, type) {
      this.eventBus.$emit(name, type)
    }
  }
};
</script>