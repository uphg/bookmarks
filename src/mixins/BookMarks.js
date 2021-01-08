import { getFun } from "@/api/request.js"
import jsonList from "@/api/json-list.js"
export default {
  inject: ['eventBus'],
  data() {
    return {
      type: null,
      index: 0,
      cardIndex: 0,
      cardType: 'horizontal',
      contentKey: null,
      marksList: []
    }
  },
  computed: {
    /* 动态改变数据列表 */
    dataUrl() {
      return `/bookmarks/static/${jsonList[this.cardIndex].href}`
    }
  },
  mounted() {
    this.initData()
    this.getBookMarks(true)
    this.monitor()
  },
  methods: {
    initData() {
      this.$set(this, 'cardIndex', Number(localStorage.getItem('bookmark-index-key')) || 0)
      this.$set(this, 'cardType', localStorage.getItem('bookmark-type-key') || 'horizontal')
      // this.cardIndex = Number(localStorage.getItem('bookmark-index-key')) || 0
      // this.cardType = localStorage.getItem('bookmark-type-key') || 'horizontal'
    },
    monitor() {
      /* 监听书签卡片展示类型的变化 */
      this.eventBus.$on('data-setting-card-type', (type) => {
        this.cardType = type
        this.refreshKey(type)
      })
      /* 监听展示数据的变化 */
      this.eventBus.$on('data-card-index', (index) => {
        this.cardIndex = index
        this.refreshKey(index)
        this.getBookMarks()
      })
    },
    /* 请求书签数据 */
    getBookMarks(status) {
      getFun(this.dataUrl).then((response) => {
        this.marksList = response.data
        if (status) {
          this.$nextTick(() => { this.loadingTransition(status) })
        }
      }).catch((error) => {
        console.log("# error")
        console.log(error)
      })
    },
    /* 添加过渡动画 */
    loadingTransition() {
      const elements = document.querySelectorAll(".box-stagger")
      Velocity(elements, "transition.slideLeftBigIn", { stagger: 100 })
    },
    refreshKey(value) {
      this.contentKey = value + String(Math.abs(Math.random()*1000))
    }
  }
}
