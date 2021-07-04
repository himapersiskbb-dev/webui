<template>
  <div class="navigation">
    <!-- main logo -->
    <a class="tittle" href="/"
      ><img
        class="tittle-logo"
        src="/logo_hima_persis_kbb.png"
        alt="LogoHimaPersisKbb"
      />
    </a>

    <!-- dekstop -->
    <div class="navigation-list">
      <ul class="navigation-list-item nav-item-one">
        <li>
          <router-link to="/blog"
            ><span><font-awesome-icon class="left-icon" icon="file-alt" /></span
            >Blog</router-link
          >
        </li>
        <li>
          <router-link to="/news"
            ><span
              ><font-awesome-icon class="left-icon" icon="newspaper" /></span
            >Berita</router-link
          >
        </li>
        <li>
          <router-link to="/downloads"
            ><span
              ><font-awesome-icon
                class="left-icon"
                icon="file-download" /></span
            >Unduh</router-link
          >
        </li>
        <li>
          <router-link to="/contact"
            ><span><font-awesome-icon class="left-icon" icon="id-badge" /></span
            >Kontak</router-link
          >
        </li>
      </ul>
      <ul class="navigation-list-item nav-item-two">
        <!-- <li>
          <router-link to="/singin"
            ><span
              ><font-awesome-icon class="left-icon" icon="sign-in-alt" /></span
            >Masuk</router-link
          >
        </li>
        <li>
          <router-link to="/singout"
            ><span
              ><font-awesome-icon class="left-icon" icon="sign-out-alt" /></span
            >Keluar</router-link
          >
        </li> -->
        <li>
          <router-link to="/admin"
            ><span
              ><font-awesome-icon class="left-icon" icon="user-shield" /></span
            >Admin</router-link
          >
        </li>
      </ul>
    </div>

    <!-- mobile -->
    <font-awesome-icon
      v-if="!isMenuOpen"
      @click="toggleMenu"
      class="menu-icon"
      icon="bars"
    />
    <font-awesome-icon
      v-else
      @click="toggleMenu"
      class="menu-icon"
      icon="times"
    />
    <menubar :isOpen="isMenuOpen" @is-clicked="toggleMenu"></menubar>
  </div>
</template>

<script>
import Menubar from "./Menubar";
export default {
  components: { Menubar },

  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* nav */
.navigation {
  background-color: rgb(31, 31, 31);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1.5rem;
}

/* tittle */
.tittle {
  text-decoration: none;
}

.tittle-logo {
  display: inline;
  width: 200px;
}

.tittle-text span {
  color: red;
}

/* nav-list */
.navigation-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navigation-list-item {
  list-style: none;
  display: flex;
  width: 10%;
}

.navigation-list-item li a {
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  display: flex;
  width: 6rem;
  height: 2rem;
  margin: 0 3px;
  color: white;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s ease-out;
}

.navigation-list-item li a:hover {
  transition: all 0.2s ease-out;
  background-color: rgb(63, 63, 63);
}

.navigation-list-item li a:active {
  background-color: grey;
  border: 1px solid;
}

a.router-link-active {
  background-color: rgb(0, 0, 0);
}

.navigation-list-item.nav-item-one {
  justify-content: flex-start;
}

.navigation-list-item.nav-item-two {
  justify-content: flex-end;
}

.left-icon {
  margin-right: 10px;
}

/* mobile  */
.menu-icon {
  display: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
}

/* responsive  */
@media screen and (max-width: 768px) {
  .navigation-list {
    display: none;
  }

  .menu-icon {
    display: inline;
  }
}
</style>
