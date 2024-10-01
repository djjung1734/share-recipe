<template>
  <div style="height: calc(100vh - 50px)">
    <div class="d-flex flex-column p-3 bg-dark h-100" style="width: 280px">
      <div
        class="d-flex flex-column align-items-center pb-3 mb-3 mb-md-0 link-dark text-decoration-none"
      >
        <img
          class="border-0 rounded-circle"
          width="180"
          height="180"
          src="../../assets/bebe.jpg"
        />

        <span class="mt-3 fs-4 text-white">Nickname</span>
      </div>
      <ul class="nav nav-pills flex-column border-top pt-3">
        <li class="nav-item">
          <router-link to="/user/recipe" class="text-decoration-none"
            ><div
              @click="selectMenu('recipe')"
              type="button"
              class="nav-link d-flex align-items-center"
            >
              <span class="material-symbols-outlined pe-2"> ramen_dining </span>
              <span>레시피</span>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="/user/review" class="text-decoration-none"
            ><div
              @click="selectMenu('review')"
              type="button"
              class="nav-link d-flex align-items-center"
            >
              <span class="material-symbols-outlined pe-2"> rate_review </span>
              <span>요리 후기</span>
            </div></router-link
          >
        </li>
        <li>
          <router-link to="/user/member" class="text-decoration-none"
            ><div
              @click="selectMenu('member')"
              type="button"
              class="nav-link d-flex align-items-center"
            >
              <span class="material-symbols-outlined pe-2">
                manage_accounts
              </span>
              <span>회원정보수정</span>
            </div></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ManagementRecipe",
  data() {
    return {
      select: "recipe",
    };
  },
  methods: {
    selectMenu(menu: string) {
      this.select = menu;
    },
  },
});
</script>

<style scoped>
.nav-pills .nav-link {
  color: #f8f9fa;
  background-color: #212529;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #212529;
  background-color: #f8f9fa;
}
</style>
