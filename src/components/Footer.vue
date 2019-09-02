<template>
  <div>
    <section class="footer-menu">
      <div>
        <h6 class="title">Shop</h6>
        <router-link to="/shop" class="title item">Shop Now</router-link>
      </div>
      <div>
        <h6 class="title">Sell</h6>
        <router-link to="#sell-is-under-development" class="title item">currently under development</router-link>
      </div>
      <div>
        <h6 class="title">About</h6>
        <router-link to="/about" class="title item"> meet our team</router-link>
      </div>
      <div>
        <h6 class="title">Help</h6>
        <router-link to="/help" class="title item"> how can we help you? </router-link>
      </div>
    </section>
    <section class="footer-icon">
      <div>
        © 2019 Mewah.com, Inc.
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-menu {
  margin-left: 10px;
}
.footer-icon {
  margin-top: 40px;
  text-align: center;
  color: white;
}
.title {
  padding-top: 10px;
  color: white;
}
a.title.item {
  text-transform: capitalize;
  color: white;
  margin-top: 5px;
  margin-right: 120px;
}
</style>
