import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Contacts from "../views/Contacts.vue";
import Photos from "../views/Photos.vue";
import Call from "../views/Call.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/contacts",
    component: Contacts
  },
  {
    path: "/photos",
    component: Photos
  },
  {
    path: "/call",
    component: Call
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes
});

export default router;
