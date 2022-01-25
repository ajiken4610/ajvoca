<template lang="pug">
.test {{size}}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: { size: Number },
    name: "Kuku",
});
</script>

<style scoped lang="scss"></style>
