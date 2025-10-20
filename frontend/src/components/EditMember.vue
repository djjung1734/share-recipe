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
            name="username"
          />
        </div>
        <div class="input-box">
          <label for="password">비밀번호</label>
          <input
            id="password"
            v-model="user.password"
            type="password"
            name="password"
          />
        </div>
        <div class="input-box">
          <label for="nickname">닉네임</label>
          <input
            id="nickname"
            v-model="user.nickname"
            type="text"
            name="nickname"
          />
        </div>
        <div class="input-box">
          <label for="image">이미지</label>
          <label for="userImage">
            <img
              v-if="user.image"
              class="border-0 object-cover-fit"
              width="120px"
              height="90px"
              :src="preImagePath"
              alt="..."
            />
            <div
              v-else
              class="userImage d-flex align-items-center justify-content-center"
            >
              <span class="material-symbols-outlined fs-3 text-muted">
                add_photo_alternate
              </span>
            </div>
          </label>
          <input
            id="userImage"
            type="file"
            class="userImage"
            name="userImage"
            @change="previewImage()"
          />
        </div>
        <div class="float-end">
          <button
            class="btn btn-outline-success"
            type="submit"
            @click="saveUser"
          >
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
  data(): any {
    return {
      preImage: '',
      preImagePath: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
  mounted() {
    if (this.user.image) {
      this.preImagePath = this.user.imagePath;
    }
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
        const file = <HTMLInputElement>document.getElementById('userImage');
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
    previewImage() {
      this.uploadImage().then((fileInfo: any) => {
        if (fileInfo) {
          const { url, originalname } = fileInfo;
          this.preImage = originalname;
          this.preImagePath = url;
        }
      });
    },
  },
});
</script>

<style scoped>
.userImage {
  display: none;
}
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
