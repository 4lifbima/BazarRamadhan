<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NeoButton from '../components/NeoButton.vue'
import ProductCard from '../components/ProductCard.vue'
import { useCatalog } from '../composables/useCatalog'

const route = useRoute()
const { getProductBySlug, getRelatedProducts } = useCatalog()

const slug = computed(() => (typeof route.params.slug === 'string' ? route.params.slug : ''))
const product = computed(() => getProductBySlug(slug.value))

const formattedPrice = computed(() => {
  if (!product.value) return ''
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(product.value.price)
})

const whatsappLink = computed(() => {
  if (!product.value) return '#'
  return `https://wa.me/${product.value.whatsappNumber}?text=Halo%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.value.name)}`
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return getRelatedProducts(product.value.slug, product.value.category, 4)
})
</script>

<template>
  <section v-if="product" class="space-y-10">
    <nav class="text-sm font-bold">
      <RouterLink to="/" class="underline">Home</RouterLink>
      <span> &gt; </span>
      <RouterLink :to="`/kategori/${product.category}`" class="underline">{{ product.categoryName }}</RouterLink>
      <span> &gt; </span>
      <span>{{ product.name }}</span>
    </nav>

    <div class="grid gap-6 lg:grid-cols-2">
      <div class="neo-surface overflow-hidden rounded-3xl">
        <img :src="product.imageUrl" :alt="product.name" class="h-full w-full object-cover" />
      </div>

      <div class="neo-surface rounded-3xl bg-white p-6 md:p-8">
        <p class="inline-block border-2 border-black bg-neo-muted px-2 py-1 text-xs font-extrabold uppercase">
          {{ product.categoryName }}
        </p>
        <h1 class="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">{{ product.name }}</h1>
        <p class="mt-3 text-3xl font-extrabold text-neo-secondary md:text-4xl">{{ formattedPrice }}</p>

        <div class="mt-6 space-y-3 text-sm font-semibold md:text-base">
          <p><span class="font-extrabold">Penjual:</span> {{ product.seller }}</p>
          <p><span class="font-extrabold">WhatsApp:</span> {{ product.whatsappNumber }}</p>
          <p><span class="font-extrabold">Lokasi Stand:</span> {{ product.location }}</p>
        </div>

        <div
          class="mt-6 text-sm font-semibold leading-relaxed md:text-base [&>p]:mb-3 [&>p:last-child]:mb-0"
          v-html="product.description"
        />

        <div class="mt-6 flex flex-wrap gap-3">
          <NeoButton :href="whatsappLink" variant="secondary">Chat WhatsApp</NeoButton>
          <NeoButton to="/kategori" variant="plain">Kembali ke Kategori</NeoButton>
        </div>
      </div>
    </div>

    <div v-if="relatedProducts.length">
      <h2 class="mb-4 inline-block border-b-[4px] border-black pb-1 text-2xl font-extrabold">Produk Terkait</h2>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard v-for="item in relatedProducts" :key="item.id" :product="item" />
      </div>
    </div>
  </section>

  <section v-else class="neo-surface rounded-2xl bg-white p-8 text-center">
    <h1 class="text-2xl font-extrabold">Produk tidak ditemukan</h1>
    <p class="mt-2 font-semibold">Coba kembali ke halaman kategori untuk memilih produk lain.</p>
    <div class="mt-5">
      <NeoButton to="/kategori">Buka Katalog</NeoButton>
    </div>
  </section>
</template>
