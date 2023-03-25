import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/main.css";
import en from "./assets/lang/en.js";
import es from "./assets/lang/es.js";

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    en,
    es,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount("#app");
