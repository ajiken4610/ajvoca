<template lang="pug">
<header class="mdc-top-app-bar mdc-elevation--z8" ref="barref">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      IconButton.mdc-top-app-bar__navigation-icon--unbounded(@click="$emit('toggleSidebar',$event)") menu
      NuxtLink(to="/")
        span.mdc-top-app-bar__title.mdc-theme--on-primary AjiVoca
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      NuxtLink(to="/login")
        IconButton.mdc-top-app-bar__action-item--unbounded(aria-label="Login") login
    </section>
  </div>
</header>
</template>

<script lang="ts">
import { MDCTopAppBar } from "@material/top-app-bar";

export default defineComponent({
  name: "Topbar",
  emits: ["toggleSidebar"],
  mounted(): void {
    MDCTopAppBar.attachTo(this.$refs.barref as Element);
  },
});
</script>
