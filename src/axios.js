import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://calm-mountain-10484-296975bbfc99.herokuapp.com/',
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('x-auth-token')
    config.headers['x-auth-token'] = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default instance
