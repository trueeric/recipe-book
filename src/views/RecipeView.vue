<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
    <div>
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }">Edit</RouterLink>
    </div>
    <button v-if="recipe" @click="recipeStore.toggleFavorite(recipe?.id)">
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeStore = useRecipeStore()

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string))

const isFavorite = computed(() => (recipe.value ? recipeStore.isFavorite(recipe.value.id) : false))
</script>

<style scoped></style>
