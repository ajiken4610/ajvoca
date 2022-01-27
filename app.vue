<template lang="pug">
.full
  Topbar(@toggleSidebar="log($event)")
  Content.full.mdc-theme--surface.mdc-theme--on-surface
</template>

<script lang="ts">
export default defineComponent({
  name: "app",
  methods: {
    log(mes: string) {
      console.log(mes);
    },
  },
});
</script>
