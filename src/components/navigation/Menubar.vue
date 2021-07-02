<template>
  <div class="menu">
    <ul class="menu-list">
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/news">Berita</router-link></li>
      <li><router-link to="/downloads">Unduh</router-link></li>
      <li><router-link to="/contact">Kontak</router-link></li>
      <li>
        <router-link to="/setting">Settings</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  background-color: rgb(31, 31, 31);
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  padding-top: 4rem;
}
.menu-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: stretch;
}

.menu-list li a {
  font-family: "Montserrat", sans-serif;
  margin: 0 10px;
  margin-bottom: 10px;
  color: white;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid rgb(131, 131, 131);
  transition: all 0.2s ease-out;
}

.menu-list li a:hover {
  background-color: rgb(56, 56, 56);
}

a.router-link-active {
  background-color: rgb(0, 0, 0);
}

/* responsive */
@media screen and (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
