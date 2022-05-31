import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue"
import Overview from "../views/Overview.vue"
import Species from "../views/Species.vue"
import People from "../views/People.vue"
import StarShips from "../views/Starships.vue"

const routes = [
  {
    path: '/login',
    name: 'home',
    component: Login
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/species',
    name: 'Species',
    component: Species
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/starships',
    name: 'StarShips',
    component: StarShips
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
