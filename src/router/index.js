import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profil",
    name: "profil",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile/Profile.vue"),
  },
  {
    path: "/artikel",
    name: "artikel",
    component: () =>
      import(
        /* webpackChunkName: "articles" */ "../views/Articles/Articles.vue"
      ),
  },
  {
    path: "/artikel/:slug",
    name: "artikel-detail",
    component: () =>
      import(
        /* webpackChunkName: "article-detail" */ "../views/Articles/ArticleDetail.vue"
      ),
    props: true,
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
