<template>
  <div v-if="isLoading">Loading</div>
  <div v-else class="flex">
    <!-- left -->
    <div class="w-4/12"></div>

    <!-- center -->
    <base-card class="w-6/12 space-y-3 p-9">
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
      <img :src="imageSource" alt="" srcset="" />
      <div v-html="article.content"></div
    ></base-card>

    <!-- right -->
    <div class="w-4/12"></div>
  </div>
</template>

<script>
export default {
  props: ["slug"],
  computed: {
    isLoading() {
      return this.$store.getters["getLoading"];
    },
    imageSource() {
      return process.env.VUE_APP_MAIN_URL + this.article.image.url;
    },
    article() {
      return this.$store.getters["articles/getArticles"].find(
        (article) => article.slug === this.slug
      );
    },
  },
};
</script>
