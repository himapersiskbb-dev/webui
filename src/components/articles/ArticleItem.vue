<template>
  <!-- main container  -->
  <base-card class="flex flex-row w-full">
    <!-- text & image  -->
    <!-- text content -->
    <div class="flex flex-col justify-between space-y-5 w-8/12 p-1">
      <router-link :to="articleDetailLink">
        <div>
          <h2 class="text-2xl font-bold">{{ title }}</h2>
          <p class="text-sm text-gray-600">
            {{ description.substring(0, 100) + " ..." }}
          </p>
        </div>
      </router-link>

      <div
        class="
          flex
          items-center
          text-gray-600
          flex-row
          space-x-4
          italic
          text-xs
        "
      >
        <div class="flex flex-row items-center space-x-2">
          <img
            :src="baseUrl + author.picture.formats.thumbnail.url"
            :alt="author.name"
            class="w-6 rounded-full"
          />
          <p>{{ author.name }}</p>
        </div>

        <p class="bg-gray-300 px-4 py-1 rounded-xl">
          {{ category.name }}
        </p>
      </div>
    </div>

    <!-- image content -->
    <div class="flex items-center">
      <img
        class="w-52 rounded-md"
        :src="baseUrl + image.formats.thumbnail.url"
        :alt="image.alternativeText"
      /></div
  ></base-card>
</template>

<script>
export default {
  props: [
    "title",
    "description",
    "author",
    "created_at",
    "category",
    "image",
    "slug",
  ],
  computed: {
    baseUrl() {
      return process.env.VUE_APP_MAIN_URL;
    },
    articleDetailLink() {
      return this.$route.path + "/" + this.slug;
    },
  },
};
</script>
