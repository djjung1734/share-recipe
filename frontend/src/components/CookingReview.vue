<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">요리 후기</span>
    <div class="card border-0 h-100">
      <div v-for="rev in reviews" class="p-3 d-flex justify-content-between  border-bottom">
        <div class="p-3 d-flex">
          <div class="d-flex flex-column">
            <span class="fw-bold text-muted">{{ rev.recipe.title }}</span>

            <div class="d-flex">
              <span class="fw-bold">{{ user.nickname }}</span>
              <div class="d-flex ps-3">
                <div v-for="i in Number(rev.score)" :key="i" class="bi-star-fill" />
              </div>
            </div>
            <span>{{ rev.content }}</span>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <img
            class="border-0 me-3"
            width="80"
            height="80"
            :src="rev.imagePath"
            alt="..."
          />

          <button
            v-if="user.id === rev.userId"
            type="button"
            class="btn p-0"
            @click="deleteReview(rev)"
          >
            <span class="material-symbols-outlined text-muted">
              delete
            </span>
          </button>
          <span v-else class="ps-3 pe-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data():any {
    return {
      reviews: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
  mounted() {
    this.loadReviews();
  },
  methods: {
    loadReviews() {
      window.axios.get(`/review/user/${this.user.id}`).then((res) => {
        this.reviews = res.data;
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
