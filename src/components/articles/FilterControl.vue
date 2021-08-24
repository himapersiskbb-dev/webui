<template>
  <base-card class="h-60 flex">
    <div class="flex flex-col">
      <div class="font-bold text-xl mb-4">Kategori</div>
      <!-- <div>Waktu :</div>
      <label for="reversed">{{ reversed }}</label>
      <input
        type="checkbox"
        name="reversed"
        id="reversed"
        checked
        @change="setRelease"
      /> -->
      <div class="space-y-2">
        <checkbox-filter
          id="food"
          title="Food"
          @set-category="setCategory"
        ></checkbox-filter>

        <checkbox-filter
          id="nature"
          title="Nature"
          @set-category="setCategory"
        ></checkbox-filter>

        <checkbox-filter
          id="news"
          title="News"
          @set-category="setCategory"
        ></checkbox-filter>

        <checkbox-filter
          id="story"
          title="Story"
          @set-category="setCategory"
        ></checkbox-filter>

        <checkbox-filter
          id="tech"
          title="Tech"
          @set-category="setCategory"
        ></checkbox-filter>
      </div></div
  ></base-card>
</template>

<script>
import CheckboxFilter from "./CheckboxFilter.vue";
export default {
  components: { CheckboxFilter },
  emits: ["set-reversed", "set-category"],
  data() {
    return {
      reversed: true,
      category: {
        food: true,
        nature: true,
        news: true,
        story: true,
        tech: true,
      },
    };
  },
  methods: {
    setRelease(event) {
      this.reversed = event.target.checked;
      this.$emit("set-reversed", this.reversed);
    },

    setCategory(event) {
      const inputId = event.target.id;
      const value = event.target.checked;
      const newCategory = {
        ...this.category,
        [inputId]: value,
      };
      this.category = newCategory;
      this.$emit("set-category", newCategory);
    },
  },
};
</script>
