import strapi from "../../../services/strapi.js";

export default {
  loadArticles(_, payload) {
    let sort = "";
    if (payload.latest) {
      sort = "id:DESC";
    } else {
      sort = "id:ASC";
    }
    return strapi.get("/articles", {
      params: {
        _sort: sort,
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
