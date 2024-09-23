<template>
  <div class="h-100">
    <TopNav />
    <SideNav />
    <div class="content">회원정보수정</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";
import SideNav from "./Navigation/SideNav.vue";

export default Vue.extend({
  name: "EditMember",
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
