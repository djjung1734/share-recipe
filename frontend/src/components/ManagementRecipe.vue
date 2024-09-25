<template>
  <div class="h-100">
    <TopNav />
    <SideNav />
    <div class="content">
      <div class="p-3 float-end">
        <button type="button" class="btn btn-outline-success" @click="btnPopup">
          레시피 등록
        </button>
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

<style lang="css" scoped>
.content {
  padding-left: 280px;
  height: calc(100vh - 56px);
}
</style>
