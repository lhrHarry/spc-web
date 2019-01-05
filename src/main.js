// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Cookies from 'js-cookie'

// 在默认的HTML元素样式上提供了跨浏览器的高度一致性  npm i normalize.css --save-dev  (原因没有安装：css-loader   和style-loader :  npm install css-loader style-loader)
import 'normalize.css/normalize.css'
// 导入element ui 插件及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 自定义的样式文件
import '@/styles/index.scss'

import App from './App' // 导入App组件
import router from './router' // 导入路由
import store from './store' // vuex的组件传值插件储存

import i18n from './lang' // 导入国际化
import './icons' // 导入icon配置自动读取icon文件

Vue.use(ElementUI, {
  // 设置element ui的默认大小
  size: Cookies.get('size') || 'medium'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App) // 将App渲染到界面上--> index.html的body中
})
