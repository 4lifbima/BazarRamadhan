<script setup lang="ts">
import type { Product } from '../types'

defineProps<{
  product: Product
}>()

const formatPrice = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
</script>

<template>
  <article class="neo-surface overflow-hidden rounded-2xl bg-white">
    <RouterLink :to="`/produk/${product.slug}`" class="block">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="aspect-square w-full border-b-[3px] border-black object-cover"
        loading="lazy"
      />
      <div class="space-y-2 p-4">
        <h3 class="line-clamp-2 min-h-12 text-lg font-extrabold">{{ product.name }}</h3>
        <p class="text-2xl font-extrabold text-neo-secondary">{{ formatPrice(product.price) }}</p>
        <p class="text-sm font-semibold">{{ product.seller }}</p>
        <p class="inline-block border-2 border-black bg-neo-muted px-2 py-1 text-xs font-bold">
          {{ product.categoryName }}
        </p>
        <p class="pt-1 text-sm font-bold underline">Lihat Detail</p>
      </div>
    </RouterLink>
  </article>
</template>
