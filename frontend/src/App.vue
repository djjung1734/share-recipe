<template>
  <div id="app" class="vh-100">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<script lang="ts">
import Vue from "vue";
import Home from "./components/Home.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default Vue.extend({
  name: "App",
  components: {
    Home,
  },
});
</script>
