import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注入，将路由对象注入到new Vue实例中，建立关联
  router: router
}).$mount('#app')
