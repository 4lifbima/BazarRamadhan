<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CategoryBadge from '../components/CategoryBadge.vue'
import ProductCard from '../components/ProductCard.vue'
import { useCatalog } from '../composables/useCatalog'

const route = useRoute()
const { getAllCategories, getCategoryBySlug, getProductsByCategory, products } = useCatalog()

const categories = getAllCategories()

const activeSlug = computed(() => {
  const param = route.params.slug
  return typeof param === 'string' ? param : ''
})

const activeCategory = computed(() => (activeSlug.value ? getCategoryBySlug(activeSlug.value) : null))

const filteredProducts = computed(() => {
  if (!activeSlug.value) return products
  return getProductsByCategory(activeSlug.value)
})
</script>

<template>
  <section class="space-y-8">
    <div>
      <h1 class="text-3xl font-extrabold md:text-4xl">
        {{ activeCategory ? `Kategori: ${activeCategory.name}` : 'Semua Kategori Produk' }}
      </h1>
      <p class="mt-2 font-semibold">
        {{
          activeCategory
            ? 'Pilih produk favoritmu dari kategori ini.'
            : 'Lihat semua kategori dan jelajahi produk bazar Ramadhan.'
        }}
      </p>
    </div>

    <div class="flex flex-wrap gap-3">
      <RouterLink
        to="/kategori"
        class="neo-surface inline-flex items-center rounded-xl px-4 py-2 text-sm font-bold transition-transform hover:-translate-y-1"
      >
        Semua Produk
      </RouterLink>
      <CategoryBadge v-for="category in categories" :key="category.id" :category="category" />
    </div>

    <div v-if="filteredProducts.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>

    <div v-else class="neo-surface rounded-2xl bg-white p-8 text-center">
      <p class="text-xl font-extrabold">Belum ada produk di kategori ini</p>
      <p class="mt-2 font-semibold">Coba pilih kategori lain untuk melihat katalog.</p>
    </div>
  </section>
</template>
