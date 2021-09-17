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
          <router-link class="hover:text-white" to="/profil"
            >PROFIL</router-link
          >
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

      <!-- foooter  -->
      <div class="flexbox w-full h-20 fixed bottom-0 text-center">
        <div class="text-white italic text-xs font-bold">
          {{ data.footerText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useMeta } from "vue-meta";
import strapi from "../../services/strapi.js";

export default {
  setup() {
    const isError = ref(false);
    const errorMessage = ref("");
    const isLoading = ref(false);
    const isTitleTriggered = ref(false);
    const data = reactive({});

    useMeta({
      title: "Beranda",
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
    });

    fetchData();

    const backgroundImage = computed(() => {
      const baseUrl = process.env.VUE_APP_MAIN_URL;
      if (!isTitleTriggered.value) {
        return baseUrl + data.value.background.url;
      } else {
        return baseUrl + data.value.secondBackground.url;
      }
    });

    const title = computed(() => {
      if (isTitleTriggered.value) {
        return data.value.secondTitle;
      } else {
        return data.value.title;
      }
    });

    const subTitle = computed(() => {
      if (isTitleTriggered.value) {
        return data.value.subtitle;
      } else {
        return data.value.secondSubtitle;
      }
    });

    const subSubtitle = computed(() => {
      if (isTitleTriggered.value) {
        return data.value.subSubtitle;
      } else {
        return data.value.subSecondSubtitle;
      }
    });

    async function fetchData() {
      try {
        isLoading.value = true;
        const response = await strapi.get("/landing-page");
        data.value = response.data;
        isLoading.value = false;
      } catch (error) {
        errorMessage.value = error.message;
        isError.value = true;
      }
    }

    function handleTitleTrigger() {
      isTitleTriggered.value = !isTitleTriggered.value;
    }

    return {
      isError,
      errorMessage,
      isLoading,
      isTitleTriggered,
      data,
      backgroundImage,
      title,
      subTitle,
      subSubtitle,
      handleTitleTrigger,
    };
  },
};
</script>
