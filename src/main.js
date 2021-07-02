import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// importing global component
import Navbar from "./components/navigation/Navbar.vue";

const app = createApp(App);

// font-awesome
library.add(faBars);

// global component
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("nav-bar", Navbar);

app.use(store);
app.use(router);
app.mount("#app");
