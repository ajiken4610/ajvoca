<template lang="pug">
#authui
</template>
<script lang="ts">
export default defineComponent({
  mounted() {
    let observer = new MutationObserver(() => {
      if (document.querySelector("#authui")) {
        observer.disconnect();
        useNuxtApp().$authui.start("#authui", {
          signInOptions: [
            // List of OAuth providers supported.
            GoogleAuthProvider.PROVIDER_ID,
            EmailAuthProvider.PROVIDER_ID,
          ],
          // Other config options...
          signInSuccessUrl: "/",
        });
      }
    });
    observer.observe(document, {
      attributes: false,
      childList: true,
      characterData: false,
      subtree: true,
    });
  },
});
</script>
<script setup lang="ts">
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
</script>
