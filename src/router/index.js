import Vue from 'vue'
import Router from 'vue-router'

// 控制布局的路由
import Layout from '@/views/layout/Layout'

Vue.use(Router)

// 全局常量的路由map
export const constantRouterMap = [
  {
    path: './redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    // 判断是否登录 异步请求获取登录状态 （服务器检测当前ip是否存在缓存）
    path: '/home',
    component: () => import('@/views/home/index'),
    hidden: true
  },
  {
    path: '',
    redirect: '/home'
  }
]

export default new Router({
  routes: constantRouterMap
})

// 异步的路由map
export const asyncRouterMap = []
