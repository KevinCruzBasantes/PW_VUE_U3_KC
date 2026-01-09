import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {//carga bajo demanda cuando la aplicaion use la pagina
    path: '/', //aquiva la url que decido para esta pagina 
    name: 'home',
    component: HomeView
  },
  {//carga perezosa
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')//se carga solo cuando se necesita lazy load
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
