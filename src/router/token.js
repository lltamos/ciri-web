import axios from "axios"
import tool from '@/api/tool'
import router from './index'

axios.defaults.headers.token = tool.gettoken()

axios.interceptors.request.use((config) => {
  // console.log(config)
  // console.log(arguments)
  return config
}, (error) => {
  // console.log(error)
  // console.log(arguments)
})
axios.interceptors.response.use(function (response) {
  // token 已过期，重定向到登录页面
  console.log(response);
  if (response.data.code == 401){
    sessionStorage.clear()
    router.replace({
      path: '/login',
      query: {redirect: router.currentRoute.fullPath}
    })
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
export default {

}
