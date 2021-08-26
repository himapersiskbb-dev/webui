<template>
  <!-- main container -->
  <loading-screen v-if="isLoading" />

  <div v-else class="flex bg flex-row justify-center space-x-2">
    <!-- left space -->
    <div class="hidden xl:flex flex-row-reverse w-2/12"></div>

    <!-- center space -->
    <div class="flex items-center w-11/12 md:w-7/12 flex-col space-y-2">
      <article-item
        v-for="article in articlesToRender"
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
    <div class="hidden md:block w-4/12">
      <base-card class="md:w-full xl:w-8/12 space-x-1 space-y-1 flex flex-col">
        <h2 class="text-2xl font-bold">Kategori</h2>
        <div class="divider"></div>
        <div class="flex justify-center space-x-1 flex-wrap">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setCategory(category.slug)"
            class="btn btn-sm my-1"
            :class="{ 'btn-outline': category.slug !== filteredMode }"
          >
            {{ category.name }}
          </button>
          <button class="btn btn-sm mt-1" @click="removeCategory">
            Hapus Kategori
          </button>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import ArticleItem from "../../components/articles/ArticleItem.vue";

export default {
  components: {
    ArticleItem,
  },

  data() {
    return {
      isLoading: false,
      articles: null,
      categories: null,
      filteredArticles: null,
      filteredMode: null,
    };
  },

  computed: {
    articlesToRender() {
      if (this.filteredMode) {
        return this.filteredArticles;
      } else {
        return this.articles;
      }
    },
  },

  methods: {
    loadData() {
      this.isLoading = true;
      Promise.all([
        this.$store.dispatch("articles/loadArticles"),
        this.$store.dispatch("articles/loadCategories"),
      ]).then((results) => {
        this.articles = results[0].data;
        this.categories = results[1].data;
        this.isLoading = false;
      });
    },

    setCategory(category) {
      this.filteredMode = category;
      this.filteredArticles = this.articles.filter((article) => {
        if (article.category.name === category) {
          return true;
        }
      });
    },

    removeCategory() {
      this.filteredMode = null;
    },
  },

  created() {
    this.loadData();
  },
};
</script>
