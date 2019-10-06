import Vue from 'vue'
import VueRouter from 'vue-router'
// Components
import Index from '@/components/Index'
import About from '@/components/About'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})


