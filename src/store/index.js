import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    films: [],
    starships: [],
    species: [],
    people: [],
  },
  mutations: {
    SET_FILMS(state, payload) {
      state.films = payload
    },

    SET_STARSHIPS(state, payload) {
      state.starships = payload
    },

    SET_SPECIES(state, payload) {
      state.species = payload
    },

    SET_PEOPLE(state, payload) {
      state.people = payload
    },

  },

  actions: {
    async fetchFilms({ commit }) {
      const {data} = await axios.get("https://swapi.dev/api/films/")

      commit("SET_FILMS", data.results)
    },

    async fetchStarships({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/starships")
      commit("SET_STARSHIPS", data.results)

    },

    async fetchSpecies({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/species")
      commit("SET_SPECIES", data.results)

    },

    async fetchPeople({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/people")
      commit("SET_PEOPLE", data.results)

    }
  },
  modules: {
  },
  getters: {
  }
})
