<template>
  <div class="grid-container">
    <div class="header">a</div>
    <div class="leftbar">a</div>
    <div class="content">
      <button @click="getBlogs">Get Blogs</button
      ><button @click="postData">Post Data</button>
      <h1>{{ data }}</h1>
    </div>
    <div class="rightbar">a</div>
    <div class="footer">a</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getBlogs();
  },
  data() {
    return {
      halo: "a",
      data: {},
    };
  },
  methods: {
    getBlogs() {
      fetch("http://localhost:8080/blog/posts")
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch");
          }
          return res;
        })
        .then((data) => data.json())
        .then((resData) => {
          this.data = resData;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.grid-container {
  width: 80%;
  display: grid;
  margin: 0px auto;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "header header header"
    "leftbar content rightbar"
    "footer footer footer";
}

.grid-container div {
  padding: 100px;
}

.header {
  grid-area: header;
  background-color: red;
}

.leftbar {
  grid-area: leftbar;
  background-color: green;
}

.content {
  grid-area: content;
  background-color: aqua;
}

.rightbar {
  grid-area: rightbar;
  background-color: blueviolet;
}

.footer {
  grid-area: footer;
  background-color: black;
}
</style>
