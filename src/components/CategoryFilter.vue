<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Filter by Categories</h3>
    <div class="space-y-2">
      <label
        v-for="category in categories"
        :key="category"
        class="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
      >
        <input
          type="checkbox"
          :value="category"
          v-model="selectedCategories"
          class="rounded text-indigo-600 focus:ring-indigo-500"
        />
        <span class="text-gray-700">{{ category }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from '../store'

const props = defineProps<{
  selected: string[]
}>()

const emit = defineEmits<{
  (e: 'update:selected', value: string[]): void
}>()

const store = useStore()
const selectedCategories = ref<string[]>(props.selected)

const categories = computed(() => {
  return Array.from(new Set(store.categoryData.map(cat => cat.name)))
})

watch(selectedCategories, (newValue) => {
  emit('update:selected', newValue)
}, { deep: true })

watch(() => props.selected, (newValue) => {
  selectedCategories.value = newValue
}, { deep: true })
</script> 