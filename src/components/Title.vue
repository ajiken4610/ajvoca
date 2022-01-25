<template lang="pug">
h1.mdc-typography--headline1.char
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
});
</script>

<style scoped lang="scss">
.char {
  text-align: center;
}
</style>
