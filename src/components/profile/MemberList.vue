<template>
  <!-- handle loading  -->
  <loading-screen
    v-if="isLoading"
    :error="isError"
    :errorMessage="errorMessage"
  />

  <!-- if not loading  -->
  <div
    v-else
    v-for="member in data"
    :key="member.id"
    class="flex flex-row my-6 mx-4 space-x-5"
  >
    <div class="w-24 md:w-auto">
      <img
        :src="baseUrl + member.picture.formats.small.url"
        :alt="member.name"
        class="w-24 mask mask-squircle z-0"
      />
    </div>
    <div class="w-8/12 md:w-auto space-y-1 md:space-y-0">
      <h1 class="text-md md:text-xl font-bold">
        {{ member.name }}
        <span class="hidden md:inline text-sm text-gray-600 dark:text-gray-300"
          >- {{ member.location }}</span
        >
      </h1>
      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-bold">
        {{ member.position }}
      </p>
      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300">
        {{ member.email }}
      </p>
      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300 italic">
        {{ member.bio }}
      </p>
    </div>
  </div>
</template>

<script>
import strapi from "../../services/strapi";

export default {
  data() {
    return {
      isError: false,
      errorMessage: "",
      isLoading: false,
      data: null,
    };
  },

  computed: {
    baseUrl() {
      return process.env.VUE_APP_MAIN_URL;
    },
  },

  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await strapi.get("/writers");
        this.data = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error.message;
        this.isError = true;
      }
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
