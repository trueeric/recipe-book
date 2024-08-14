import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import AddRecipeView from '@/views/AddRecipeView.vue'
import RecipeView from '@/views/RecipeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EditRecipeView from '@/views/EditRecipeView.vue'

// base 可變更根目錄位置  * mydomain.com   mydomain.com/app
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/home',
      redirect: '/'
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipeView
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView
    },
    {
      path: '/recipe/:id/edit',
      name: 'edit-recipe',
      component: EditRecipeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },

  ]
})

export default router
