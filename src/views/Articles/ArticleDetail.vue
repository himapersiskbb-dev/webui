<template>
  <!-- meta  -->
  <teleport v-if="!isLoading" to="head">
    <title>{{ article.title }} - Hima Persis Kab. Bandung Barat</title>
    <meta property="og:image" :content="baseUrl + article.image.url" />
    <meta name="description" :content="article.description" />
    <meta name="author" :content="article.author.name" />
  </teleport>

  <loading-screen
    v-if="isLoading"
    :error="isError"
    :errorMessage="errorMessage"
  />

  <div
    v-else
    class="
      flex flex-col
      space-y-2
      md:space-y-0 md:flex-row md:justify-center
      space-x-2
      items-center
      md:items-stretch
    "
  >
    <!-- left -->
    <div class="hidden"></div>

    <!-- center -->
    <base-card class="w-11/12 md:w-7/12 xl:w-6/12 space-y-3 p-9">
      <h1 class="text-3xl md:text-4xl font-bold">{{ article.title }}</h1>
      <p class="text-sm md:text-base italic text-gray-500 dark:text-gray-400">
        {{ article.description }}
      </p>
      <div class="flex flex-row">
        <div class="h-1 w-3/12 bg-red-700"></div>
        <div class="h-1 w-9/12 bg-black dark:bg-gray-300"></div>
      </div>
      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          space-x-0 space-y-2
          md:space-x-8 md:space-y-0
          italic
          text-gray-600
          dark:text-gray-400
          text-xs
        "
      >
        <p>Oleh : {{ article.author.name }}</p>
        <p>Rilis : {{ article.created_at }}</p>
        <p class="bg-gray-300 px-4 text-gray-600 py-1 rounded-xl">
          {{ article.category.name }}
        </p>
      </div>
      <img :src="baseUrl + article.image.url" alt="" srcset="" />
      <div class="text-sm md:text-base" v-html="article.content"></div
    ></base-card>

    <!-- right -->
    <div class="w-11/12 md:flex md:w-4/12 xl:w-3/12">
      <div class="w-full mb-6">
        <base-card
          class="
            flex
            items-center
            justify-center
            flex-col
            md:w-11/12
            space-y-2
            py-10
            px-5
          "
        >
          <div class="flex justify-center">
            <img
              :src="baseUrl + article.author.picture.formats.small.url"
              alt="article.author.name"
              class="w-36 md:w-32 xl:w-40 rounded-full border-4 border-gray-300"
            />
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-bold">{{ article.author.name }}</h2>
            <p class="text-sm italic text-gray-500 dark:text-gray-400">
              {{ article.author.email }}
            </p>
          </div>
          <div class="flex flex-row w-8/12">
            <div class="h-1 w-3/12 bg-red-700"></div>
            <div class="h-1 w-9/12 bg-black dark:bg-gray-300"></div>
          </div>
          <div class="text-center space-y-3">
            <div>
              <h3 class="text-xs font-bold text-gray-500 dark:text-gray-400">
                BIO
              </h3>
              <p class="text-sm">{{ article.author.bio }}</p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-500 dark:text-gray-400">
                JABATAN
              </h3>
              <p class="text-sm">{{ article.author.position }}</p>
            </div>
            <div>
              <h3 class="text-xs font-bold text-gray-500 dark:text-gray-400">
                LOKASI
              </h3>
              <p class="text-sm">{{ article.author.location }}</p>
            </div>
            <div class="space-x-2">
              <a
                class="btn btn-xs xl:btn-sm space-x-2"
                :href="`mailto:${article.author.email}`"
                ><font-awesome-icon class="left-icon" icon="id-badge" /><span
                  >Kontak</span
                ></a
              >
              <a
                class="btn btn-disabled loading btn-outline btn-xs xl:btn-sm"
                :href="`mailto:${article.author.email}`"
                >Artikel</a
              >
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
      isError: false,
      errorMessage: "",
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
          this.errorMessage = error.message;
          this.isError = true;
        });
    },
  },

  created() {
    this.loadArticle();
  },
};
</script>
