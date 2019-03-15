<template>
  <div id="app">
    <navbar-component></navbar-component>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "app",
  components: {
    NavbarComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
