<template>
  <div id="app">
    <VueAweSidebar>
      <VueAweSidebarItem label="HOME" icon="fas fa-home" route="/" />
      <VueAweSidebarItem
        label="PROFILE"
        icon="fas fa-address-card"
        route="/profile"
      />
      <VueAweSidebarItem
        label="CONTACTS"
        icon="far fa-address-book"
        route="/contacts"
      />
      <VueAweSidebarItem label="PHOTOS" icon="fas fa-image" route="/photos" />
      <VueAweSidebarItem label="CALL" icon="fas fa-phone" route="/call" />
    </VueAweSidebar>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import VueAweSidebar from "./components/VueAweSidebar.vue";
import VueAweSidebarItem from "./components/VueAweSidebarItem.vue";

export default {
  name: "app",
  components: {
    VueAweSidebar,
    VueAweSidebarItem
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
