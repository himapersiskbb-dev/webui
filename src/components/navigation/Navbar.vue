<template>
  <div class="navigation z-10">
    <!-- main logo -->
    <router-link class="tittle" to="/"
      ><img
        class="tittle-logo"
        src="/logo_hima_persis_kbb.png"
        alt="LogoHimaPersisKbb"
      />
    </router-link>

    <!-- dekstop -->
    <div class="navigation-list">
      <ul class="navigation-list-item nav-item-one">
        <li>
          <router-link to="/profil"
            ><span><font-awesome-icon class="left-icon" icon="id-badge" /></span
            >Profil</router-link
          >
        </li>
        <li>
          <router-link to="/artikel"
            ><span><font-awesome-icon class="left-icon" icon="file-alt" /></span
            >Artikel</router-link
          >
        </li>
        <li>
          <router-link to="/kontak"
            ><span><font-awesome-icon class="left-icon" icon="id-badge" /></span
            >Kontak</router-link
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
// import Menupop from "./Menupop.vue";
export default {
  components: { Menubar },

  data() {
    return {
      isUserMenuOpen: false,
      isMenuOpen: false,
    };
  },

  methods: {
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* general-styling */
a {
  color: white;
}

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
  margin: 0px 3px;
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

.left-icon {
  margin-right: 10px;
}

.right-icon {
  margin-left: 10px;
}

/* nav-list number two / sebelah kanan */
.navigation-list-item.nav-item-two li a {
  width: 8rem;
}

.navigation-list-item.nav-item-two {
  justify-content: flex-end;
}

/* menu-pop */
.menu-wrapper {
  position: absolute;
}
.menu-pop {
  margin-top: 25px;
}

.menu-pop ul {
  list-style: none;
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
