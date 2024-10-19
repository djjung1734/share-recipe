<template>
  <div class="h-100">
    <TopNav />
    <div class="container d-flex flex-column m-0 bg-light p-3">
      <!-- <span class="navbar-brand fs-5 py-1">로그인</span> -->
      <div
        class="card border-0 h-100 justify-content-center align-items-center">
        <span class="fs-1 py-3">Log-In</span>
        <div class="d-flex w-50 justify-content-center align-items-center">
          <div class="w-50 p-3">
            <div class="input-box">
              <label for="email">ID</label>
              <input id="email" type="text" name="email" />
            </div>
            <div class="input-box">
              <label for="password">Password</label>
              <input id="password" type="password" name="password" />
            </div>
          </div>
          <div class="ps-3">
            <button
              class="btn btn-outline-secondary p-3 pb-2 mt-3"
              type="submit">
              <span class="material-symbols-outlined fs-1">
                arrow_right_alt
              </span>
            </button>
          </div>
        </div>
        <span
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
          type="submit"
          class="pt-3 text-muted">
          회원가입
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNav from './Navigation/TopNav.vue';

export default Vue.extend({
  name: 'LogIn',
  components: {
    TopNav,
  },
  data(): any {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth', {
          endpoint: 'login',
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          window.location.href = this.$route.query?.url
            ? this.$route.query?.url?.toString()
            : '/';
        })
        .catch(() => {
          alert('아이디 혹은 비밀번호를 확인해주세요.');
        });
    },
  },
});
</script>

<style scoped>
.container {
  height: calc(100vh - 50px);
  max-width: none;
}
.input-box {
  position: relative;
  margin: 10px 0;
  width: 100%;
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
