<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <div class="container">요리 후기</div>
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
