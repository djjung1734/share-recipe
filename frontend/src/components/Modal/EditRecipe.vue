<template>
  <div id="editRecipeModal" class="modal fade modal-xl" tabindex="-1">
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
                <h5 class="font-weight-normal text-center">레시피 등록</h5>
              </div>
              <div class="row g-3">
                <div class="col-md-9 py-3">
                  <div class="ps-3 pb-1">
                    <label for="title" class="form-label">제목</label>
                    <input
                      id="title"
                      v-model="recipe.title"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="ps-3 pt-1">
                    <label for="introduce" class="form-label">요리소개</label>
                    <textarea
                      id="introduce"
                      v-model="recipe.description"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-3 p-3 d-flex align-items-center">
                  <div class="image mt-4">
                    <label for="mainImage">
                      <img
                        v-if="recipe.image"
                        class="border-0 object-cover-fit"
                        width="160px"
                        height="120px"
                        :src="recipe.imagePath"
                        alt="..."
                      />
                      <div
                        v-else
                        class="mainImage d-flex align-items-center justify-content-center"
                      >
                        <span class="material-symbols-outlined fs-1 text-muted">
                          add_photo_alternate
                        </span>
                      </div>
                    </label>
                    <input
                      id="mainImage"
                      class="upload"
                      type="file"
                      name="mainImage"
                      @change="previewImage('main')"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center pb-3">
                  <span class="col-md-2 ps-3">요리정보</span>
                  <div class="col-md-4 px-1">
                    <label for="time" class="form-label">시간</label>
                    <select id="time" v-model="recipe.time" class="form-select">
                      <option selected value="">시간</option>
                      <option value="5">5분 이내</option>
                      <option value="10">10분 이내</option>
                      <option value="15">15분 이내</option>
                      <option value="20">20분 이내</option>
                      <option value="30">30분 이내</option>
                      <option value="60">1시간 이내</option>
                      <option value="90">1시간 30분 이내</option>
                      <option value="120">2시간 이내</option>
                      <option value="121">2시간 이상</option>
                    </select>
                  </div>
                  <div class="col-md-4 px-1">
                    <label for="level" class="form-label">난이도</label>
                    <select
                      id="level"
                      v-model="recipe.level"
                      class="form-select"
                    >
                      <option selected value="">난이도</option>
                      <option value="1" class="fa">&#xf005;</option>
                      <option value="2" class="fa">&#xf005; &#xf005;</option>
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
                </div>
                <div class="d-flex align-items-center col-12 m-0 pb-3">
                  <span class="ps-3">재료</span>
                  <button
                    class="btn px-1 mt-1"
                    type="button"
                    @click="addIngredientInput"
                  >
                    <span class="material-symbols-outlined"> add_circle </span>
                  </button>
                </div>
                <div
                  v-for="(ingredient, index) in ingredients"
                  :key="`ingredient${index}`"
                  class="d-flex align-items-center col-12 m-0 px-3 py-1"
                >
                  <div class="col-md-3 px-1">
                    <input
                      id="ingredient"
                      v-model="ingredient.name"
                      type="text"
                      class="form-control"
                      placeholder="재료명"
                    />
                  </div>
                  <div class="col-md-3 px-1">
                    <input
                      id="quantity"
                      v-model="ingredient.quantity"
                      type="number"
                      placeholder="용량"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-2 px-1">
                    <input
                      id="unit"
                      v-model="ingredient.unit"
                      type="text"
                      class="form-control"
                      placeholder="단위"
                    />
                  </div>
                  <button
                    class="btn px-1 mt-1"
                    type="button"
                    @click="removeIngredientInput(index)"
                  >
                    <span class="material-symbols-outlined">
                      do_not_disturb_on
                    </span>
                  </button>
                </div>
                <div class="d-flex align-items-center col-12 m-0 pt-3">
                  <span class="ps-3">요리과정</span>
                  <button
                    type="button"
                    class="btn px-1 mt-1"
                    @click="addStepInput"
                  >
                    <span class="material-symbols-outlined"> add_circle </span>
                  </button>
                </div>
                <div
                  v-for="(step, index) in steps"
                  :key="`step${index}`"
                  class="d-flex align-items-center m-0 pb-3"
                >
                  <div class="col-md-9 p-3">
                    <textarea
                      id="step1"
                      v-model="step.content"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-2 p-3">
                    <label :for="`detailImage${index}`">
                      <img
                        v-if="step.image"
                        class="border-0 object-cover-fit"
                        width="120px"
                        height="90px"
                        :src="step.imagePath"
                        alt="..."
                      />
                      <div
                        v-else
                        class="detailImage d-flex align-items-center justify-content-center"
                      >
                        <span class="material-symbols-outlined fs-3 text-muted">
                          add_photo_alternate
                        </span>
                      </div>
                    </label>
                    <input
                      :id="`detailImage${index}`"
                      class="upload detailImage"
                      type="file"
                      :name="`detailImage${index}`"
                      @change="previewImage(index)"
                    />
                  </div>
                  <button
                    class="btn px-1 mt-1"
                    type="button"
                    @click="removeStepInput(index)"
                  >
                    <span class="material-symbols-outlined">
                      do_not_disturb_on
                    </span>
                  </button>
                </div>
                <div class="col-12 p-3">
                  <div class="float-end">
                    <button
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      type="button"
                      class="btn btn-outline-secondary me-1"
                    >
                      취소
                    </button>
                    <button
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      type="button"
                      class="btn btn-outline-success"
                      @click="saveRecipe()"
                    >
                      등록
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): any {
    return {
      recipe: {
        title: '',
        description: '',
        time: '',
        level: '',
        image: '',
        imagePath: '',
      },
      ingredients: [
        {
          name: '',
          quantity: 0,
          unit: '',
          recipeId: '',
        },
      ],
      steps: [
        {
          content: '',
          recipeId: '',
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
    oldRecipe() {
      return this.$store.state.selectedRecipe;
    },
  },
  watch: {
    oldRecipe() {
      if (this.oldRecipe) {
        this.ingredients = this.oldRecipe.ingredients;
        this.steps = this.oldRecipe.steps;
        delete this.oldRecipe.ingredients;
        delete this.oldRecipe.steps;
        delete this.oldRecipe.user;
        this.recipe = this.oldRecipe;
      } else {
        this.recipe = {
          title: '',
          description: '',
          time: '',
          level: '',
          image: '',
          imagePath: '',
        };
        this.ingredients = [
          {
            name: '',
            quantity: 0,
            unit: '',
            recipeId: '',
          },
        ];
        this.steps = [
          {
            content: '',
            recipeId: '',
          },
        ];
      }
    },
  },
  methods: {
    addIngredientInput() {
      this.ingredients.push({
        name: '',
        quantity: 0,
        unit: '',
        recipeId: '',
      });
    },
    removeIngredientInput(index: number) {
      if (this.ingredients.length === 1) {
        alert('더 이상 제거 할 수 없습니다.');
      } else {
        this.ingredients.splice(index, 1);
      }
    },
    addStepInput() {
      this.steps.push({
        content: '',
        recipeId: '',
      });
    },
    removeStepInput(index: number) {
      if (this.steps.length === 1) {
        alert('더 이상 제거 할 수 없습니다.');
      } else {
        this.steps.splice(index, 1);
      }
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
    previewImage(type) {
      if (type === 'main') {
        this.uploadImage('mainImage').then((fileInfo: any) => {
          if (fileInfo) {
            const { url, originalname } = fileInfo;
            this.recipe.image = originalname;
            this.recipe.imagePath = url;
          }
        });
      } else {
        this.uploadImage(`detailImage${type}`).then((detailFileInfo: any) => {
          if (detailFileInfo) {
            const { url, originalname } = detailFileInfo;
            const updatedStep = { ...this.steps[type] };
            updatedStep.image = originalname;
            updatedStep.imagePath = url;
            this.steps.splice(type, 1, updatedStep);
          }
        });
      }
    },
    async saveRecipe() {
      this.recipe.userId = this.user.id;
      await this.uploadImage('mainImage').then((fileInfo: any) => {
        if (fileInfo) {
          const { url, originalname } = fileInfo;
          this.recipe.image = originalname;
          this.recipe.imagePath = url;
        }
        window.axios
          .post('/recipe', this.recipe)
          .then((response) => {
            this.recipe = response.data;
            this.ingredients.forEach((ingredient) => {
              ingredient.recipeId = this.recipe.id;
            });
            window.axios
              .post('/ingredient', this.ingredients)
              .then((res) => {
                this.ingredients = res.data;
              })
              .catch(() => null);
            this.steps.forEach((step, index) => {
              step.recipeId = this.recipe.id;
              this.uploadImage(`detailImage${index}`).then(
                (detailFileInfo: any) => {
                  if (detailFileInfo) {
                    const { url, originalname } = detailFileInfo;
                    step.image = originalname;
                    step.imagePath = url;
                  }
                  window.axios
                    .post('/step', step)
                    .then((res) => {
                      step = res.data;
                    })
                    .catch(() => null);
                  // eslint-disable-next-line comma-dangle
                }
              );
            });
          })
          .catch(() => null);
      });
      this.$emit('refresh-parent');
    },
  },
});
</script>

<style scoped>
.form-select {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}
.image {
  width: 160px;
  height: 120px;
}
.mainImage {
  width: 160px;
  height: 120px;
  border: 1px solid;
}
.detailImage {
  width: 120px;
  height: 90px;
  border: 1px solid;
}
#mainImage,
.detailImage {
  display: none;
}
.modal-body {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
