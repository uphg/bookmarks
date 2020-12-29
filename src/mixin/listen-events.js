
/* === 用于存放监听事件 === */
export default {
  mounted() {
    this.listenEvents()
  },
  methods: {
    /* @监听事件 */
    listenEvents() {
      /* 监听书签卡片展示类型的变化 */
      this.eventBus.$on('data-setting-card-type', (type) => {
        this.cardType = type
      })
      /* 监听书签数据分类 index 的变化 */
      this.eventBus.$on('data-card-index', (index) => {
        this.cardIndex = index
      })
    }
  },
}