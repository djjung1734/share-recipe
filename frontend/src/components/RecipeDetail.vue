<template>
  <div class="h-100">
    <TopNav />
    <div class="h-100 bg-light">
      <div class="container p-4 px-lg-5 d-flex flex-column">
        <div class="card border-0 p-3">
          <div class="image p-3 d-flex justify-content-center">
            <img
              class="border-0"
              width="auto"
              height="100%"
              src="../assets/bebe.jpg"
            />
          </div>
          <div class="d-flex align-items-center justify-content-end pe-3">
            <img
              class="border-0 rounded-circle me-3"
              width="80"
              height="80"
              src="../assets/bebe.jpg"
            />
            <span class="fs-5">Nickname</span>
          </div>
          <div class="p-3">
            <h3>레시피 제목</h3>
            <h5 class="text-muted">레시피 소개</h5>
            <div class="d-flex justify-content-evenly p-5 border-bottom">
              <div class="d-flex">
                <span class="fw-bold pe-3"> 소요시간 </span>
                <span>30분 이내</span>
              </div>
              <div class="d-flex pb-3">
                <span class="fw-bold pe-3">난이도</span>
                <span class="material-icons text-muted"> star_rate </span>
                <span class="material-symbols-outlined text-muted">
                  star_half
                </span>
                <span class="material-symbols-outlined text-muted"> star </span>
              </div>
            </div>
            <div class="p-3 border-bottom">
              <h5>[재료]</h5>
              <h6 class="text-muted">재료 나열 ...</h6>
            </div>
            <div class="p-3">
              <h5>[조리법]</h5>
              <div class="p-3 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <span class="fw-bold">Step 1. </span>
                  <span>첫 순서 설명</span>
                </div>
                <img
                  class="border-0 me-3"
                  width="80"
                  height="80"
                  src="../assets/bebe.jpg"
                />
              </div>
              <div class="p-3 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <span class="fw-bold">Step 2. </span>
                  <span>두 번째 순서 설명</span>
                </div>
                <img
                  class="border-0 me-3"
                  width="80"
                  height="80"
                  src="../assets/bebe.jpg"
                />
              </div>
              <div class="p-3 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <span class="fw-bold">Step 3. </span>
                  <span>세 번째 순서 설명</span>
                </div>
                <img
                  class="border-0 me-3"
                  width="80"
                  height="80"
                  src="../assets/bebe.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";

export default Vue.extend({
  name: "RecipeDetail",
  components: {
    TopNav,
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 400px;
}
</style>
