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
      <div v-for="(specie, index) in species" :key="index" class="table-head data">
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

  async created() {
    this.fetchSpecies();
  },

  methods: {
    ...mapActions({
      fetchSpecies: "fetchSpecies",
    }),
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