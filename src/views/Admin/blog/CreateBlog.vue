<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="main-block">
        <h1>BUAT BLOG BARU</h1>
        <p class="subtitle">
          Ini adalah halaman untuk membuat blog baru, kita mesti isi kolom di
          bawah ini untuk nantinya akan ditampilkan kepada publik.
        </p>
      </div>
      <div class="second-block">
        <div class="form-control">
          <label for="title">Judul :</label
          ><input type="text" name="" id="title" v-model.trim="title" />
        </div>
        <div class="form-control">
          <label for="image">Gambar :</label
          ><input type="text" name="" id="image" v-model.trim="image" />
        </div>
        <div class="form-control">
          <label for="author">Penulis :</label
          ><input type="text" name="" id="author" v-model.trim="author" />
        </div>
        <div class="form-control">
          <label for="content">Konten :</label
          ><textarea
            id="content"
            rows="5"
            name="description"
            v-model.trim="content"
          ></textarea>
        </div>
      </div>
      <div class="third-block">
        <button class="button-green">KIRIM</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      image: "",
      author: "",
      content: "",
    };
  },

  methods: {
    handleSubmit() {
      fetch("http://localhost:8080/blog/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          image: this.image,
          author: this.author,
          content: this.content,
        }),
      })
        .then((data) => data.json())
        .then((resData) => console.log(resData))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
label {
  padding: 13px 0px;
  font-weight: bold;
  font-size: 0.9rem;
}

input {
  height: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.main-block {
  padding: 4rem 5rem 0rem 5rem;
}

.subtitle {
  font-size: 15px;
}

.second-block {
  padding: 0rem 5rem 0rem 5rem;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.third-block {
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem 5rem 2rem 5rem;
}

.button-green {
  display: flex;
  width: 8rem;
  height: 2rem;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: green;
  border: none;
  border-radius: 5px;
}

.button-green:hover {
  background-color: rgb(117, 197, 117);
}

.button-green:active {
  background-color: rgb(0, 99, 0);
}
</style>
