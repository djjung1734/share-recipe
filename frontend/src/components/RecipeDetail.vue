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
              <h5 class="fw-bold">
                [재료]
              </h5>
              <h6 v-for="ingredient in recipe.ingredients" class="text-muted">
                {{ ingredient.name }} {{ ingredient.quantity }}{{ ingredient.unit }}
              </h6>
            </div>
            <div class="p-3">
              <h5 class="fw-bold">
                [조리법]
              </h5>
              <div v-for="(step, i) in recipe.steps" class="p-3 d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <span class="fw-bold fs-5">Step {{ i + 1 }}. </span>
                  <span class="fs-5">{{ step.content }}</span>
                </div>
                <img
                  class="border-0 me-3"
                  width="120"
                  height="120"
                  :src="step.imagePath"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-0 pb-4 px-4 px-lg-5 d-flex flex-column">
        <div class="card border-0 p-3">
          <h5>요리 후기</h5>
          <div v-for="rev in reviews" class="p-3 d-flex justify-content-between  border-bottom">
            <div class="d-flex">
              <div class="d-flex flex-column">
                <div class="d-flex">
                  <span class="fw-bold">{{ rev.user.nickname }}</span>
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
          <div class="d-flex flex-column">
            <div class="d-flex p-3">
              <select id="level" v-model="review.score" class="fa border-0 border-bottom pb-1">
                <option value="1" class="fa">
                  &#xf005;
                </option>
                <option value="2" class="fa">
                  &#xf005; &#xf005;
                </option>
                <option value="3" class="fa">
                  &#xf005; &#xf005; &#xf005;
                </option>
                <option value="4" class="fa">
                  &#xf005; &#xf005; &#xf005; &#xf005;
                </option>
                <option value="5" class="fa">
                  &#xf005; &#xf005; &#xf005; &#xf005; &#xf005;
                </option>
              </select>
              <div>
                <label for="reviewImage">
                  <span class="ps-3 mt-1 material-symbols-outlined">
                    add_photo_alternate
                  </span>
                </label>
                <input id="reviewImage" class="upload" type="file" name="reviewImage" />
              </div>
            </div>
            <div class="d-flex">
              <textarea id="review" v-model="review.content" placeholder="후기를 작성해주세요" rows="1" class="w-100 border-0 border-bottom ms-4 me-2" />
              <button
                type="button"
                class="btn mt-3 me-4"
                @click="saveReview"
              >
                <span class="material-symbols-outlined">
                  edit
                </span>
              </button>
            </div>
          </div>
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
      review: {
        score: 1,
        content: '',
        image: '',
        imagePath: '',
        userId: '',
        recipeId: '',
      },
      reviews: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
  mounted() {
    this.loadRecipe();
  },
  methods: {
    loadRecipe() {
      window.axios.get(`/recipe/${this.$route.params.id}`).then((response) => {
        this.recipe = response.data;
        window.axios.get(`/review/${this.recipe.id}`).then((res) => {
          this.reviews = res.data;
        }).catch(() => null);
        this.review.recipeId = this.recipe.id;
        this.review.userId = this.user.id;
      }).catch(() => null);
    },
    uploadImage(elementId) {
      return new Promise<void>((resolve, reject) => {
        const form = new FormData();
        const file = <HTMLInputElement>document.getElementById(elementId);
        if (file.files[0]) {
          form.append('upload', file.files[0]);
          window.axios
            .post('upload', form, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((response) => {
              resolve(response.data);
            })
            .catch(() => {
              reject();
            });
        } else {
          resolve(null);
        }
      });
    },
    async saveReview() {
      await this.uploadImage('reviewImage').then((fileInfo:any) => {
        if (fileInfo) {
          const { url, originalname } = fileInfo;
          this.review.image = originalname;
          this.review.imagePath = url;
        }
        window.axios
          .post('/review', this.review)
          .then((response) => {
            this.review = response.data;
            window.axios.get(`/review/${this.recipe.id}`).then((res) => {
              this.reviews = res.data;
            }).catch(() => null);
          }).catch(() => null);
      });
    },
    deleteReview(review) {
      if (review.id && window.confirm('리뷰를 삭제하시겠습니까?')) {
        window.axios.delete(`/review/${review.id}`).then(() => {
          window.axios.get(`/review/${this.recipe.id}`).then((res) => {
            this.reviews = res.data;
          }).catch(() => null);
          alert('삭제되었습니다.');
        }).catch(() => null);
      }
    },
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 400px;
}

#review{
  resize: none;
}

#review:focus{
  outline:none;
}

#reviewImage {
  display: none;
}
</style>
