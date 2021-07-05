<template>
  <nav-bar />
  <router-view />
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: rgb(226, 226, 226);
  font-family: sans-serif;
}
a {
  text-decoration: none;
}

/* global animation  list */
@keyframes slide {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
}
</style>
