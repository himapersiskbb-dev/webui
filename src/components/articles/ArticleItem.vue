<template>
  <!-- main container  -->
  <base-card class="flex flex-row space-x-5 w-full">
    <!-- text & image  -->
    <!-- text content -->
    <div class="flex flex-col justify-between space-y-5 w-8/12 p-1">
      <router-link :to="articleDetailLink">
        <div>
          <h2 class="text-xl mb-2 md: md:text-2xl font-bold leading-5">
            {{ title }}
          </h2>
          <p class="text-xs md:text-sm text-gray-600">
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
        <div class="flex flex-row items-center md:space-x-2">
          <img
            :src="baseUrl + author.picture.formats.thumbnail.url"
            :alt="author.name"
            class="hidden md:block w-6 rounded-full"
          />
          <p>{{ author.name }}</p>
        </div>

        <p class="bg-gray-300 px-4 py-1 rounded-xl">
          {{ category.name }}
        </p>
      </div>
    </div>

    <!-- image content -->
    <div class="flex w-52 h-full items-center">
      <img
        class="rounded-md h-full w-full object-cover"
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
