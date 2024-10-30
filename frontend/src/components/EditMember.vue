<template>
  <div class="container d-flex flex-column m-0 bg-light p-3">
    <span class="navbar-brand fs-5 py-1">회원정보수정</span>
    <div class="card border-0 h-100 justify-content-center align-items-center">
      <div class="w-50">
        <div class="input-box">
          <label for="username">ID</label>
          <input
            id="username"
            v-model="user.email"
            type="text"
            name="username" />
        </div>
        <div class="input-box">
          <label for="password">비밀번호</label>
          <input
            id="password"
            v-model="user.password"
            type="password"
            name="password" />
        </div>
        <div class="input-box">
          <label for="nickname">닉네임</label>
          <input
            id="nickname"
            v-model="user.nickname"
            type="text"
            name="nickname" />
        </div>
        <div class="input-box">
          <label for="image">이미지</label>
          <input id="uploadImage" class="upload" type="file" name="file" />
        </div>
        <div class="float-end">
          <button
            class="btn btn-outline-success"
            @click="saveUser"
            type="submit">
            회원정보 수정
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
  methods: {
    async saveUser() {
      await this.uploadImage().then((fileInfo: any) => {
        if (fileInfo) {
          const { url, originalname } = fileInfo;
          this.user.image = originalname;
          this.user.imagePath = url;
        }
        window.axios
          .post('/user', this.user)
          .then((response) => {
            localStorage.setItem(
              'vuex',
              JSON.stringify({
                loginStore: {
                  user: {
                    id: response.data.id,
                    email: response.data.email,
                    nickname: response.data.nickname,
                    image: response.data.image,
                    imagePath: response.data.imagePath,
                    refreshToken: response.data.refreshToken,
                  },
                },
              }),
            );
            alert('회원정보수정이 완료되었습니다.');
            this.user = null;
            delete this.user.password;
            window.location.href = '/user/recipe';
          })
          .catch(() => null);
      });
    },
    uploadImage() {
      return new Promise<void>((resolve, reject) => {
        const form = new FormData();
        const file = <HTMLInputElement>document.getElementById('uploadImage');
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
  },
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
input[type='file']::file-selector-button {
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid #8aa1a1;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
}
input[type='file']::file-selector-button:hover {
  background: #8aa1a1;
  color: #fff;
}
</style>
