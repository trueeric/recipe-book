import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Recipe {
  id: string
  name: string
  description: string
}

type NewRecipe = Omit<Recipe, 'id'>

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([])
  const favorites = ref<string[]>([])

  const toggleFavorite = (id: string) => {
    if (favorites.value.includes(id)) {
      favorites.value = favorites.value.filter((favId) => favId !== id)
    } else {
      favorites.value.push(id)
    }
  }

  const isFavorite = (id: string) => favorites.value.includes(id)

  const editRecipe = (updateRecipe: Recipe) => {
    const index = recipes.value.findIndex((r) => r.id === updateRecipe.id)

    if (index !== -1) {
      recipes.value[index] = updateRecipe
    }
  }

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    }

    recipes.value.push(newRecipe)
    return newRecipe
  }

  const getRecipeById = (id: string) => recipes.value.find((recipe) => recipe.id === id)

  const filteredRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    editRecipe,
    favorites,
    toggleFavorite,
    isFavorite
  }
})
