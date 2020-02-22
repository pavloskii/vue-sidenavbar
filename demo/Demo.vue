<template>
  <div id="app">
    <VueSidenavbar>
      <VueSidenavbarItem label="HOME" icon="fas fa-home" to="/" />
      <VueSidenavbarItem
        label="PROFILE"
        icon="fas fa-address-card"
        to="/profile"
      />
      <VueSidenavbarItem
        label="CONTACTS"
        icon="far fa-address-book"
        to="/contacts"
      />
      <VueSidenavbarItem label="PHOTOS" icon="fas fa-image" to="/photos" />
      <VueSidenavbarItem label="CALL" icon="fas fa-phone" to="/call" />
    </VueSidenavbar>

    <main>
      <h1>Main page</h1>
    </main>
  </div>
</template>

<script>
import VueSidenavbar from "../src/VueSidenavbar.vue";
import VueSidenavbarItem from "../src/VueSidenavbarItem.vue";

export default {
  name: "app",
  components: {
    VueSidenavbar,
    VueSidenavbarItem
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
main {
  float: right;
  padding: 20px;
}
/* Set vue-router's exactAvtiveClass to active: */
.active {
  background-color: #b23a48;
}
/* Configure colors with css: */
/* :root {
  --sidebaritem-bgcolor: #461220;
  --sidebaritem-hover-bgcolor: #8c2f39;
  --burger-color: gray;
  --burger-bgcolor: red;
  --burger-hover-bgcolor: pink;
} */
</style>
