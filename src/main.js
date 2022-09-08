import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import App from './App'
import store from './store'
import router from './router'
import * as echarts from 'echarts'
import 'echarts-gl';
Vue.prototype.$echarts = echarts
import '@/icons' // icon
import '@/permission' // permission control
// 图表
import 'echarts'
import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

// data-v

import dataV from '@jiaminghi/data-view'

Vue.use(dataV)


import '@/styles/index.scss'
import '@/styles/index.scss' // global css
import '@/assets/font_icon/iconfont.css'
import '@/assets/icons/index' // icon

// 富文本编辑器
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
import formatDate from './utils/FormDate'
// 注册为全局过滤器
Vue.filter('timestampToTime', formatDate)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' 
// set ElementUI lang to EN
Vue.use(ElementUI, { zhLocale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
