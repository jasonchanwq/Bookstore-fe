import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://calm-mountain-10484-296975bbfc99.herokuapp.com/', // 根据你的实际情况设置 baseURL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
    // 在这里可以添加其他默认的请求头
  }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如，可以在请求头中添加身份验证信息
    // config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default instance
