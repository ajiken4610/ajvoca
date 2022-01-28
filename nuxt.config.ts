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
    ],
  },
  css: ["~/assets/main.scss", "~/assets/mdc.scss"],
  modules: ["@nuxtjs/pwa"],
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
  },
});
