<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";
import SideNav from "./Navigation/SideNav.vue";

export default Vue.extend({
  name: "UserPage",
  components: {
    TopNav,
    SideNav,
  },
});
</script>
