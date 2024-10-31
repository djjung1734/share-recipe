<template>
  <div style="height: calc(100vh - 50px)">
    <div class="d-flex flex-column p-3 bg-dark h-100" style="width: 280px">
      <div
        class="d-flex flex-column align-items-center pb-3 mb-3 mb-md-0 link-dark text-decoration-none"
      >
        <img
          v-if="user.imagePath"
          class="border-0 rounded-circle"
          width="180"
          height="180"
          :src="user.imagePath"
          alt="..."
        />
        <div v-else class="border-0 rounded-circle bg-light">
          <img
            class="border-0 rounded-circle bg-light m-5"
            width="90"
            height="90"
            src="https://img.icons8.com/sf-regular-filled/96/no-camera.png"
            alt="..."
          />
        </div>
        <span class="mt-3 fs-4 text-white">{{ user.nickname }}</span>
      </div>
      <ul class="nav nav-pills flex-column border-top pt-3">
        <li class="nav-item">
          <router-link :to="`/${user.id}/recipe`" class="text-decoration-none">
            <button
              type="button"
              class="nav-link d-flex align-items-center"
              :class="{ active: selected === 'recipe' }"
              @click="selectMenu('recipe')"
            >
              <span class="material-symbols-outlined pe-2"> ramen_dining </span>
              <span>레시피</span>
            </button>
          </router-link>
        </li>
        <li>
          <router-link :to="`/${user.id}/review`" class="text-decoration-none">
            <button
              type="button"
              class="nav-link d-flex align-items-center"
              :class="{ active: selected === 'review' }"
              @click="selectMenu('review')"
            >
              <span class="material-symbols-outlined pe-2"> rate_review </span>
              <span>요리 후기</span>
            </button>
          </router-link>
        </li>
        <li>
          <router-link :to="`/${user.id}/member`" class="text-decoration-none">
            <button
              type="button"
              class="nav-link d-flex align-items-center"
              :class="{ active: selected === 'member' }"
              @click="selectMenu('member')"
            >
              <span class="material-symbols-outlined pe-2">
                manage_accounts
              </span>
              <span>회원정보수정</span>
            </button>
          </router-link>
        </li>
      </ul>
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
    selected() {
      return this.$store.state.selectedMenu;
    },
  },
  methods: {
    selectMenu(menu: string) {
      this.$store.commit('selectMenu', menu);
    },
  },
});
</script>

<style scoped>
.nav-pills .nav-link {
  color: #f8f9fa;
  background-color: #212529;
  width: 100%;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #212529;
  background-color: #f8f9fa;
}
</style>
