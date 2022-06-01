<template>
  <SideBar />
  <NavBar />

  <div class="body">
    <div class="title">Species</div>
    <div class="table">
      <div class="table-head">
        <div><input type="checkbox" name="" id="" /></div>
        <div>Name</div>
        <div>Classification</div>
        <div>Eye Color</div>
        <div>Hair Color</div>
        <div>Height</div>
        <div>Created</div>
      </div>
      <div @click="sendDetails(specie.url)" v-for="(specie, index) in species" :key="index" class="table-head data">
        <div><input type="checkbox" name="" id="" /></div>
        <div>{{specie.name}}</div>
        <div>{{specie.classification}}</div>
        <div>{{specie.eye_colors}}</div>
        <div>{{specie.hair_colors}}</div>
        <div>{{specie.average_height}}</div>
        <div>{{ moment(specie.created).format("d/M/YY") }}</div>
      </div>
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
  name: "Species",
  components: {
    SideBar,
    NavBar,
  },

  data() {
    return {
      show: true
    }
  },

  async created() {
   await this.fetchSpecies();
   this.show = false;
  },

  methods: {
    ...mapActions({
      fetchSpecies: "fetchSpecies",
    }),

      sendDetails(data) {
      const id = data.split("/");
      this.$router.push({
        name: "Specie",
        query: {
          id: id[id.length - 2],
        },
      });
    },
  },

  computed: {
    species() {
      return this.$store.state.species;
    },
  },
};
</script>

<style scoped>

</style>