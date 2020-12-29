<template>
  <el-drawer
    class="setting"
    title="我是标题"
    :visible.sync="visible"
    :with-header="false"
    @close="close"
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
        <div class="setting-item-title">{{'设置排列方式'}}</div>
        <el-switch
          v-model="cardType"
          active-text="竖排"
          inactive-text="横排"
          @change="changeSwitch"
        >
        </el-switch>
      </div>
    </div>
  </el-drawer>
</template>
<script>
export default {
  name: 'Setting',
  inject: ['eventBus'],
  data() {
    return {
      visible: false,
      cardType: false
    }
  },
  mounted() {
    this.initStatus()
  },
  methods: {
    initStatus() {
      this.eventBus.$on('data-setting-status', (status) => { this.visible = status })
    },
    /* 关闭时通知其他页面刷新状态 */
    close() {
      this.eventBus.$emit('data-setting-close', false)
    },
    changeSwitch() {
      if (this.cardType) {
        this.setCardType('vertical')
      } else {
        this.setCardType('horizontal')
      }
    },
    /* 修改展示方式（列 / 行） */
    setCardType(type) {
      this.eventBus.$emit('data-setting-card-type', type)
    }
  }
};
</script>