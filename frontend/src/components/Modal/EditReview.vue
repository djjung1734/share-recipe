<template>
  <div id="editReviewModal" class="modal fade modal-md" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0 p-2">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body">
          <div>
            <div class="p-2">
              <div>
                <h5 class="font-weight-normal text-center">
                  리뷰 수정
                </h5>
              </div>
              <div class="p-3 d-flex justify-content-center">
                <div class="d-flex">
                  <div v-if="review" class="d-flex flex-column">
                    <div class="image p-3 d-flex justify-content-center">
                      <label for="reviewImage">
                        <img
                          class="border-0"
                          width="auto"
                          height="100%"
                          :src="review.imagePath"
                          alt="..."
                        />
                      </label>
                      <input id="reviewImage" class="upload" type="file" name="reviewImage" />
                    </div>
                    <div class="d-flex flex-column py-3">
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
                      </div>
                      <div class="d-flex">
                        <textarea id="review" v-model="review.content" placeholder="후기를 작성해주세요" rows="1" class="w-100 border-0 border-bottom ms-4 me-2" />
                        <button
                          data-bs-dismiss="modal"
                          aria-label="Close"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): any {
    return {
    };
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
    review() {
      return this.$store.state.selectedReview;
    },
  },
  methods: {
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
        const { recipe, ...pureReview } = this.review;
        window.axios
          .post('/review', pureReview)
          .then((response) => {
            this.review = response.data;
          }).catch(() => null);
      });
    },
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 400px;
}
#reviewImage{
  display:none;
}
</style>
