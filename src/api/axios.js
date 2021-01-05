import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000000, /* 请求超时时间 */
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  }
})

/* 请求拦截器 */
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 处理请求错误
    return error
  }
)

/* 响应拦截器 */
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return error
  }
)
export default service