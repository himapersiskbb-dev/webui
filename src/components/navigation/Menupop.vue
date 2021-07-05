<template>
  <transition name="menu"
    ><div v-if="isOpen" class="base-card">
      <slot></slot></div
  ></transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.base-card {
  display: flex;
  background-color: rgb(31, 31, 31);
  border-radius: 5px;
  padding: 7px 0;
}

.menu-enter-active {
  animation: slide 0.3s ease-out;
}
.menu-leave-active {
  animation: slide 0.1s ease-out reverse;
}
</style>
