<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/icons/starwarz2.svg" alt="logo" />
    </div>
    <router-link
      :to="{ name: 'Overview' }"
      class="menu-item"
      active-class="active"
    >
      <img class="over" src="../assets/icons/overview.svg" alt="overview" />
      <span>Overview</span>
    </router-link>
    <div class="menu">
      <router-link
        :to="{ name: 'StarShips' }"
        class="menu-item"
        active-class="active"
      >
        <img src="../assets/icons/starships.svg" alt="overview" />
        <span>Starships</span>
      </router-link>
      <router-link
        :to="{ name: 'People' }"
        class="menu-item"
        active-class="active"
      >
        <img src="../assets/icons/people.svg" alt="overview" />
        <span>People</span>
      </router-link>
      <router-link
        :to="{ name: 'Species' }"
        class="menu-item"
        active-class="active"
      >
        <img src="../assets/icons/species.svg" alt="overview" />
        <span>Species</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #031434;
  z-index: 1;
  padding: 20px;
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

.logo {
  margin-top: 20px;
  margin-bottom: 50px;
}

.menu {
  margin-top: 70px;
  display: grid;
}

.active {
  background: #0a74dc;
}

.menu-item {
  padding: 20px 125px 20px 20px;
  border-radius: 5px;
}

.over {
  position: relative;
  top: 7px;
}

.menu-item img {
  position: relative;
  left: 3px;
  top: 4px;
}

.menu-item span {
  position: relative;
  left: 20px;
  bottom: 2px;
}

span {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  bottom: 5px;
  left: 15px;
}
</style>