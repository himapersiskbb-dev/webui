import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artikel",
    name: "artikel",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/Articles/Articles.vue"),
  },
  {
    path: "/artikel/:slug",
    name: "artikel-detail",
    component: () =>
      import(
        /* webpackChunkName: "blog" */ "../views/Articles/ArticleDetail.vue"
      ),
    props: true,
  },
  {
    path: "/unduh",
    name: "unduh",
    component: () =>
      import(
        /* webpackChunkName: "downloads" */ "../views/Downloads/Downloads.vue"
      ),
  },
  {
    path: "/kontak",
    name: "kontak",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact/Contact.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
