<template>
  <SideBar />
  <NavBar />

  <div class="body">
    <div class="title">Star Ships</div>
    <div class="table">
      <div class="table-head">
        <div><input type="checkbox" name="" id="" /></div>
        <div>Name</div>
        <div>Model</div>
        <div>Class</div>
        <div>Passenger</div>
        <div>length</div>
        <div>Character</div>
      </div>
      <div v-for="(ship, index) in starships" :key="index" class="table-head data">
        <div><input type="checkbox" name="" id="" /></div>
        <div>{{ship.name}}</div>
        <div>{{ship.model}}</div>
        <div>{{ship.starship_class}}</div>
        <div>{{ship.passengers}}</div>
        <div>{{ship.length}}</div>
        <div>{{ship.url}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "StarShip",
  components: {
    SideBar,
    NavBar,
  },

  async created() {
    this.fetchStarships();
  },

  methods: {
    ...mapActions({
      fetchStarships: "fetchStarships",
    }),
  },

  computed: {
    starships() {
      return this.$store.state.starships;
    },
  },
};
</script>

<style scoped>

</style>