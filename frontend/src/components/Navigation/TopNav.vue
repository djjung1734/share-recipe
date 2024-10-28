<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0">
    <div class="container px-1 py-0">
      <router-link to="/home">
        <span type="button" class="btn border-0 navbar-brand">ShareRECIPE</span>
      </router-link>
      <div class="d-flex align-items-center w-50">
        <input
          class="form-control mr-sm-2 py-1"
          type="search"
          placeholder="Search"
          aria-label="Search" />
        <button type="button" class="btn border-0">
          <span class="material-symbols-outlined text-white">search</span>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <router-link v-if="!user" to="/login">
          <span type="button" class="me-3 text-white" style="font-size: 12px">
            Log In
          </span>
        </router-link>
        <span v-else class="me-3 text-white" style="font-size: 12px">
          {{ user.nickname }}님, 환영합니다!
        </span>
        <router-link v-if="!user" to="/login">
          <button type="button" class="btn border-0 rounded-circle">
            <span
              class="material-symbols-outlined text-white"
              style="font-size: 32px">
              person
            </span>
          </button>
        </router-link>
        <button
          v-if="user"
          type="button"
          class="btn border-0 rounded-circle dropdown-toggle"
          data-bs-toggle="dropdown">
          <span
            class="material-symbols-outlined text-white"
            style="font-size: 32px">
            person
          </span>
        </button>
        <div class="dropdown-menu dropdown-menu-end">
          <a class="dropdown-item" :href="`/${user?.id}/recipe`">레시피</a>
          <a class="dropdown-item" :href="`/${user?.id}/review`">요리 후기</a>
          <a class="dropdown-item" :href="`/${user?.id}/member`">
            회원정보수정
          </a>
          <a class="dropdown-item" :href="`/`" @click="logout">로그아웃</a>
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
  },
});
</script>
