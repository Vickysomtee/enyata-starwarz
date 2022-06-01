import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue"
import Overview from "../views/Overview.vue"
import Species from "../views/Species.vue"
import People from "../views/People.vue"
import StarShips from "../views/Starships.vue"
import Film from "../views/Film.vue"
import Person from "../views/Person.vue"
import Specie from "../views/Specie.vue"
import Starship from "../views/Starship.vue"

const routes = [
  {
    path: '/',
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
  {
    path: '/film',
    name: 'Film',
    component: Film
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/starship',
    name: 'Starship',
    component: Starship
  },

  {
    path: '/specie',
    name: 'Specie',
    component: Specie,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
