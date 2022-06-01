<template>
  <SideBar />
  <NavBar />
  <div class="body">
    <h1>{{ starship.name }}</h1>
    <div>
      <span>Models: {{ starship.model }}</span>
    </div>
    <div>
      <span>Passenger: {{starship.passengers}}</span>
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
  name: "Starship",
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
    await this.fetchStarship(this.$route.query.id);
    this.show = false
    
  },

  methods: {
    ...mapActions({
      fetchStarship: "fetchStarship",
    }),
  },

  computed: {
    starship() {
      return this.$store.state.starship;
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