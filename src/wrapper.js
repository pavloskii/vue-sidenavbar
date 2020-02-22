import VueSidenavbar from "./VueSidenavbar.vue";
import VueSidenavbarItem from "./VueSidenavbarItem.vue";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueSidenavbar", VueSidenavbar);
  Vue.component("VueSidenavbarItem", VueSidenavbarItem);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { VueSidenavbar, VueSidenavbarItem };
export default plugin;
