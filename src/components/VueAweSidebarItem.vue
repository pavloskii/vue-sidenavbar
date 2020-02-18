<template functional>
  <li class="sidenav__item">
    <router-link :to="props.route" class="sidenav__link">
      <i :class="props.icon"></i>
      <span>{{ props.label }}</span>
    </router-link>
  </li>
</template>

<style>
.sidenav__item {
  flex: 1;
  position: relative;
}
.sidenav__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  text-decoration: none;
  font-size: 15px;
  background: var(--sidebaritem-bgcolor, #3e4e62);
  color: white;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.sidenav__link:hover {
  background: var(--sidebaritem-hover-bgcolor, #8c2f39);
}
.sidenav__link i {
  font-size: 44px;
}
.sidenav__link span {
  margin-top: 3px;
}
@media (max-width: 640px) {
  .sidenav__link i {
    font-size: 40px;
  }
  .sidenav__link span {
    font-size: 12px;
  }
}
</style>
