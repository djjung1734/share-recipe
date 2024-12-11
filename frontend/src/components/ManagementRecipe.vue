<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">레시피</span>
    <div class="card border-0 h-100 p-3">
      <div>
        <button
          type="button"
          class="btn btn-outline-secondary float-end p-1 pb-0"
          data-bs-toggle="modal"
          data-bs-target="#editRecipeModal"
        >
          <span class="material-symbols-outlined"> add </span>
          <span class="material-symbols-outlined"> ramen_dining </span>
        </button>
      </div>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 p-3">
        <div v-for="recipe in recipes" class="col mb-5">
          <router-link class="text-decoration-none" :to="`/detail/${recipe.id}`">
            <div class="card h-100">
              <img
                class="card-img-top"
                :src="recipe.imagePath"
                alt="..."
                width="200px"
                height="133px"
              />
              <div class="card-body p-4">
                <div class="text-center">
                  <h5 class="fw-bolder">
                    {{ recipe.title }}
                  </h5>
                  <div
                    class="d-flex justify-content-center small text-warning mb-2"
                  >
                    <div v-for="i in Number(recipe.level)" :key="i" class="bi-star-fill" />
                  </div>
                  <span class="text-muted">
                    {{ recipe.time }}분 소요
                  </span>
                </div>
              </div>
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <EditRecipe />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EditRecipe from './Modal/EditRecipe.vue';

export default Vue.extend({
  components: {
    EditRecipe,
  },
  data():any {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.loadRecipe();
  },
  methods: {
    btnPopup() {
      window.open('/editRecipe', '_blank', 'width=800,height=800');
    },
    loadRecipe() {
      window.axios.get('/recipe').then((response) => {
        this.recipes = response.data;
      }).catch(() => null);
    },
  },
});
</script>

<style scoped>
.container {
  max-width: none;
}
</style>
