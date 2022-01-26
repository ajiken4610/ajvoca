<template lang="pug">
.full
  Topbar
  Content.full.mdc-theme--surface.mdc-theme--on-surface
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "@/components/Topbar.vue";
import Content from "@/components/Content.vue";
export default defineComponent({
  name: "App",
  components: { Topbar, Content },
});
</script>

<style lang="scss">
@use "material-components-web";
:root {
  --mdc-theme-primary: #373f66;
  --mdc-theme-on-primary: white;
  --mdc-theme-surface: #242943;
  --mdc-theme-on-surface: white;
}
html {
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: var(--mdc-theme-surface) var(--mdc-theme-primary);
}
::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}
::-webkit-scrollbar-track {
  background: var(--mdc-theme-surface);
}
::-webkit-scrollbar-thumb {
  background: #575174;
  border-radius: 10px;
}
body {
  margin: 0;
  min-height: 100%;
}
#app {
  height: 100vh;
}

.full {
  width: 100%;
  height: 100%;
}
.divider-8 {
  width: 80%;
  height: 1px;
  margin: 2em;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--mdc-theme-on-surface);
}
.text-center {
  text-align: center;
}
</style>
