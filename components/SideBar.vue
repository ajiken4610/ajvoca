<template lang="pug">
<aside class="mdc-drawer mdc-drawer--modal" ref="drawerRef">
  .mdc-drawer__header
    HeaderTitle AjVoca
  <div class="mdc-drawer__content">
    <nav class="mdc-list" ref="listRef">
      NuxtLink.mdc-list-item.mdc-list-item--activated(to="/login" tabindex="0" aria-selected="true")
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">login</i>
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Login</span>
    </nav>
  </div>
</aside>
<div class="mdc-drawer-scrim"></div>
</template>

<script lang="ts">
export default defineComponent({
  props: ["open"],
  watch: {
    open() {
      this.drawer.open = !this.drawer.open;
    },
  },
  mounted() {
    this.drawer = new MDCDrawer(this.$refs.drawerRef);
    this.list = new MDCList(this.$refs.listRef);
    this.list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  },
});
</script>

<script setup lang="ts">
import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";
</script>
