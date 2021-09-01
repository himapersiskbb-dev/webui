<template>
  <!-- main background -->
  <loading-screen
    v-if="isLoading"
    :error="isError"
    :errorMessage="errorMessage"
  />
  <div
    v-else
    class="w-screen h-screen bg-cover bg-center"
    :style="{
      backgroundImage: `url('${backgroundImage}')`,
    }"
  >
    <!-- second layer -->
    <div
      class="transition flex w-full h-full bg-black bg-opacity-25"
      :class="{ 'bg-opacity-60': isTitleTriggered }"
    >
      <!-- navbar -->
      <div
        class="
          flex flex-row
          items-center
          justify-center
          md:justify-between
          w-full
          h-20
          px-16
          text-gray-200
          font-semibold
          fixed
        "
      >
        <!-- left item -->
        <div>
          <router-link class="hover:text-white" to="/"
            >HIMA PERSIS KBB</router-link
          >
        </div>

        <!-- right item -->
        <div class="hidden md:block space-x-10">
          <router-link class="hover:text-white" to="/unduh">PROFIL</router-link>
          <router-link class="hover:text-white" to="/artikel"
            >ARTIKEL</router-link
          >
          <router-link class="hover:text-white" to="/kontak"
            >KONTAK</router-link
          >
        </div>
      </div>

      <!-- main title -->
      <div
        class="
          w-screen
          h-screen
          flex
          justify-center
          items-center
          text-white
          flex-col
        "
      >
        <div
          class="transition text-6xl font-bold filter drop-shadow-md"
          @click="handleTitleTrigger"
          @mouseover="handleTitleTrigger"
          @mouseleave="handleTitleTrigger"
        >
          {{ title.toUpperCase() }}
        </div>
        <div class="flex flex-col items-center text-center p-7 my-5 md:p-0">
          <p class="italic">{{ subTitle }}</p>
          <p class="italic font-bold text-sm">- ({{ subSubtitle }})</p>
        </div>
        <div class="mt-6">
          <router-link class="btn glass space-x-3" to="/artikel">
            <font-awesome-icon icon="file-alt" /><span>MASUK</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import strapi from "../../services/strapi.js";

export default {
  data() {
    return {
      isError: false,
      errorMessage: "",
      isLoading: false,
      isTitleTriggered: false,
      data: {},
    };
  },

  computed: {
    backgroundImage() {
      const baseUrl = process.env.VUE_APP_MAIN_URL;
      if (!this.isTitleTriggered) {
        return baseUrl + this.data.background.url;
      } else {
        return baseUrl + this.data.secondBackground.url;
      }
    },

    title() {
      if (this.isTitleTriggered) {
        return this.data.secondTitle;
      } else {
        return this.data.title;
      }
    },

    subTitle() {
      if (this.isTitleTriggered) {
        return this.data.subtitle;
      } else {
        return this.data.secondSubtitle;
      }
    },

    subSubtitle() {
      if (this.isTitleTriggered) {
        return this.data.subSubtitle;
      } else {
        return this.data.subSecondSubtitle;
      }
    },
  },

  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const response = await strapi.get("/landing-page");
        this.data = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorMessage = error.message;
        this.isError = true;
      }
    },

    handleTitleTrigger() {
      this.isTitleTriggered = !this.isTitleTriggered;
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
