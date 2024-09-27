<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <div class="container">
        <div class="float-end">
          <button
            type="button"
            class="btn btn-outline-success"
            @click="btnPopup"
          >
            레시피 등록
          </button>
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
  name: "ManagementRecipe",
  components: {
    TopNav,
    SideNav,
  },
  methods: {
    btnPopup() {
      window.open("/editRecipe", "_blank", "width=800,height=800");
    },
  },
});
</script>
