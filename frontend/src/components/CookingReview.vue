<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">요리 후기</span>
    <div class="card border-0 h-100" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CookingReview',
});
</script>

<style scoped>
.container {
  max-width: none;
}
</style>
