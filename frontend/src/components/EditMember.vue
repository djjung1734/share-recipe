<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">회원정보수정</span>
    <div class="card border-0 h-100 justify-content-center align-items-center">
      <div class="w-50">
        <div class="input-box">
          <label for="username">ID</label>
          <input id="username" type="text" name="username" />
        </div>
        <div class="input-box">
          <label for="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <div class="input-box">
          <label for="nickname">Nickname</label>
          <input id="nickname" type="text" name="nickname" />
        </div>
        <div class="float-end">
          <button class="btn btn-outline-success" type="submit">
            회원정보 수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "EditMember",
});
</script>

<style scoped>
.input-box {
  margin: 10px 0;
  display: flex;
  align-items: end;
}
.input-box > input {
  background: transparent;
  border: none;
  border-bottom: solid 1px #ccc;
  padding: 20px 0px 5px 0px;
  font-size: 14pt;
  width: 100%;
}
input:focus + label,
label {
  color: #8aa1a1;
  pointer-events: none;
  min-width: 80px;
  margin-right: 5px;
}
input:focus,
input:not(:placeholder-shown) {
  border-bottom: solid 1px #8aa1a1;
  outline: none;
}
.container {
  max-width: none;
}
</style>
