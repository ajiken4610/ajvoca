<template lang="pug">
button.material-icons.mdc-icon-button.mdc-theme--on-primary.button-surface(:aria-label="areaLabel" ref="button")
  slot
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MDCRipple } from "@material/ripple";

export default defineComponent({
  props: {
    id: String,
    areaLabel: String,
  },
  mounted() {
    MDCRipple.attachTo(this.$refs.button as Element);
  },
});
</script>
<style lang="scss" scoped>
@use "@material/ripple";
.button-surface {
  @include ripple.surface;
  @include ripple.radius-bounded(0.5em);
  @include ripple.states;
}
</style>
