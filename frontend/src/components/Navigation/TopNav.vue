<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <router-link to="/home">
        <span type="button" class="btn border-0 navbar-brand"
          >ShareRECIPE</span
        ></router-link
      >
      <div class="d-flex w-50">
        <input
          class="form-control mr-sm-2 py-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <span
          type="button"
          class="btn btn-outline-success border-0 p-1 material-icons material-symbols-outlined"
          >search</span
        >
      </div>
      <div>
        <span
          type="button"
          class="me-3 text-dark"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          style="font-size: 12px"
          >Log In</span
        >

        <router-link to="/recipe"
          ><span
            type="button"
            class="btn btn-outline-dark border-0 rounded-circle p-1 material-icons material-symbols-outlined"
            style="font-size: 32px"
          >
            person
          </span></router-link
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
