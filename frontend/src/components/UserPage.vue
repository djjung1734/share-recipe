<template>
  <div class="h-100">
    <TopNav />
    <div class="h-100">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light h-100"
        style="width: 280px"
      >
        <div
          class="d-flex flex-column align-items-center mb-3 mb-md-0 link-dark text-decoration-none"
        >
          <img
            class="border-0 rounded-circle"
            width="180"
            height="180"
            src="../assets/bebe.jpg"
          />

          <span class="mt-3 fs-4">Nickname</span>
        </div>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#home"></use>
              </svg>
              레시피
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#speedometer2"></use>
              </svg>
              요리 후기
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#table"></use>
              </svg>
              회원정보수정
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";

export default Vue.extend({
  name: "UserPage",
  components: {
    TopNav,
  },
});
</script>
