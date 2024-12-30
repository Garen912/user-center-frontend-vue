import axios from 'axios'

const service = axios.create({
  // 区分开发和线上环境
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://codefather.cn',
  timeout: 5000,
  withCredentials: true,
})

service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)

    const { data } = response
    console.log(data)
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('user/current') &&
        !window.location.pathname.includes('/user/login')
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`
      }
    }
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default service
