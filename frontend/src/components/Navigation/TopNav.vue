<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
    <div class="container px-1 py-0">
      <router-link to="/home">
        <span type="button" class="btn border-0 navbar-brand"
          >ShareRECIPE</span
        ></router-link
      >
      <div class="d-flex align-items-center w-50">
        <input
          class="form-control mr-sm-2 py-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn border-0">
          <span class="material-symbols-outlined text-white">search</span>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <span
          type="button"
          class="me-3 text-white"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          style="font-size: 12px"
          >Log In</span
        >

        <router-link to="/user/recipe">
          <button class="btn border-0 rounded-circle">
            <span
              class="material-symbols-outlined text-white"
              style="font-size: 32px"
            >
              person
            </span>
          </button></router-link
        >
      </div>
    </div>
    <LogInModal />
    <SignUpModal />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import LogInModal from "../Modal/LogInModal.vue";
import SignUpModal from "../Modal/SignUpModal.vue";

export default Vue.extend({
  components: {
    LogInModal,
    SignUpModal,
  },
});
</script>
