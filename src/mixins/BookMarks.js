import { getFun } from '@/api/request.js'
import jsonList from '@/api/json-list.js'
export default {
  data() {
    return {
      marksList: []
    }
  },
  mounted() {
    this.getBookMarks()
  },
  methods: {
    getBookMarks(url) {
      getFun(`/bookmarks/static/${jsonList[this.cardIndex]}`).then(response => {
        console.log('# response')
        console.log(response)
        this.marksList = response.data
      }).catch(error => {
        console.log('# error')
        console.log(error)
      })
    }
  },
}