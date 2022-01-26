<template lang="pug">
.full
  .mdc-layout-grid.outer.full
    .mdc-layout-grid__inner.full
      .mdc-layout-grid__cell--align-middle.mdc-layout-grid__cell--span-12-desktop.mdc-layout-grid__cell--span-8-tablet.mdc-layout-grid__cell--span-4-phone
        .mt-4
          Title Welcome to Ajivoca
          .divider-8
          OverlinedText.text-center this is a application made by Aji in order to learn vocabulary.
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/Title.vue";
import OverlinedText from "@/components/OverlinedText.vue";
export default defineComponent({
  name: "HomeP1",
  components: { Title, OverlinedText },
});
</script>

<style lang="scss" scoped>
.outer {
  height: 100%;
}
</style>
