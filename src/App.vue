<script setup lang="ts">
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />
    <main class="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
