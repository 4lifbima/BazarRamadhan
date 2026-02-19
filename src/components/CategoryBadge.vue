<script setup lang="ts">
import type { Category } from '../types'

defineProps<{
  category: Category
}>()
</script>

<template>
  <RouterLink
    :to="`/kategori/${category.slug}`"
    class="neo-surface inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-1"
  >
    <span class="text-base" aria-hidden="true">{{ category.icon || '•' }}</span>
    <span>{{ category.name }}</span>
  </RouterLink>
</template>
