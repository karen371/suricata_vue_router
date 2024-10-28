import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'products',
    component: () => import('../views/ProductsView.vue'), // Carga diferida
    props: (router) => ({
      name: "Desayuno",
      descripcion: "contamos con desayunos nutritivos y deliciosos",
      precio: "$2000",
      cantidad: "Para dos peronas",
      imagen: "../assets/img/desayunos.jpg"
    })
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('../views/ContactView.vue') // Carga diferida
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
