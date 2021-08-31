<template>
  <nav-bar v-if="isMainPage" />
  <background-base v-if="isMainPage">
    <router-view></router-view>
  </background-base>
  <router-view v-else></router-view>
</template>

<style>
html,
body {
  @apply w-full min-h-screen bg-gray-100;
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
