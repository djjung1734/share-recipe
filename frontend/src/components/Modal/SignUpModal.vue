<template>
  <div id="signupModal" class="modal fade" tabindex="-1" aria-hidden="true">
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
          <h6 class="font-weight-normal text-center">
            회원가입
          </h6>
          <div
            class="h-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="input-box">
              <input
                id="username"
                v-model="user.email"
                type="text"
                name="username"
                placeholder="ID"
              />
              <label for="username">ID</label>
            </div>
            <div class="input-box">
              <input
                id="password"
                v-model="user.password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>
            <div class="input-box">
              <input
                id="nickname"
                v-model="user.nickname"
                type="text"
                name="nickname"
                placeholder="Nickname"
              />
              <label for="nickname">Nickname</label>
            </div>
          </div>
        </div>
        <div class="modal-footer border-top-0">
          <button
            class="btn btn-outline-success w-100"
            type="submit"
            data-bs-dismiss="modal"
            @click="saveUser()"
          >
            Sign Up
          </button>
          <button
            class="btn btn-outline-secondary w-100"
            type="button"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
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
      user: {
        email: '',
        password: '',
        nickname: '',
      },
    };
  },
  methods: {
    saveUser() {
      window.axios
        .post('user', this.user)
        .then(() => {
          alert('회원가입이 완료되었습니다.');
        })
        .catch(() => null);
    },
  },
});
</script>

<style scoped>
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
