<script setup lang="ts">
import CategoryBadge from '../components/CategoryBadge.vue'
import NeoButton from '../components/NeoButton.vue'
import ProductCard from '../components/ProductCard.vue'
import { useCatalog } from '../composables/useCatalog'

const { getAllCategories, products } = useCatalog()

const categories = getAllCategories()
</script>

<template>
  <section class="space-y-12">
    <div class="neo-surface rounded-3xl bg-white p-6 md:p-10">
      <p class="mb-3 inline-block border-2 border-black bg-neo-muted px-3 py-1 text-xs font-extrabold uppercase">
        Ramadhan 1447 H
      </p>
      <h1 class="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
        Jelajahi Serunya Bazar Ramadhan
      </h1>
      <p class="mt-4 max-w-2xl text-base font-semibold md:text-lg">
        Temukan hidden gem untuk buka puasa dan kebutuhan Lebaran dari para pedagang lokal terbaik.
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <NeoButton to="/kategori">Lihat Katalog</NeoButton>
        <NeoButton to="/kategori/takjil-manis" variant="plain">Cari Takjil</NeoButton>
      </div>
    </div>

    <div>
      <h2 class="mb-4 inline-block border-b-[4px] border-black pb-1 text-2xl font-extrabold">Kategori Pilihan</h2>
      <div class="flex flex-wrap gap-3">
        <CategoryBadge v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </div>

    <div>
      <h2 class="mb-4 inline-block border-b-[4px] border-black pb-1 text-2xl font-extrabold">
        Rekomendasi Spesial Ramadhan
      </h2>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
