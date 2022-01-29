import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://www.gstatic.com/firebasejs/ui/6.0.0/firebase-ui-auth.css",
      },
    ],
  },
  css: ["~/assets/main.scss", "~/assets/mdc.scss"],
  ssr: false,
  /*
  modules: [
    //"@nuxtjs/pwa"
  ],
  pwa: {
    icon: {
      source: "C:\\Users\\user\\Documents\\ajvoca\\app\\pwa-icon.ajvoca.png",
      fileName: "icon_pwa.png",
    },
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: "black",
    },
    manifest: {
      name: "AjiVocaburary",
      short_name: "AjVoca",
      icons: [
        {
          src: "C:\\Users\\user\\Documents\\ajvoca\\app\\pwa-icon.ajvoca.png",
          sizes: "512x512",
          type: "image/png",
          start_url: "/",
          lang: "ja",
          publicPath: "/",
        },
      ],
    },
  },*/
});
