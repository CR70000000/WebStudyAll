import Vue from 'vue'
import VueRouter from "vue-router"
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      // 通过 children 配置项，可以配置子路由
      // 1. 在children 配置
      // 2. 准备路由出口 <router-view>
      children: [
        { path: '/article', component: () => import('@/views/Article.vue') },
        { path: '/collect', component: () => import('@/views/Collect.vue') },
        { path: '/like', component: () => import('@/views/Like.vue') },
        { path: '/user', component: () => import('@/views/User.vue') }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail
    },
  ]
})

export default router