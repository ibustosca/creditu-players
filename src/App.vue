<template>
  <div id="app">
    <Header />
    <Search />
    <Footer />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Search,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
@import "./assets/styles/global.css";
</style>
