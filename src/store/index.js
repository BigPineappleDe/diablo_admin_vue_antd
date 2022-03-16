import { createStore } from 'vuex'
import cacheLib from '@/lib/cacheLib'

export default createStore({
  //全局参数
  state: {
    language: localStorage.getItem(cacheLib.key.language) ? localStorage.getItem(cacheLib.key.language) : process.env.VUE_APP_DEFAULT_LANGUAGE,
    user: {
      token: localStorage.getItem(cacheLib.key.user.token) ? localStorage.getItem(cacheLib.key.user.token) : null,
      info: localStorage.getItem(cacheLib.key.user.userInfo) ? localStorage.getItem(cacheLib.key.user.userInfo) : null,
    },
    isLoading: false
  },
  //同步Set
  mutations: {
    //开启loading
    showLoading (state) {
      if (!state.isLoading) state.isLoading = true
    },
    //关闭loading
    hideLoading (state) {
      state.isLoading = false
    }
  },
  //异步Set
  actions: {},
  //模块化
  modules: {}
})
