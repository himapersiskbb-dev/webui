<template>
  <div
    class="
      flex flex-row
      items-center
      min-w-full
      space-x-9
      justify-between
      text-gray-600
    "
  >
    <label :for="id">{{ title }}</label
    ><input
      type="checkbox"
      :name="id"
      :id="id"
      class="checkbox checkbox-primary"
      checked
      @change="setCategory"
    />
  </div>
</template>

<script>
export default {
  emits: ["set-category"],
  props: ["id", "title"],
  methods: {
    setCategory(event) {
      this.$emit("set-category", event);
    },
  },
};
</script>
