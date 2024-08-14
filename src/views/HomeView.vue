<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="Searching recipes... " v-model="searchQuery" />
    </div>
    <nav v-if="filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in filteredRecipes" :key="recipe.id">
          <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }"
            >{{ recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>No recipes found.</div>
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe'
import { RouterLink } from 'vue-router'
import { ref, computed } from 'vue'

const recipeStore = useRecipeStore()
const searchQuery = ref('')
const filteredRecipes = computed(() => recipeStore.filteredRecipes(searchQuery.value))
</script>
