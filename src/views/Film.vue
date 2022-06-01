<template>
  <SideBar />
  <NavBar />
  <div class="body">
    <h1>{{ film.name }}</h1>
    <div>
      <span>Director: </span><span>{{ film.director }}</span>
    </div>
    <div>
      <span>Producer: </span><span>{{ film.producer }}</span>
    </div>
    <div>
      <span>Release Date: </span
      ><span>
        {{ moment(film.released_date).format("MMMM Do YYYY, h:mm:ss a") }}</span
      >
    </div>
  </div>
  <vue-element-loading
    :active="show"
    :is-full-screen="true"
    background-color="rgba(255, 255, 255, .8)"
    spinner="bar-fade-scale"
  />
</template>

<script>
import { mapActions } from "vuex";

import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Film",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      show: true
    }
  },

  async mounted() {
    await this.fetchFilm(this.$route.query.id);
    this.show = false;
  },

  methods: {
    ...mapActions({
      fetchFilm: "fetchFilm",
    }),
  },

  computed: {
    film() {
      return this.$store.state.film;
    },
  },
};
</script>

<style scoped>
div {
  color: #434854;
  font-size: 15px;
  padding: 20px;
}
</style>