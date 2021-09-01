<template>
  <div class="flex justify-center items-center min-h-screen">
    <button v-if="!error" class="btn btn-lg loading">LOADING</button>
    <div
      v-else
      class="flex flex-row items-center alert alert-error space-x-4"
      :class="{ loading: !error }"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ff5722"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          ></path>
        </svg>
      </div>
      <div class="flex flex-col">
        <div class="font-bold text-xl">{{ message.toUpperCase() }}</div>
        <div class="italic">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error", "errorMessage"],

  computed: {
    message() {
      return !this.error ? "Loading" : "Terjadi Sesuatu Kesalahan";
    },
  },
};
</script>
