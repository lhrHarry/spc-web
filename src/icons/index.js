/*
  icon 组件
 */
import Vue from 'vue'
// 导入svg组件
import SvgIcon from '@/components/SvgIcon'

// 全局注册 将Svg注册为Vue组件
Vue.component('svg-icon', SvgIcon)
// 引入文件 (引入以svg结尾的的文件) (路径, 是否使用子目录, 以.svg结尾)
const req = require.context('./svg', false, /\.svg$/)
/* resolve 是一个函数并返回已解析请求的模块ID
 keys 是一个函数，它返回上下文模块可以处理的所有可能请求的数组。
 id是上下文模块的模块ID
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
// 将svg目录下所有的svg文件都引入到项目中了。
requireAll(req)
