<template>
  <div id="app">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Shop Homepage - Start Bootstrap Template</title>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <link href="./css/styles.css" rel="stylesheet" type="text/html" />
    </head>
    <body class="vh-100">
      <router-view></router-view>
    </body>
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
