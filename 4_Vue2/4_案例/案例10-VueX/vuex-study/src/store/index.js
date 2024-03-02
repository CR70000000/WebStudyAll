// 这里面存放的就是 vuex 相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 导入其他仓库模块
import user from './modules/user'
import setting from './modules/setting'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // state 状态 即数据
  // 类似于vue组件中的data
  // 区别：
  // 1. data 是组件自己的数据
  // 2. state 是所有组件共享的数据
  state: {
    count: 100,
    title: '仓库的标题',
    list: [1, 2, 3, 4, 5]
  },
  // mutations 修改 state 数据的方法
  // state数据的修改只能通过 mutations
  // 提示：提交参数只能一个，如果有多个参数，包装成一个对象传递
  mutations: {
    resetCount (state) {
      state.count = 100
    },
    addCount (state, payload) {
      state.count += payload
    },
    subCount (state, payload) {
      state.count -= payload
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // actions 里面可以写异步操作
  // 提示：异步操作不能直接修改 state 数据
  actions: {
    changeCountAsync (context, newCount) {
      setTimeout(() => {
        context.commit('changeCount', newCount)
      }, 1000)
    }
  },
  // getters 类似于计算属性
  // 用于简化仓库数据，让组件获取仓库数据更加方便
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 3)
    }
  },
  // modules 接收其他模块
  // 用于项目特别复杂的时候，将 store 文件进行模块化拆分
  modules: {
    user,
    setting
  }
})

// 导出给main.js使用
export default store
