## Vue Sidenavbar [![npm version](https://badge.fury.io/js/vue-sidenavbar.svg)](https://badge.fury.io/js/vue-sidenavbar)

[![GitHub license](https://img.shields.io/npm/l/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/LICENSE) [![NPM bundle size](https://img.shields.io/bundlephobia/minzip/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/README.md) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Really simple animated navigation sidebar with only icons or with icons and text, done with Vuejs.

## Demo

Codesandbox demo - https://codesandbox.io/embed/vue-sidenavbar-demo-3pjye?hidenavigation=1&theme=dark
Live demo - https://vue-sidenavbar-demo.netlify.com/ [![Netlify Status](https://api.netlify.com/api/v1/badges/65cacb6d-5ea3-4e3f-9b87-e7031c01a95a/deploy-status)](https://app.netlify.com/sites/vue-sidenavbar-demo/deploys)

To run demo locally, run:

```
git clone https://github.com/pavloskii/vue-sidenavbar.git
cd vue-sidenavbar
npm i
npm run demo
```

Then open [`localhost:8080`](http://localhost:8080)

## Installation

```
npm install vue-sidenavbar --save
```

## Usage

Plugin install:

```js
import Vue from "vue";
import VueSidenavbar from "vue-sidenavbar";

Vue.use(VueSidenavbar);
```

OR just import the components where you want to use them:

```js
import { VueSidenavbar, VueSidenavbarItem } from "vue-sidenavbar";

export default {
  components: {
    VueSidenavbar,
    VueSidenavbarItem
  }
};
```

In your template:

```html
<template>
  <VueSidenavbar>
    <VueSidenavbarItem label="HOME" icon="fas fa-home" to="/home" />
    <VueSidenavbarItem
      label="PROFILE"
      icon="fas fa-address-card"
      to="/profile"
    />
    <VueSidenavbarItem
      label="LOGOUT"
      icon="fas fa-sign-out-alt"
      tag="a"
      @click="someFunction"
    />
  </VueSidenavbar>
</template>
```

## Props

VueSidenavbar: no props.

VueSidenavbarItem:

| name  | type   | default     | description                                                         |
| ----- | ------ | ----------- | ------------------------------------------------------------------- |
| tag   | String | router-link | The template tag of the nav item (inherits all other attributes)    |
| label | String |             | The text under the icon (not required)                              |
| icon  | String |             | The name of the icon (goes into class attribute of i)(not required) |

## Slots

VueSidenavbar:

| name    | description      |
| ------- | ---------------- |
| default | Componet content |

usage:

```HTML
<VueSidenavbar>
    <VueSidenavbarItem label="HOME" icon="fas fa-home" tag="a" />
</VueSidenavbar>
```

VueSidenavbar:

| name    | description                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------- |
| default | Use only if you want to create custom nav item, else it has default content, that work with the props |

usage:

```HTML
<VueSidenavbar>
    <VueSidenavbarItem label="HOME" icon="fas fa-home" to="/home"/>
    <VueSidenavbarItem>
      <a href="/home" class="sidenav__link"><i class="fas fa-home"></i><span>Home</span></a>
    </VueSidenavbarItem>
</VueSidenavbar>
```

## Colour variables

You can easily configure the sidenav's colours by using the css variables below:

```css
:root {
  --sidebaritem-bgcolor: #461220;
  --sidebaritem-hover-bgcolor: #8c2f39;
  --burger-color: gray;
  --burger-bgcolor: red;
  --burger-hover-bgcolor: pink;
}
```

## Author

&#169; [Igor Pavloski](https://github.com/pavloskii)

## Design

&#169; [Stacked Template](https://templatemo.com/tm-505-stacked)

# License

[![GitHub license](https://img.shields.io/npm/l/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/LICENSE)
