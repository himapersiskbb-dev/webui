<template>
  <loading-screen v-if="isLoading" />

  <div v-else class="flex justify-center space-x-2">
    <!-- left -->
    <div class="hidden"></div>

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
    <div class="hidden md:flex md:w-4/12 xl:w-3/12">
      <div class="w-full">
        <base-card
          class="flex justify-center flex-col md:w-11/12 space-y-2 py-10 px-5"
        >
          <div class="flex justify-center">
            <img
              :src="baseUrl + article.author.picture.formats.small.url"
              alt="article.author.name"
              class="w-40 rounded-full"
            />
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-bold">{{ article.author.name }}</h2>
            <p class="text-sm italic text-gray-500">
              {{ article.author.email }}
            </p>
          </div>
          <div class="text-center space-y-3">
            <div>
              <h3 class="text-xs font-bold text-gray-500">BIO</h3>
              <p class="text-sm">{{ article.author.bio }}</p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-500">JABATAN</h3>
              <p class="text-sm">{{ article.author.position }}</p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-500">LOKASI</h3>
              <p class="text-sm">{{ article.author.location }}</p>
            </div>
          </div>
        </base-card>
      </div>
    </div>
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
