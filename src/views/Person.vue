<template>
  <SideBar />
  <NavBar />
  <div class="body">
    <h1>{{ person.name }}</h1>
    <div>
      <span>Gender: {{ person.gender }}</span>
    </div>
    <div>
      <span>Year Of Birth: {{person.birth_year}}</span>
    </div>
    <div>
      <span>Skin Color: {{person.skin_color}}</span>
    </div>
    <div>
      <span>Height: {{ person.height }}</span>
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
    await this.fetchPerson(this.$route.query.id);
    this.show = false
  },

  methods: {
    ...mapActions({
      fetchPerson: "fetchPerson",
    }),
  },

  computed: {
    person() {
      return this.$store.state.person;
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