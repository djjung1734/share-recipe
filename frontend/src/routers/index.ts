import Home from "@/components/Home.vue";
import ManagementRecipe from "@/components/ManagementRecipe.vue";
import CookingReview from "@/components/CookingReview.vue";
import EditMember from "@/components/EditMember.vue";
import EditRecipe from "@/components/Modal/EditRecipe.vue";
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
      path: "/recipe",
      component: ManagementRecipe,
      children: [],
    },
    {
      path: "/review",
      component: CookingReview,
    },
    {
      path: "/member",
      component: EditMember,
    },
    {
      path: "/editRecipe",
      component: EditRecipe,
    },
  ],
});
