import { getFun } from '@/api/request.js'
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
    getBookMarks() {
      getFun('../static/data.json').then(response => {
        console.log('# response')
        console.log(response)
      }).catch(error => {
        console.log('# error')
        console.log(error)
      })
    }
  },
}