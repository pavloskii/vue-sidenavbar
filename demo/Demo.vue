<template>
  <div id="app">
    <VueSidenavbar>
      <VueSidenavbarItem
        v-for="route in routes"
        :key="route.label"
        :label="route.label"
        :icon="route.icon"
        tag="a"
        @click="consoleLog(`Clicked on ${route.label}`)"
      />
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
  data: () => ({
    routes: [
      { label: "HOME", icon: "fas fa-home" },
      { label: "PROFILE", icon: "fas fa-address-card" },
      { label: "CONTACTS", icon: "far fa-address-book" },
      { label: "PHOTOS", icon: "fas fa-image" },
      { label: "CALL", icon: "fas fa-phone" }
    ]
  }),
  methods: {
    consoleLog(text) {
      console.log(text);
    }
  },
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
  background-color: #b23a48 !important;
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
