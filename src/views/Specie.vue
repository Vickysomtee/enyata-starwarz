<template>
  <SideBar />
  <NavBar />
  <div class="body">
    <h1>{{ specie.name }}</h1>
    <div>
      <span>Designation: {{ specie.designation }}</span>
    </div>
    <div>
      <span>Language: {{ specie.designation }}</span>
    </div>
    <div>
      <span>Eye Color: {{ specie.eye_colors }}</span>
    </div>
    <div>
      <span>Average Life span: {{ specie.average_lifespan }}</span>
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
  name: "Specie",
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
    await this.fetchSpecie(this.$route.query.id);
    this.show = false
  },

  methods: {
    ...mapActions({
      fetchSpecie: "fetchSpecie",
    }),
  },

  computed: {
    specie() {
      return this.$store.state.specie;
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