import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('focus',{
  inserted: function (el) {
    el.focus() //聚焦元素
  }})

new Vue({
  render: h => h(App),
}).$mount('#app')
