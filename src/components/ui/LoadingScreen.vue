<template>
  <div class="flex justify-center items-center min-h-screen">
    <button class="btn btn-lg loading">{{ errorMessage }}</button>
  </div>
</template>

<script>
export default {
  props: ["error"],

  computed: {
    errorMessage() {
      return !this.error ? "Loading" : "Terjadi Sesuatu Kesalahan";
    },
  },
};
</script>
