import { getFun } from "@/api/request.js"
import jsonList from "@/api/json-list.js"
export default {
  inject: ['eventBus'],
  data() {
    return {
      type: null,
      index: 0,
      marksList: []
    }
  },
  computed: {
    /* 每次操作页面时刷新 key */
    contentKey() {
      return this.cardIndex + this.cardType
    },
    /* 动态改变数据列表 */
    dataUrl() {
      return `/bookmarks/static/${jsonList[this.cardIndex].href}`
    },
    cardIndex: {
      get() {
        const number = Number(this.index ? this.index : localStorage.getItem('bookmark-index-key') || 0)
        return number
      },
      set(value) {
        this.index = value
        localStorage.setItem('bookmark-index-key', value)
      }
    },
    /* 展示类型（横排[horizontal] / 竖排[vertical]） */
    cardType: {
      get() {
        return this.type ? this.type : localStorage.getItem('bookmark-type-key') || 'horizontal'
      },
      set(value) {
        this.type = value
        localStorage.setItem('bookmark-type-key', value)
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.getBookMarks(true)
      this.cardType = localStorage.getItem('bookmark-type-key') || 'horizontal'
      /* 监听书签卡片展示类型的变化 */
      this.eventBus.$on('data-setting-card-type', (type) => {
        this.cardType = type
      })
      this.eventBus.$on('data-card-index', (index) => {
        this.cardIndex = index
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
    }
  }
}
