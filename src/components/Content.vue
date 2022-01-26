<template lang="pug">
<main class="mdc-top-app-bar--fixed-adjust">
  router-view
</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Content",
});
</script>
