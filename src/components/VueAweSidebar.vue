<template>
  <aside class="sidenav">
    <div
      :class="['burger', { 'burger--active': isOpen }]"
      @click="isOpen = !isOpen"
    >
      <div class="burger__patty"></div>
    </div>

    <ul :class="['sidenav__list', { 'sidenav__list--active': isOpen }]">
      <slot></slot>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "VueAweSidebar",
  data: () => ({ isOpen: false })
};
</script>

<style>
.sidenav {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100px;
  backface-visibility: hidden;
}
.sidenav__list {
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  height: 85vh;
  transform: translate(0, -100%);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.sidenav__list--active {
  transform: translate(0, 0);
}
@media (max-width: 640px) {
  .sidenav {
    width: 75px;
  }
  .sidenav__list {
    height: 90vh;
  }
}
.burger {
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: var(--burger-bgcolor, #455871);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.burger:hover {
  background: var(--burger-hover-bgcolor, #3e4e62);
}
.burger__patty {
  position: relative;
  height: 2px;
  width: 40px;
  background: var(--burger-color, white);
}
.burger__patty:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  height: 2px;
  width: 100%;
  background: var(--burger-color, white);
}
.burger__patty:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  height: 2px;
  width: 100%;
  background: var(--burger-color, white);
}
.burger__patty,
.burger__patty:before,
.burger__patty:after {
  will-change: transform;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.burger--active .burger__patty {
  transform: rotate(90deg);
}
.burger--active .burger__patty:before {
  transform: rotate(-45deg) translate(-7px, -7px) scaleX(0.7);
}
.burger--active .burger__patty:after {
  transform: rotate(45deg) translate(-7px, 7px) scaleX(0.7);
}
@media (max-width: 640px) {
  .burger {
    height: 10vh;
  }
  .burger__patty {
    transform: scale(0.8);
  }
  .burger--active .burger__patty {
    transform: scale(0.8) rotate(90deg);
  }
}
</style>
