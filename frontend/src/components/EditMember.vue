<template>
  <div class="h-100">
    <TopNav />
    <div class="d-flex">
      <SideNav />
      <div class="container bg-light d-flex flex-column">
        <span class="navbar-brand fs-5 py-1">회원정보수정</span>
        <div
          class="card border-0 h-100 justify-content-center align-items-center"
        >
          <div class="">
            <div class="input-box">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="ID"
              />
              <label for="username">ID</label>
            </div>
            <div class="input-box">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>
            <div class="input-box">
              <input
                id="nickname"
                type="text"
                name="nickname"
                placeholder="Nickname"
              />
              <label for="nickname">Nickname</label>
            </div>
            <div class="float-end">
              <button class="btn btn-outline-success" type="submit">
                회원정보 수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "./Navigation/TopNav.vue";
import SideNav from "./Navigation/SideNav.vue";

export default Vue.extend({
  name: "EditMember",
  components: {
    TopNav,
    SideNav,
  },
});
</script>

<style scoped>
.input-box {
  position: relative;
  margin: 10px 0;
}
.input-box > input {
  background: transparent;
  border: none;
  border-bottom: solid 1px #ccc;
  padding: 20px 0px 5px 0px;
  font-size: 14pt;
  width: 100%;
}
input::placeholder {
  color: transparent;
}
input:placeholder-shown + label {
  color: #aaa;
  font-size: 14pt;
  top: 15px;
}
input:focus + label,
label {
  color: #8aa1a1;
  font-size: 10pt;
  pointer-events: none;
  position: absolute;
  left: 0px;
  top: 0px;
}
input:focus,
input:not(:placeholder-shown) {
  border-bottom: solid 1px #8aa1a1;
  outline: none;
}
</style>
