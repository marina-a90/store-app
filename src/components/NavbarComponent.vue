<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item><router-link to="/customers">Customers</router-link></b-nav-item>
        <b-nav-item><router-link to="/products">Products</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>
