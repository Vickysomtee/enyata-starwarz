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
      <div
        @click="sendDetails(person.url)"
        v-for="(person, index) in people"
        :key="index"
        class="table-head data"
      >
        <div><input type="checkbox" name="" id="" /></div>
        <div>{{ person.name }}</div>
        <div>{{ person.birth_year }}</div>
        <div>{{ person.gender }}</div>
        <div>{{ person.hair_color }}</div>
        <div>{{ person.height }}</div>
        <div>{{ moment(person.created).format("d/M/YY") }}</div>
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
  name: "People",
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
   await this.fetchPeople();
   this.show = false
  },

  methods: {
    ...mapActions({
      fetchPeople: "fetchPeople",
    }),

    sendDetails(data) {
        console.log(data)
      const id = data.split("/");
      console.log(id[id.length - 2])
      this.$router.push({
        name: "Person",
        query: {
          id: id[id.length - 2],
        },
      });
    },
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