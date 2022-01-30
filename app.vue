<template lang="pug">
Body.mdc-theme--surface.mdc-theme--on-surface
SideBar(:open="isSideBarOpen")
Topbar(@toggleSidebar="isSideBarOpen = !isSideBarOpen")
.container
  Content
</template>

<script lang="ts">
export default defineComponent({
  name: "app",
  data() {
    return {
      isSideBarOpen: false,
    };
  },
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
