import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { fetchData } from "./firestore";
import { createI18n } from "vue-i18n";

fetchData("posts").then((res) => {
  console.log(res);
});

const initLocale = navigator.language.substring(0, 2);

const i18n = createI18n({
  locale: initLocale || "en",
  fallbackLocale: "en",
  messages: {
    ko: {
      message: {
        hello: "안녕하세요",
      },
    },
    en: {
      message: {
        hello: "hello world",
      },
    },
    id: {
      message: {
        hello: "Selamat siang",
      },
    },
  },
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
