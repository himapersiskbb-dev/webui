const axios = require("axios").default;

export default {
  async loadArticles(context) {
    const response = await axios.get(
      process.env.VUE_APP_MAIN_URL + "/articles"
    );

    context.commit("setArticles", response.data);
  },
};
