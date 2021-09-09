<template>
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
export default {
  computed: {
    isMainPage() {
      if (this.$route.path === "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
