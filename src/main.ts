import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIdXcvrG8MQreFrXK4XPVY_5RRjuRrYmg",
  authDomain: "ajvoca.firebaseapp.com",
  projectId: "ajvoca",
  storageBucket: "ajvoca.appspot.com",
  messagingSenderId: "433606026411",
  appId: "1:433606026411:web:b3ad93cdad765e20f503ee",
  measurementId: "G-9BDFJHSBN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Lfn9iweAAAAAO22TGfrr3oCcQmWCBi-mrww5Zo3"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
