import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { fetchData } from "./firestore";

createApp(App).mount("#app");

fetchData("posts").then((res) => {
  console.log(res);
});
