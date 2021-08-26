import { createStore } from "vuex";

import articlesModule from "./modules/articles/index.js";
import rootMutations from "./mutation.js";
import rootGetters from "./getters.js";
import rootAction from "./action.js";

export default createStore({
  modules: {
    articles: articlesModule,
  },
  state() {
    return {};
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootAction,
});
