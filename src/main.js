import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { fetchData } from "./firestore";
import { createI18n } from "vue-i18n";
import { ko } from "./locales/ko";
import { en } from "./locales/en";
import { id } from "./locales/id";

fetchData("posts").then((res) => {
  console.log(res);
});

const initLocale = navigator.language.substring(0, 2);

document.documentElement.lang = initLocale;

const i18n = createI18n({
  locale: initLocale || "en",
  fallbackLocale: "en",
  messages: {
    ko,
    en,
    id,
  },
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
