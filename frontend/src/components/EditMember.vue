<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <div
        class="container d-flex flex-column justify-content-center align-items-center"
      >
        <div class="d-flex align-items-center">
          <label class="form-label" for="username">ID</label>
          <input
            id="username"
            type="text"
            class="form-control"
            name="username"
            placeholder="ID"
          />
        </div>
        <div class="d-flex align-items-center">
          <label class="form-label" for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            class="form-control"
          />
        </div>
        <div class="d-flex align-items-center">
          <label class="form-label" for="nickname">Nickname</label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            placeholder="Nickname"
            class="form-control"
          />
        </div>
      </div>
    </div>
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
