<template lang="pug">
Body.mdc-theme--surface.mdc-theme--on-surface
.container
  Topbar(@toggleSidebar="log($event)")
  Content
</template>

<script lang="ts">
export default defineComponent({
  name: "app",
  methods: {
    log(mes: string) {
      console.log(mes);
    },
  },
  provide: {
    isLogined: false,
  },
});
</script>
