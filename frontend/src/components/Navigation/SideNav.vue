<template>
  <div style="height: calc(100vh - 50px)">
    <div class="d-flex flex-column p-3 bg-dark h-100" style="width: 280px">
      <div
        class="d-flex flex-column align-items-center pb-3 mb-3 mb-md-0 link-dark text-decoration-none"
      >
        <img
          class="border-0 rounded-circle"
          width="180"
          height="180"
          src="../../assets/bebe.jpg"
        />

        <span class="mt-3 fs-4 text-white">Nickname</span>
      </div>
      <ul class="nav nav-pills flex-column border-top pt-3">
        <li class="nav-item">
          <router-link to="/recipe" class="text-decoration-none"
            ><div type="button" class="nav-link active">
              <svg class="bi me-2" width="16" height="16"></svg>
              레시피
            </div></router-link
          >
        </li>
        <li>
          <router-link to="review" class="text-decoration-none"
            ><div type="button" class="nav-link">
              <svg class="bi me-2" width="16" height="16"></svg>
              요리 후기
            </div></router-link
          >
        </li>
        <li>
          <router-link to="member" class="text-decoration-none"
            ><div type="button" class="nav-link">
              <svg class="bi me-2" width="16" height="16"></svg>
              회원정보수정
            </div></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav-pills .nav-link {
  color: #f8f9fa;
  background-color: #212529;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #212529;
  background-color: #f8f9fa;
}
</style>
