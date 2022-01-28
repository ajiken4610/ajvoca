<template lang="pug">
h2.mdc-typography--headline2.text-center
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleText",
});
</script>
