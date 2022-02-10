<template lang="pug">
Body.mdc-theme--surface.mdc-theme--on-surface
Head
  //<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
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
});
</script>
