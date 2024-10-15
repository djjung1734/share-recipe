import Home from "@/components/Home.vue";
import UserPage from "@/components/UserPage.vue";
import ManagementRecipe from "@/components/ManagementRecipe.vue";
import CookingReview from "@/components/CookingReview.vue";
import EditMember from "@/components/EditMember.vue";
import EditRecipe from "@/components/Modal/EditRecipe.vue";
import RecipeDetail from "@/components/RecipeDetail.vue";
import Login from "@/components/Login.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
      path: "/login",
      component: Login,
    },
    {
      path: "/user",
      component: UserPage,
      redirect: "/user/recipe",
      children: [
        {
          path: "/user/recipe",
          component: ManagementRecipe,
        },
        {
          path: "/user/review",
          component: CookingReview,
        },
        {
          path: "/user/member",
          component: EditMember,
        },
      ],
    },
    {
      path: "/editRecipe",
      component: EditRecipe,
    },
    {
      path: "/detail",
      component: RecipeDetail,
    },
  ],
});
