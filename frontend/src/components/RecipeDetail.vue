<template>
  <div class="h-100">
    <TopNav />
    <div class="bg-light overflow-auto">
      <div class="container p-4 px-lg-5 d-flex flex-column">
        <div v-if="recipe" class="card border-0 p-3">
          <div class="image p-3 d-flex justify-content-center">
            <img
              class="border-0"
              width="auto"
              height="100%"
              :src="recipe.imagePath"
              alt="..."
            />
          </div>
          <div class="d-flex align-items-center justify-content-end pe-3">
            <img
              class="border-0 rounded-circle me-3"
              width="80"
              height="80"
              :src="recipe.user.imagePath"
              alt="..."
            />
            <span class="fs-5">{{ recipe.user.nickname }}</span>
          </div>
          <div class="p-3">
            <h3>{{ recipe.title }}</h3>
            <h5 class="text-muted">
              {{ recipe.description }}
            </h5>
            <div class="d-flex justify-content-evenly p-5 border-bottom">
              <div class="d-flex">
                <span class="fw-bold pe-3"> 소요시간 </span>
                <span>{{ recipe.time }}분 이내</span>
              </div>
              <div class="d-flex pb-3">
                <span class="fw-bold pe-3">난이도</span>
                <span v-for="i in Number(recipe.level)" :key="i" class="material-icons text-muted"> star_rate </span>
              </div>
            </div>
            <div class="p-3 border-bottom">
              <h5>[재료]</h5>
              <h6 v-for="ingredient in recipe.ingredients" class="text-muted">
                {{ ingredient.name }} {{ ingredient.quantity }}{{ ingredient.unit }}
              </h6>
            </div>
            <div class="p-3">
              <h5>[조리법]</h5>
              <div v-for="(step, i) in recipe.steps" class="p-3 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <span class="fw-bold">Step {{ i }}. </span>
                  <span>{{ step.content }}</span>
                </div>
                <img
                  class="border-0 me-3"
                  width="80"
                  height="80"
                  :src="step.imagePath"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0 p-3">
          asd
        </div>
      </div>
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
  data():any {
    return {
      recipe: null,
    };
  },
  mounted() {
    this.loadRecipe();
  },
  methods: {
    loadRecipe() {
      window.axios.get(`/recipe/${this.$route.params.id}`).then((response) => {
        this.recipe = response.data;
      }).catch(() => null);
    },
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 400px;
}
</style>
