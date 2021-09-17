import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

import { createMetaManager } from "vue-meta";

// importing global component
import FontAwesomeIcon from "./fontawesome";
import Navbar from "./components/navigation/Navbar.vue";
import BackgroundBase from "./components/ui/BackgroundBase.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import LoadingScreen from "./components/ui/LoadingScreen.vue";
import Footer from "./components/navigation/Footer.vue";

const app = createApp(App);

// global component
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("nav-bar", Navbar);
app.component("background-base", BackgroundBase);
app.component("base-card", BaseCard);
app.component("loading-screen", LoadingScreen);
app.component("foot-er", Footer);

app.use(createMetaManager());
app.use(store);
app.use(router);

app.mount("#app");
