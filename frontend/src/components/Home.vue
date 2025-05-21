<template>
  <div>
    <TopNav />
    <section>
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 p-3"
        >
          <div v-for="recipe in recipes" class="col mb-5">
            <router-link
              :to="`/detail/${recipe.id}`"
              class="text-decoration-none"
            >
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
                      <div
                        v-for="i in Number(recipe.level)"
                        :key="i"
                        class="bi-star-fill"
                      />
                    </div>
                    <span class="text-muted"> {{ recipe.time }}분 소요 </span>
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button
            v-if="pageNum > 1"
            type="button"
            class="btn"
            @click="previousPage()"
          >
            <span class="material-symbols-outlined"> chevron_left </span>
          </button>
          <span class="pb-1">{{ pageNum }} / {{ lastPage }}</span>
          <button
            v-if="pageNum < lastPage"
            type="button"
            class="btn"
            @click="nextPage()"
          >
            <span class="material-symbols-outlined"> chevron_right </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNav from './Navigation/TopNav.vue';

export default Vue.extend({
  components: {
    TopNav,
  },
  data(): any {
    return {
      recipes: [],
      pageNum: 1,
      lastPage: null,
    };
  },
  mounted() {
    this.loadRecipe();
  },
  methods: {
    loadRecipe() {
      window.axios
        .get('/recipe', { params: { pageNum: this.pageNum } })
        .then((response) => {
          this.recipes = response.data.data;
          this.lastPage = response.data.lastPage;
        })
        .catch(() => null);
    },
    nextPage() {
      this.pageNum++;
      this.loadRecipe();
    },
    previousPage() {
      this.pageNum--;
      this.loadRecipe();
    },
  },
});
</script>
