import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      const newCountList = state.list.find(item => item.id === obj.id)
      newCountList.count = obj.newCount
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      console.log(res)
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  }
}
