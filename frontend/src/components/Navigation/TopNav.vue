<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
    <div class="container px-1 py-0">
      <router-link to="/home">
        <span type="button" class="btn border-0 navbar-brand">ShareRECIPE</span>
      </router-link>
      <div class="d-flex align-items-center">
        <router-link v-if="!user" class="text-decoration-none" to="/login">
          <span type="button" class="me-3 text-white" style="font-size: 12px">
            Log In
          </span>
        </router-link>
        <span v-else class="me-3 text-white" style="font-size: 12px">
          {{ user.nickname }}님, 환영합니다!
        </span>
        <div v-if="!user">
          <router-link to="/login">
            <button type="button" class="btn border-0 rounded-circle">
              <span
                class="material-symbols-outlined text-white"
                style="font-size: 32px"
              >
                person
              </span>
            </button>
          </router-link>
        </div>
        <div v-if="user" class="dropdown">
          <button
            type="button"
            class="btn border-0 rounded-circle dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <span
              class="material-symbols-outlined text-white"
              style="font-size: 32px"
            >
              person
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <router-link
              class="text-decoration-none"
              :to="`/${user?.id}/recipe`"
            >
              <button
                type="button"
                class="dropdown-item"
                @click="selectMenu('recipe')"
              >
                레시피
              </button>
            </router-link>
            <router-link
              class="text-decoration-none"
              :to="`/${user?.id}/review`"
            >
              <button
                type="button"
                class="dropdown-item"
                @click="selectMenu('review')"
              >
                요리 후기
              </button>
            </router-link>
            <router-link
              class="text-decoration-none"
              :to="`/${user?.id}/member`"
            >
              <button
                type="button"
                class="dropdown-item"
                :href="`/${user?.id}/member`"
                @click="selectMenu('member')"
              >
                회원정보수정
              </button>
            </router-link>
            <router-link class="text-decoration-none" to="/">
              <button type="button" class="dropdown-item" @click="logout">
                로그아웃
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <SignUpModal />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import SignUpModal from '../Modal/SignUpModal.vue';

export default Vue.extend({
  components: {
    SignUpModal,
  },
  computed: {
    user() {
      return this.$store.state.loginStore.user;
    },
  },
  methods: {
    logout() {
      this.$store.commit('removeToken');
    },
    selectMenu(menu: string) {
      this.$store.commit('selectMenu', menu);
    },
  },
});
</script>
