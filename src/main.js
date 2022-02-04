import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import router from "./router";

library.add(faTimes);

createApp(App).use(router).mount("#app");
