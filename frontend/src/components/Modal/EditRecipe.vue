<template>
  <div>
    <div class="p-2">
      <div>
        <h5 class="font-weight-normal text-center">레시피 등록</h5>
      </div>
      <div class="row g-3">
        <div class="col-md-9 py-3">
          <div class="ps-3 pb-1">
            <label for="title" class="form-label">제목</label>
            <input type="text" class="form-control" id="title" />
          </div>
          <div class="ps-3 pt-1">
            <label for="introduce" class="form-label">요리소개</label>
            <textarea class="form-control" id="introduce" />
          </div>
        </div>
        <div class="col-md-3 p-3 d-flex align-items-center">
          <img
            class="border-0"
            width="150"
            height="100%"
            src="../../assets/bebe.jpg"
          />
        </div>
        <div class="d-flex align-items-center pb-3">
          <span class="col-md-2 ps-3">요리정보</span>
          <div class="col-md-4 px-1">
            <label for="time" class="form-label">시간</label>
            <select id="time" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-4 px-1">
            <label for="level" class="form-label">난이도</label>
            <select id="level" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="px-3 m-0"><hr /></div>
        <div class="d-flex align-items-center col-12 m-0 pb-3">
          <span class="ps-3">재료</span>
          <span
            class="material-symbols-outlined px-1"
            @click="addIngredientInput"
            type="button"
          >
            add_circle
          </span>
        </div>
        <div
          v-for="(ingredient, index) in ingredients"
          :key="index"
          class="d-flex align-items-center col-12 m-0 px-3 py-1"
        >
          <div class="col-md-3 px-1">
            <input
              type="text"
              class="form-control"
              placeholder="재료명"
              id="ingredient"
              v-model="ingredient.name"
            />
          </div>
          <div class="col-md-3 px-1">
            <input
              type="number"
              placeholder="용량"
              class="form-control"
              id="quantity"
              v-model="ingredient.quantity"
            />
          </div>
          <div class="col-md-2 px-1">
            <input
              type="text"
              class="form-control"
              placeholder="단위"
              id="unit"
              v-model="ingredient.unit"
            />
          </div>
          <span
            class="material-symbols-outlined"
            @click="removeIngredientInput(index)"
            type="button"
          >
            do_not_disturb_on
          </span>
        </div>
        <div class="d-flex align-items-center col-12 m-0 pt-3">
          <span class="ps-3">요리순서</span>
          <span
            type="button"
            class="material-symbols-outlined px-1"
            @click="addStepInput"
          >
            add_circle
          </span>
        </div>
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="d-flex align-items-center m-0 pb-3"
        >
          <div class="col-md-9 p-3">
            <textarea class="form-control" id="step1" v-model="step.content" />
          </div>
          <div class="col-md-2 p-3">
            <img
              class="border-0"
              width="80"
              height="80"
              src="../../assets/bebe.jpg"
            />
          </div>
          <span
            class="material-symbols-outlined"
            @click="removeStepInput(index)"
            type="button"
          >
            do_not_disturb_on
          </span>
        </div>
        <div class="col-12 p-3">
          <div class="float-end">
            <button type="reset" class="btn btn-outline-secondary me-1">
              취소
            </button>
            <button type="button" class="btn btn-outline-success">등록</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EditRecipe",
  data: function () {
    return {
      ingredients: [{ name: "", quantity: 0, unit: "", recipeId: "" }],
      steps: [{ content: "", recipeId: "" }],
    };
  },
  methods: {
    addIngredientInput() {
      this.ingredients.push({ name: "", quantity: 0, unit: "", recipeId: "" });
    },
    removeIngredientInput(index: number) {
      if (this.ingredients.length === 1) {
        alert("더 이상 제거 할 수 없습니다.");
      } else {
        this.ingredients.splice(index, 1);
      }
    },
    addStepInput() {
      this.steps.push({ content: "", recipeId: "" });
    },
    removeStepInput(index: number) {
      if (this.steps.length === 1) {
        alert("더 이상 제거 할 수 없습니다.");
      } else {
        this.steps.splice(index, 1);
      }
    },
  },
});
</script>
