<template>
  <div>Add Form</div>
  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" v-model="name" placeholder="Recipe Name" required />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe Description" required></textarea>
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipeStore } from '@/stores/recipe'

const store = useRecipeStore()
const name = ref('')
const description = ref('')

const router = useRouter()
const addRecipe = () => {
  store.addRecipe({
    name: name.value,
    description: description.value
  })
  router.push({
    name: 'recipe',
    params: {
      id: 18
    }
  })
}
</script>

<style scoped></style>
