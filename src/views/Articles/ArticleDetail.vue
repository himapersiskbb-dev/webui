<template>
  <loading-screen v-if="isLoading" />

  <div v-else class="flex justify-center">
    <!-- left -->
    <div class="hidden xl:w-4/12"></div>

    <!-- center -->
    <base-card class="w-11/12 md:w-7/12 xl:w-6/12 space-y-3 p-9">
      <h1 class="text-4xl font-bold">{{ article.title }}</h1>
      <p class="text-gray-600">{{ article.description }}</p>
      <div class="flex flex-row">
        <div class="h-1 w-3/12 bg-red-700"></div>
        <div class="h-1 w-9/12 bg-black"></div>
      </div>
      <div
        class="
          flex flex-row
          items-center
          space-x-8
          italic
          text-gray-600 text-xs
        "
      >
        <p>{{ article.author.name }}</p>
        <p>{{ article.created_at }}</p>
        <p class="bg-gray-300 px-4 py-1 rounded-xl">
          {{ article.category.name }}
        </p>
      </div>
      <img :src="baseUrl + article.image.url" alt="" srcset="" />
      <div class="text-sm md:text-base" v-html="article.content"></div
    ></base-card>

    <!-- right -->
    <div class="hidden xl:w-4/12"></div>
  </div>
</template>

<script>
export default {
  props: ["slug"],

  data() {
    return {
      isLoading: false,
      article: [],
    };
  },

  computed: {
    baseUrl() {
      return process.env.VUE_APP_MAIN_URL;
    },
  },

  methods: {
    loadArticle() {
      this.isLoading = true;
      this.$store
        .dispatch("articles/loadArticle", { slug: this.slug })
        .then((response) => {
          this.article = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.loadArticle();
  },
};
</script>
