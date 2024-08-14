<template>
  <div>Edit Form</div>
  <form @submit.prevent="updateRecipe">
    <div>
      <input type="text" v-model="name" placeholder="Recipe Name" required />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe Description" required></textarea>
    </div>
    <button type="submit">Edit</button>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe'

const store = useRecipeStore()
const router = useRouter()
const route = useRoute()

const name = ref('')
const description = ref('')

// *先撈出要改的資料
const fetchRecipe = () => {
  const id = route.params.id as string
  const recipe = store.getRecipeById(id)

  if (recipe) {
    name.value = recipe.name
    description.value = recipe.description
  } else {
    router.push({ name: 'not-found' })
  }
}

onMounted(fetchRecipe)

const updateRecipe = () => {
  store.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value
  })
  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string
    }
  })
}
</script>

<style scoped></style>
