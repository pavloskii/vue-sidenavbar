<template>
  <div id="app">
    <VueSidenav>
      <VueSidenavItem label="HOME" icon="fas fa-home" to="/" />
      <VueSidenavItem
        label="PROFILE"
        icon="fas fa-address-card"
        to="/profile"
      />
      <VueSidenavItem
        label="CONTACTS"
        icon="far fa-address-book"
        to="/contacts"
      />
      <VueSidenavItem label="PHOTOS" icon="fas fa-image" to="/photos" />
      <VueSidenavItem label="CALL" icon="fas fa-phone" to="/call" />
    </VueSidenav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import VueSidenav from "./components/VueSidenav.vue";
import VueSidenavItem from "./components/VueSidenavItem.vue";

export default {
  name: "app",
  components: {
    VueSidenav,
    VueSidenavItem
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
.active {
  background-color: #b23a48;
}
.page {
  float: right;
  margin-right: 5px;
}
:root {
  /* --sidebaritem-bgcolor: #461220; */
  /* --sidebaritem-hover-bgcolor: #8c2f39; */
  /* --burger-color: gray;
  --burger-bgcolor: red;
  --burger-hover-bgcolor: pink; */
}
</style>
