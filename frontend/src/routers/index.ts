import Home from "@/components/Home.vue";
import UserPage from "@/components/UserPage.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/user",
      component: UserPage,
    },
  ],
});
