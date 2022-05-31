<template>
  <div class="nav">
    <div class="content">
      <img src="../assets/icons/notifications.svg" alt="" />
      <img src="../assets/icons/Rectangle.svg" alt="" />
      <img src="../assets/icons/account.svg" alt="" />
      <span>John Doe</span>
      <img src="../assets/icons/options.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav {
  padding: 20px;
  border-bottom: 2px solid rgba(229, 229, 229, 0.3);
}

.content {
  display: flex;
  position: relative;
  width: 250px;
  justify-content: space-between;
  left: 1400px;
}

span {
  position: relative;
  top: 3px;
}

img:last-of-type{
    position: relative;
    left: 50px;
}
</style>