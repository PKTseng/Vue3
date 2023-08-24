import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Starup from '../pages/starup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/starup',
    name: 'Starup',
    component: Starup,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
