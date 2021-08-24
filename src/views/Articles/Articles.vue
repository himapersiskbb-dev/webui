<template>
  <!-- main container -->
  <div v-if="isLoading">Loading...</div>
  <div v-else class="flex bg flex-row justify-center space-x-2">
    <!-- left space -->
    <div class="flex flex-row-reverse w-4/12">
      <filter-control
        @set-category="setCategory"
        @set-reversed="setReversed"
      ></filter-control>
    </div>

    <!-- center space -->
    <div class="flex items-center w-6/12 flex-col space-y-2">
      <article-item
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :description="article.description"
        :author="article.author"
        :created_at="article.created_at"
        :category="article.category"
        :image="article.image"
        :slug="article.slug"
      />
    </div>

    <!-- right space -->
    <div class="w-4/12"></div>
  </div>
</template>

<script>
import ArticleItem from "../../components/articles/ArticleItem.vue";
import FilterControl from "../../components/articles/FilterControl.vue";

export default {
  components: {
    ArticleItem,
    FilterControl,
  },
  data() {
    return {
      isLoading: false,
      reversed: true,
      category: {
        food: true,
        nature: true,
        news: true,
        story: true,
        tech: true,
      },
    };
  },
  computed: {
    articles() {
      const articles = this.$store.getters["articles/getArticles"];

      const filteredArticles = articles.filter((article) => {
        if (this.category.food && article.category.name.includes("food")) {
          return true;
        }
        if (this.category.nature && article.category.name.includes("nature")) {
          return true;
        }
        if (this.category.news && article.category.name.includes("news")) {
          return true;
        }
        if (this.category.story && article.category.name.includes("story")) {
          return true;
        }
        if (this.category.tech && article.category.name.includes("tech")) {
          return true;
        }
      });

      if (this.reversed === true) {
        return filteredArticles.reverse();
      } else {
        return filteredArticles;
      }
    },
  },
  methods: {
    setReversed(newReversed) {
      this.reversed = newReversed;
    },

    setCategory(newCategory) {
      this.category = newCategory;
    },

    async loadArticles() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("articles/loadArticles");
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadArticles();
  },
};
</script>
