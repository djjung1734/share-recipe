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
          @click="editRecipe(null)"
        >
          <span class="material-symbols-outlined"> add </span>
          <span class="material-symbols-outlined"> ramen_dining </span>
        </button>
      </div>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 p-3">
        <div v-for="recipe in recipes" class="col mb-5">
          <div class="card h-100">
            <img
              class="card-img-top"
              :src="recipe.imagePath"
              alt="..."
              width="200px"
              height="133px"
            />
            <div class="recipe card-body p-4 position-relative">
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
              <div class="manage position-absolute top-50 start-50 translate-middle">
                <router-link class="text-decoration-none" :to="`/detail/${recipe.id}`">
                  <button
                    type="button"
                    class="button btn border-0 rounded-circle m-1"
                  >
                    <span class="material-symbols-outlined p-0 fs-5">
                      search
                    </span>
                  </button>
                </router-link>
                <button
                  type="button"
                  class="button btn border-0 rounded-circle m-1"
                  data-bs-toggle="modal"
                  data-bs-target="#editRecipeModal"
                  @click="editRecipe(recipe)"
                >
                  <span class="material-symbols-outlined p-0 fs-5">
                    edit
                  </span>
                </button>
                <button
                  type="button"
                  class="button btn border-0 rounded-circle m-1"
                  @click="deleteRecipe(recipe)"
                >
                  <span class="material-symbols-outlined p-0 fs-5">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
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
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      window.axios.get(`/recipe/user/${this.$route.params.id}`).then((response) => {
        this.recipes = response.data;
      }).catch(() => null);
    },
    editRecipe(recipe) {
      this.$store.commit('editRecipe', recipe);
    },
    deleteRecipe(recipe) {
      if (recipe.id && window.confirm('삭제하시겠습니까?')) {
        window.axios.delete(`/recipe/${recipe.id}`).then(() => {
          this.loadRecipes();
          alert('삭제되었습니다.');
        }).catch(() => null);
      }
    },
  },
});
</script>

<style scoped>
.container {
  max-width: none;
}

.manage{
  display: none;
}

.button{
  padding: 0.25rem 0.25rem 0 0.25rem;
  background-color: #fff;
}

.button span{
  color: #212529;
}

.button:hover{
  background-color: #212529;
}

.button:hover span{
  color: #fff;
}

.recipe:hover{
  background-color: rgba(33, 37, 41, 0.5);
}

.recipe:hover .manage{
  display: flex;
}
</style>
