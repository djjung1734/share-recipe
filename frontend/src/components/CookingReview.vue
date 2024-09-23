<template>
  <div class="h-100">
    <TopNav />
    <SideNav />
    <div class="content">요리 후기</div>
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

<style lang="css" scoped>
.content {
  padding-left: 280px;
  height: calc(100vh - 56px);
}
</style>
