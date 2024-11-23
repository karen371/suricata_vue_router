import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import imagenProducto1 from '@/assets/img/desayunos.jpg';
import imagenProducto2 from '@/assets/img/empanadas.jpg';
import imagenProducto3 from '@/assets/img/verduras.jpg';
import imagenProducto4 from '@/assets/img/colaciones.jpg';
import imagenProducto5 from '@/assets/img/bebidas.jpg';

const router = createRouter({
  history: createWebHistory('#'),
  routes : [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (router) => ({
        productos: [
          {
            name: "Colaciones",
            descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            precio: "$7000",
            cantidad: "Para uno personas",
            imagen: imagenProducto4
          },
          {
            name: "Bebidas",
            descripcion: "varidad de bebibas",
            precio: "Desde $2000",
            cantidad: "Para una persona",
            imagen: imagenProducto5
          }
        ]
      })
    },
    {
      path: '/productos',
      name: 'products',
      component: () => import('../views/ProductsView.vue'), // Carga diferida
      props: (router) => ({
        productos: [
          {
            name: "Desayuno",
            descripcion: "Contamos con desayunos nutritivos y deliciosos",
            precio: "$2000",
            cantidad: "Para dos personas",
            imagen: imagenProducto1
          },
          {
            name: "Empanadas",
            descripcion: "Empanadas varidas",
            precio: "$2000",
            cantidad: "Para una persona",
            imagen: imagenProducto2
          },
          {
            name: "Verduras",
            descripcion: "Verduras salteadas en mantequilla",
            precio: "$5000",
            cantidad: "Para una persona",
            imagen: imagenProducto3
          }
        ]
      })
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue') // Carga diferida
    }
  ]
});

// const 
// //
// const router = createRouter({
//   history: createWebHistory(import.meta.env.VITE_BASE_URL),
//   routes
// })

export default router
