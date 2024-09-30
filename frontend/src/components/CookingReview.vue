<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <div class="container d-flex flex-column m-0 bg-light">
        <span class="navbar-brand fs-5 py-1">요리 후기</span>
        <div class="card border-0 h-100"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";
import SideNav from "./Navigation/SideNav.vue";

export default Vue.extend({
  name: "CookingReview",
  components: {
    TopNav,
    SideNav,
  },
});
</script>
