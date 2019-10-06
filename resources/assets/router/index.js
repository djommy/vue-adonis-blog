import Router from 'vue-router'
// Routes
import siteRoutes from '@/modules/site/router'
import cmsRoutes from '@/modules/cms/router'
// Components
import Index from '@/components'
import About from '@/components/About'

const baseRoutes = [
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

const routes = baseRoutes.concat(siteRoutes, cmsRoutes)

export default new Router({
  routes
})
