import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/Settings/Settings.vue"
      ),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
