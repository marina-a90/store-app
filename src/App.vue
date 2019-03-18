<template>
  <div id="app">
    <navbar-component/>
    <router-view :customers="customers" />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: "app",
  components: {
    NavbarComponent
  },
  data() {
    return {
      customers: [
        {
          name: "Pera",
          lastName: "Peric",
          email: "peric@email.com",
          id: 1,
          orders: ["book", "notebook"]
        },
        {
          name: "jova",
          lastName: "jovic",
          email: "jovic@email.com",
          id: 2,
          orders: ["book"]
        },
        {
          name: "sima",
          lastName: "simic",
          email: "simic@email.com",
          id: 3,
          orders: []
        },
        {
          name: "zoran",
          lastName: "zoric",
          email: "zoric@email.com",
          id: 3,
          orders: []
        }
      ]
    };
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
