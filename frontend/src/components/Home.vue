<template>
  <div>
    <TopNav />
    <section>
      <div class="container px-4 px-lg-5 mt-5">
        <div class="d-flex justify-content-center">
          <div class="d-flex align-items-center w-75">
            <input
              v-model="search"
              class="border-0 border-bottom form-control mr-sm-2 py-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="button" class="btn border-0" @click="searchRecipe()">
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>

        <div
          v-if="recipes.length !== 0"
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
        <div
          v-else
          class="py-3 d-flex flex-column align-items-center justify-content-center"
        >
          <span>레시피가 없습니다.</span>
        </div>
      </div>
    </section>
    <div class="d-flex justify-content-center align-items-center">
      <button
        v-if="pageNum > 1"
        type="button"
        class="btn"
        @click="previousPage()"
      >
        <span class="material-symbols-outlined"> chevron_left </span>
      </button>
      <button v-else type="button" class="btn invisible">
        <span class="material-symbols-outlined"> chevron_left </span>
      </button>
      <span class="pb-1">
        {{ pageNum }} / {{ lastPage === 0 ? 1 : lastPage }}
      </span>
      <button
        v-if="pageNum < lastPage"
        type="button"
        class="btn"
        @click="nextPage()"
      >
        <span class="material-symbols-outlined"> chevron_right </span>
      </button>
      <button v-else type="button" class="btn invisible">
        <span class="material-symbols-outlined"> chevron_right </span>
      </button>
    </div>
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
      search: null,
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
    searchRecipe() {
      this.pageNum = 1;
      window.axios
        .get('/recipe', {
          params: { pageNum: this.pageNum, keyword: this.search },
        })
        .then((response) => {
          this.recipes = response.data.data;
          this.lastPage = response.data.lastPage;
        })
        .catch(() => null);
    },
  },
});
</script>
