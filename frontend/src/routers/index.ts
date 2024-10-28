import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/components/Home.vue';
import UserPage from '@/components/UserPage.vue';
import ManagementRecipe from '@/components/ManagementRecipe.vue';
import CookingReview from '@/components/CookingReview.vue';
import EditMember from '@/components/EditMember.vue';
import EditRecipe from '@/components/Modal/EditRecipe.vue';
import RecipeDetail from '@/components/RecipeDetail.vue';
import Login from '@/components/Login.vue';
import Vue from 'vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/editRecipe',
    component: EditRecipe,
  },
  {
    path: '/:id',
    component: UserPage,
    redirect: '/:id/recipe',
    children: [
      {
        path: '/:id/recipe',
        component: ManagementRecipe,
      },
      {
        path: '/:id/review',
        component: CookingReview,
      },
      {
        path: '/:id/member',
        component: EditMember,
      },
    ],
  },
  {
    path: '/detail',
    component: RecipeDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
