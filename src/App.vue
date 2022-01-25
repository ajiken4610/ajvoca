<style lang="scss" scoped></style>

<template lang="pug">
input(v-model.number="size" type="number")
Kuku(:size="size")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Kuku from "./vue-components/kuku.vue";
export default defineComponent({
    components: { Kuku },
    name: "App",
    setup() {
        return { size: 9 };
    },
});
</script>
