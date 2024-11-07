<template>
  <div>
    <div class="p-2">
      <div>
        <h5 class="font-weight-normal text-center">
          레시피 등록
        </h5>
      </div>
      <div class="row g-3">
        <div class="col-md-9 py-3">
          <div class="ps-3 pb-1">
            <label for="title" class="form-label">제목</label>
            <input id="title" type="text" class="form-control" />
          </div>
          <div class="ps-3 pt-1">
            <label for="introduce" class="form-label">요리소개</label>
            <textarea id="introduce" class="form-control" />
          </div>
        </div>
        <div class="col-md-3 p-3 d-flex align-items-center">
          <div class="image mt-4">
            <label for="mainImage">
              <!-- <img
                class="border-0"
                width="150px"
                height="100%"
                src="https://img.icons8.com/sf-regular-filled/96/no-camera.png"
                alt="..."
              /> -->
              <div class="mainImage d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined fs-1 text-muted">
                  add_photo_alternate
                </span>
              </div>
            </label>
            <input id="mainImage" class="upload" type="file" name="mainImage" />
          </div>
        </div>
        <div class="d-flex align-items-center pb-3">
          <span class="col-md-2 ps-3">요리정보</span>
          <div class="col-md-4 px-1">
            <label for="time" class="form-label">시간</label>
            <select id="time" class="form-select">
              <option selected>
                시간
              </option>
              <option>5분 이내</option>
              <option>10분 이내</option>
              <option>15분 이내</option>
              <option>20분 이내</option>
              <option>30분 이내</option>
              <option>1시간 이내</option>
              <option>1시간 30분 이내</option>
              <option>2시간 이내</option>
              <option>2시간 이상</option>
            </select>
          </div>
          <div class="col-md-4 px-1">
            <label for="level" class="form-label">난이도</label>
            <select id="level" class="form-select">
              <option selected>
                난이도
              </option>
              <option class="fa">
                &#xf005;
              </option>
              <option class="fa">
                &#xf005; &#xf005;
              </option>
              <option class="fa">
                &#xf005; &#xf005; &#xf005;
              </option>
              <option class="fa">
                &#xf005; &#xf005; &#xf005; &#xf005;
              </option>
              <option class="fa">
                &#xf005; &#xf005; &#xf005; &#xf005; &#xf005;
              </option>
            </select>
          </div>
        </div>
        <div class="px-3 m-0">
          <hr />
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
          :key="index"
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
            <span class="material-symbols-outlined"> do_not_disturb_on </span>
          </button>
        </div>
        <div class="d-flex align-items-center col-12 m-0 pt-3">
          <span class="ps-3">요리순서</span>
          <button type="button" class="btn px-1 mt-1" @click="addStepInput">
            <span class="material-symbols-outlined"> add_circle </span>
          </button>
        </div>
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="d-flex align-items-center m-0 pb-3"
        >
          <div class="col-md-9 p-3">
            <textarea id="step1" v-model="step.content" class="form-control" />
          </div>
          <div class="col-md-2 p-3">
            <label :for="`detailImage${index}`">
              <!-- <img
                class="border-0"
                width="150px"
                height="100%"
                src="https://img.icons8.com/sf-regular-filled/96/no-camera.png"
                alt="..."
              /> -->
              <div class="detailImage d-flex align-items-center justify-content-center">
                <span class="material-symbols-outlined fs-3 text-muted">
                  add_photo_alternate
                </span>
              </div>
            </label>
            <input id="detailImage" class="upload" type="file" :name="`detailImage${index}`" />
          </div>
          <button
            class="btn px-1 mt-1"
            type="button"
            @click="removeStepInput(index)"
          >
            <span class="material-symbols-outlined"> do_not_disturb_on </span>
          </button>
        </div>
        <div class="col-12 p-3">
          <div class="float-end">
            <button type="button" class="btn btn-outline-secondary me-1">
              취소
            </button>
            <button type="button" class="btn btn-outline-success">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'EditRecipe',
  data(): any {
    return {
      recipe: {
        title: '',
        description: '',
        time: '',
        level: 1,
        image: '',
        imagePath: '',
        userId: '',
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
  },
});
</script>

<style scoped>
.form-select{
  font-family: "Font Awesome 5 Free";
font-weight:900;
}
.image{
  width:160px;
  height:120px;
}
.mainImage{
  width:160px;
  height:120px;
  border:1px solid;
}
.detailImage{
  width:80px;
  height:60px;
  border:1px solid;
}
#mainImage,#detailImage {
  display: none;
}

</style>
