<template>
  <SideBar />
  <NavBar />

  <div class="body">
    <div class="title">People</div>
    <div class="table">
      <div class="table-head">
        <div><input type="checkbox" name="" id="" /></div>
        <div>Name</div>
        <div>Birth Year</div>
        <div>Gender</div>
        <div>Hair Color</div>
        <div>Height</div>
        <div>Created</div>
      </div>
      <div v-for="(person, index) in people" :key="index" class="table-head data">
        <div><input type="checkbox" name="" id="" /></div>
        <div>{{person.name}}</div>
        <div>{{person.birth_year}}</div>
        <div>{{person.gender}}</div>
        <div>{{person.hair_color}}</div>
        <div>{{person.height}}</div>
        <div>{{ moment(person.created).format("d/M/YY") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "People",
  components: {
    SideBar,
    NavBar,
  },

   async created() {
    this.fetchPeople();
  },

  methods: {
    ...mapActions({
      fetchPeople: "fetchPeople",
    }),
  },

  computed: {
    people() {
      return this.$store.state.people;
    },
  },
};
</script>

<style scoped>

</style>