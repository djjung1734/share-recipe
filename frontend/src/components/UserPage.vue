<template>
  <div style="height: calc(100vh - 50px)">
    <TopNav />
    <div class="d-flex h-100">
      <SideNav />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNav from './Navigation/TopNav.vue';
import SideNav from './Navigation/SideNav.vue';

export default Vue.extend({
  name: 'UserPage',
  components: {
    TopNav,
    SideNav,
  },
});
</script>
