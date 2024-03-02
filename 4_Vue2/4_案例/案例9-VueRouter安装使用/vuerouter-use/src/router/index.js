import VueRouter from 'vue-router'
import Vue from 'vue'

// VueRouter插件初始化
Vue.use(VueRouter)

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

// 创建路由对象
const router = new VueRouter({
  routes:[
    {path:'/find',component:Find},
    {path:'/my',component:My},
    {path:'/friend',component:Friend},
  ]
})

export default router