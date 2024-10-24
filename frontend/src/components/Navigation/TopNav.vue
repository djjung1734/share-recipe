<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
    <div class="container px-1 py-0">
      <router-link to="/home">
        <span type="button" class="btn border-0 navbar-brand">ShareRECIPE</span>
      </router-link>
      <div class="d-flex align-items-center w-50">
        <input
          class="form-control mr-sm-2 py-1"
          type="search"
          placeholder="Search"
          aria-label="Search" />
        <button type="button" class="btn border-0">
          <span class="material-symbols-outlined text-white">search</span>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <router-link to="/login">
          <span type="button" class="me-3 text-white" style="font-size: 12px">
            Log In
          </span>
        </router-link>
        <router-link to="/user/recipe">
          <button type="button" class="btn border-0 rounded-circle">
            <span
              class="material-symbols-outlined text-white"
              style="font-size: 32px">
              person
            </span>
          </button>
        </router-link>
      </div>
    </div>
    <SignUpModal />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import SignUpModal from '../Modal/SignUpModal.vue';

export default Vue.extend({
  components: {
    SignUpModal,
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
});
</script>
