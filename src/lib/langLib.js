/**
 *
 *  User: Diablo
 *  Date: 2022/3/16
 *  User: 544730126@qq.com
 *  Blog: https://blog.fenglide.com.cn/
 *  Project: vue-client
 *  Action: 语言映射库
 *
 */

import store from '@/store'

//语言映射值
export const LANGUAGE_OBJ = {
  enUS: {
    date: 'enUS',
    server: 'en'
  },
  zhCN: {
    date: 'zhCn',
    server: 'zh-cn'
  }
}

export default {
  LANGUAGE_OBJ,
  //获取语言包
  getLang (fileName = 'default') {
    return require('@/resource/lang/' + LANGUAGE_OBJ[store.state.language].server + '/' + fileName + '.json')
  }
}
