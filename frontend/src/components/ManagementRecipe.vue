<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">레시피</span>
    <div class="card border-0 h-100 p-3">
      <div>
        <button
          type="button"
          class="btn btn-outline-secondary float-end p-1 pb-0"
          @click="btnPopup"
        >
          <span class="material-symbols-outlined"> add </span>
          <span class="material-symbols-outlined"> ramen_dining </span>
        </button>
      </div>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 p-3">
        <div class="col mb-5">
          <div class="card h-100">
            <img
              class="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Special Item</h5>
                <div
                  class="d-flex justify-content-center small text-warning mb-2"
                >
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <span class="text-muted text-decoration-line-through"
                  >$20.00</span
                >
                $18.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
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

export default Vue.extend({
  name: "ManagementRecipe",
  methods: {
    btnPopup() {
      window.open("/editRecipe", "_blank", "width=800,height=800");
    },
  },
});
</script>

<style scoped>
.container {
  max-width: none;
}
</style>
