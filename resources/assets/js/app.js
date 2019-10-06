import Vue from 'vue'
import VueRouter from 'vue-router'
// import auth from '@/auth'
import router from '@/router'
import store from '@/store'
import App from '@/components/App'


Vue.config.productionTip = true

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
