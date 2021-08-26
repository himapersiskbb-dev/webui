import strapi from "../../../services/strapi.js";

export default {
  loadArticles() {
    return strapi.get("/articles", {
      params: {
        _sort: "id:DESC",
      },
    });
  },

  loadArticle(_, payload) {
    return strapi.get(`/articles/${payload.slug}`);
  },

  loadCategories() {
    return strapi.get("categories");
  },
};
