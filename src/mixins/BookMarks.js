import { getFun } from '@/api/request.js'
import jsonList from '@/api/json-list.js'
export default {
  data() {
    return {
      marksList: [],
      cardIndex: 0
    }
  },
  mounted() {
    this.getBookMarks()
  },
  methods: {
    getBookMarks(url) {
      getFun(`/bookmarks/static/${jsonList[this.cardIndex].href}`).then(response => {
        console.log('# response')
        const jsonData = response
        console.log(JSON.parse(jsonData))
      }).catch(error => {
        console.log('# error')
        console.log(error)
      })
    }
  },
}