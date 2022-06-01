import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
  state: {
    films: [],
    film: "",
    starships: [],
    starship: "",
    species: [],
    specie: "",
    people: [],
    person: ""
  },

  mutations: {
    SET_FILMS(state, payload) {
      state.films = payload
    },

    SET_FILM(state, payload) {
      state.film = payload
    },

    SET_STARSHIPS(state, payload) {
      state.starships = payload
    },

    SET_STARSHIP(state, payload) {
      state.starship = payload
    },

    SET_SPECIES(state, payload) {
      state.species = payload
    },

    SET_SPECIE(state, payload) {
      state.specie = payload
    },

    SET_PEOPLE(state, payload) {
      state.people = payload
    },

    SET_PERSON(state, payload) {
      state.person = payload
    },

  },

  actions: {
    async fetchFilms({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/films/")

      commit("SET_FILMS", data.results)
    },

    async fetchFilm({ commit }, payload) {
      const { data } = await axios.get(`https://swapi.dev/api/films/${payload}`)

      commit("SET_FILM", data)
    },

    async fetchStarships({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/starships")
      commit("SET_STARSHIPS", data.results)

    },

    async fetchStarship({ commit }, payload) {
      const { data } = await axios.get(`https://swapi.dev/api/starships/${payload}`)

      commit("SET_STARSHIP", data)
    },

    async fetchSpecies({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/species")
      commit("SET_SPECIES", data.results)

    },

    async fetchSpecie({ commit }, payload) {
      const { data } = await axios.get(`https://swapi.dev/api/species/${payload}`)

      commit("SET_SPECIE", data)
    },

    async fetchPeople({ commit }) {
      const { data } = await axios.get("https://swapi.dev/api/people")
      commit("SET_PEOPLE", data.results)

    },

    async fetchPerson({ commit }, payload) {
      const { data } = await axios.get(`https://swapi.dev/api/people/${payload}`)

      commit("SET_PERSON", data)
    },
  },
  modules: {
  },
  getters: {
  }
})
