import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment";
import VueElementLoading from 'vue-element-loading'

const app = createApp({
    render: ()=>h(App)
});

store.dispatch('fetchStarships')
store.dispatch('fetchFilms')
store.dispatch('fetchSpecies')
store.dispatch('fetchPeople')

app.config.globalProperties.moment = moment;

app.use(store).use(router).mount('#app')
app.component('VueElementLoading', VueElementLoading)
