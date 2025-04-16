<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">요리 후기</span>
    <div class="card border-0 h-100">
      <div v-for="rev in reviews" class="p-3">
        <span class="ps-2 fs-5 text-muted">{{ rev.recipe.title }} > </span>

        <div class="d-flex justify-content-between border-bottom">
          <div class="p-3 d-flex">
            <div class="d-flex flex-column">
              <div class="d-flex">
                <span class="fw-bold">{{ user.nickname }}</span>
                <div class="d-flex ps-3">
                  <div v-for="i in Number(rev.score)" :key="i" class="bi-star-fill" />
                </div>
              </div>
              <span>{{ rev.content }}</span>
            </div>
          </div>
          <div class="d-flex align-items-center p-3">
            <img
              class="border-0 me-3"
              width="80"
              height="80"
              :src="rev.imagePath"
              alt="..."
            />
            <div
              v-if="user"
              class="dropdown"
            >
              <button
                type="button" class="btn p-0"
                data-bs-toggle="dropdown"
              >
                <span class="material-symbols-outlined text-muted">
                  more_vert
                </span>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editReviewModal"
                  class="dropdown-item d-flex align-items-center"
                  @click="editReview(rev)"
                >
                  <span class="material-symbols-outlined text-muted pe-1">
                    edit
                  </span>
                  <span>수정하기</span>
                </button>
                <button
                  type="button"
                  class="dropdown-item d-flex align-items-center"
                  @click="deleteReview(rev)"
                >
                  <span class="material-symbols-outlined text-muted pe-1">
                    delete
                  </span>
                  <span>삭제하기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditReview />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EditReview from './Modal/EditReview.vue';

export default Vue.extend({
  components: {
    EditReview,
  },
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
    editReview(review) {
      this.$store.commit('editReview', review);
    },
    deleteReview(review) {
      if (review.id && window.confirm('삭제하시겠습니까?')) {
        window.axios.delete(`/review/${review.id}`).then(() => {
          this.loadReviews();
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
</style>
