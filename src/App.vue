<template>
  <metainfo>
    <template v-slot:title="{ content }"
      >{{ content }} - Hima Persis Kab. Bandung Barat</template
    >
  </metainfo>
  <div class="w-full min-h-screen bg-gray-100 dark:bg-black">
    <nav-bar v-if="isMainPage" />
    <background-base v-if="isMainPage">
      <router-view></router-view>
    </background-base>
    <router-view v-else></router-view>
  </div>
</template>

<style>
@keyframes slide {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script>
import { computed } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const isMainPage = computed(() => {
      if (route.path === "/") {
        return false;
      } else {
        return true;
      }
    });

    useMeta({
      title: "Situs Resmi",
      description:
        "Sebuah situs untuk membagikan hasil karya tulisan kami di PD. Hima Persis Kab. Bandung Barat",
      og: {
        image: "https://avatars.githubusercontent.com/u/90387473?s=200&v=4",
      },
      htmlAttrs: { lang: "en", amp: true },
    });

    return { isMainPage };
  },
};
</script>
