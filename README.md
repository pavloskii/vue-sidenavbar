## Vue Sidenavbar [![npm version](https://badge.fury.io/js/vue-sidenavbar.svg)](https://badge.fury.io/js/vue-sidenavbar)

[![GitHub license](https://img.shields.io/npm/l/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/LICENSE) [![NPM bundle size](https://img.shields.io/bundlephobia/minzip/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/README.md)

Really simple animated navigation sidebar with only icons or with icons and text, done with Vuejs.

## Demo

Codesandbox demo - https://codesandbox.io/s/vue-sidenavbar-demo-3pjye

To run demo locally, run:

```
npm i
npm run serve
```

Then open [`localhost:8080`](http://localhost:8080) in a browser

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
    <VueSidenavbarItem label="HOME" icon="fas fa-home" />
    <VueSidenavbarItem label="PROFILE" icon="fas fa-address-card" />
    <VueSidenavbarItem label="LOGOUT" icon="fas fa-sign-out-alt" tag="a" />
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
    <VueSidenavbarItem label="HOME" icon="fas fa-home" />
    <VueSidenavbarItem>
      <a href="/home" class="sidenav__link"><i class="fas fa-home"></i><span>Home</span></a>
    </VueSidenavbarItem>
</VueSidenavbar>
```

## Author

&#169; [Igor Pavloski](https://github.com/pavloskii)

## Design

&#169; [Stacked Template](https://templatemo.com/tm-505-stacked)

# License

[![GitHub license](https://img.shields.io/npm/l/vue-sidenavbar)](https://github.com/pavloskii/vue-sidenav/blob/master/LICENSE)
