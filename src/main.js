import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/style.css";

import { createI18n } from "vue-i18n";
import en from "@/locales/EN.json";
import fr from "@/locales/FR.json";

const i18n = createI18n({
    locale: "fr",
    messages: {
        en,
        fr,
    },
});

createApp(App).use(router).use(i18n).mount("#app");
