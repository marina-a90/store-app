import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueRouter from "vue-router";

import AppCustomers from "./components/AppCustomers.vue";
import AppProducts from "./components/AppProducts.vue";
import AppPurchases from "./components/AppPurchases.vue";

Vue.use(BootstrapVue);

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/customers", component: AppCustomers },
  { path: "/products", component: AppProducts },
  { path: "/customers/:id", component: AppPurchases, name: "purchases" }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
