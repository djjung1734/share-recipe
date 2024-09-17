<template>
  <div class="h-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">ShareRECIPE</a>
        <div class="d-flex w-50">
          <input
            class="form-control mr-sm-2 py-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span
            type="button"
            class="btn btn-outline-success border-0 p-1 material-icons material-symbols-outlined"
            >search</span
          >
        </div>
        <div>
          <span
            class="me-3 text-dark"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            style="font-size: 12px"
            >Log In</span
          >
          <span
            type="button"
            class="btn btn-outline-dark border-0 rounded-circle p-1 material-icons material-symbols-outlined"
            style="font-size: 32px"
          >
            person
          </span>
        </div>
      </div>
    </nav>
    <div class="h-100">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light h-100"
        style="width: 280px"
      >
        <div
          class="d-flex flex-column align-items-center mb-3 mb-md-0 link-dark text-decoration-none"
        >
          <span
            class="p-1 material-icons material-symbols-outlined"
            style="font-size: 32px"
          >
            person
          </span>
          <span class="fs-4">Nickname</span>
        </div>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#home"></use>
              </svg>
              레시피
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#speedometer2"></use>
              </svg>
              요리 후기
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#table"></use>
              </svg>
              회원정보수정
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserPage",
  components: {},
});
</script>
