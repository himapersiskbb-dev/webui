<template>
  <div class="grid-container">
    <div class="grid-col-1">
      <h2>Blog</h2>
      <ul>
        <li>
          <button @click="setActiveComponent('create-blog')">Buat Blog</button>
        </li>
        <li>
          <button @click="setActiveComponent('edit-blog')">Edit Blog</button>
        </li>
        <li>Hapus Blog</li>
      </ul>
    </div>
    <div class="grid-col-2">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import CreateBlog from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";
export default {
  components: { CreateBlog, EditBlog },
  data() {
    return {
      activeComponent: "create-blog",
    };
  },
  methods: {
    setActiveComponent(activeComponent) {
      this.activeComponent = activeComponent;
    },
  },
};
</script>

<style scoped>
.grid-container {
  margin: 0px 5rem;
  display: grid;
  padding-top: 7rem;
  grid-template-columns: 1fr 3fr;
}

.grid-container .grid-col-1 {
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  background-color: white;
  height: 500px;
}

.grid-container .grid-col-2 {
  background-color: white;
}
</style>
