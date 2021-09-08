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
    class="flex flex-row my-4 mx-4 space-x-5"
  >
    <div class="w-4/12 md:w-auto">
      <img
        :src="baseUrl + member.picture.formats.small.url"
        :alt="member.name"
        class="w-24 mask mask-squircle z-0"
      />
    </div>
    <div class="w-8/12 md:w-auto">
      <h1 class="text-xl font-bold">
        {{ member.name }} -
        <span class="text-sm text-gray-600">{{ member.location }}</span>
      </h1>
      <p class="text-sm text-gray-600">{{ member.position }}</p>
      <p class="text-sm text-gray-600">{{ member.email }}</p>
      <p class="text-sm text-gray-600 italic">{{ member.bio }}</p>
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
        console.log(response.data);
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
