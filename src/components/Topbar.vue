<template lang="pug">
<header class="mdc-top-app-bar mdc-elevation--z8" ref="barref">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      IconButton.mdc-top-app-bar__navigation-icon--unbounded menu
      <span class="mdc-top-app-bar__title">AjiVoca</span>
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      RouterLink(to="/")
        IconButton.mdc-top-app-bar__action-item--unbounded(aria-label="Login") login
    </section>
  </div>
</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MDCTopAppBar } from "@material/top-app-bar";
import IconButton from "@/components/IconButton.vue";

export default defineComponent({
  name: "Topbar",
  components: { IconButton },
  mounted() {
    MDCTopAppBar.attachTo(this.$refs.barref as Element);
  },
});
</script>
