<template>
  <SideBar />
  <NavBar />

  <div class="body">
    <div class="stats">
      <div class="box">
        <div class="top">
          <span>Film</span>
          <img class="idn" src="../assets/icons/films.svg" alt="" srcset="" />
        </div>
        <div class="number">{{ films.length }}</div>
        <p>20 more than yesterday</p>
      </div>

      <div class="box">
      <div class="top">
        <span>Starships</span>
        <img class="idn" src="../assets/icons/starships.svg" alt="" srcset="" />
      </div>
      <div class="number">{{ $store.state.starships.length }}</div>
      <p>20 more than yesterday</p>
    </div>

    <div class="box">
      <div class="top">
        <span>People</span>
        <img class="idn" src="../assets/icons/people.svg" alt="" srcset="" />
      </div>
      <div class="number">{{ $store.state.people.length }}</div>
      <p>20 more than yesterday</p>
    </div>
    <div class="box">
      <div class="top">
        <span>Species</span>
        <img class="idn" src="../assets/icons/species.svg" alt="" srcset="" />
      </div>
      <div class="number">{{ $store.state.species.length }}</div>
      <p>20 more than yesterday</p>
    </div>
    </div>

    <div class="title">Film</div>
    <div class="table">
      <div class="table-head">
        <div><input type="checkbox" name="" id="" /></div>
        <div>Film Tile</div>
        <div>Release Date</div>
        <div>Director</div>
        <div>Producer</div>
        <div>Episode ID</div>
        <div>Character</div>
      </div>
      <div v-for="(film, index) in films" :key="index" class="table-head data">
        <div><input type="checkbox" name="" id="" /></div>
        <div>{{ film.title }}</div>
        <div>{{ moment(film.created).format("d/M/YY") }}</div>
        <div>{{ film.director }}</div>
        <div>{{ film.producer }}</div>
        <div>{{ film.episode_id }}</div>
        <div>{{ film.url }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Overview",
  components: {
    SideBar,
    NavBar,
  },

  async created() {
    this.fetchFilms();
  },

  methods: {
    ...mapActions({
      fetchFilms: "fetchFilms",
    }),
  },

  computed: {
    films() {
      return this.$store.state.films;
    },
  },
};
</script>

<style scoped>
.table-head div:nth-of-type(6) {
  text-align: center;
}

.stats {
  display: flex;
  margin-top: 30px;
  margin-bottom: 70px;
  justify-content: space-between;
}
.box {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 230px;
  padding: 20px 30px;
  height: 120px;
}

.top {
  display: flex;
  font-size: 17px;
  justify-content: space-between;
  margin-bottom: 40px;
}

img {
  left: 0;
}

.number {
  font-size: 18px;
}

.box p {
  color: #00992b;
}
</style>