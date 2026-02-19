<script setup lang="ts">
interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'plain'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
})
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center border-neo px-5 py-2 font-bold transition-transform hover:-translate-y-1"
    :class="{
      'bg-neo-primary shadow-neo-sm': variant === 'primary',
      'bg-neo-secondary text-white shadow-neo-sm': variant === 'secondary',
      'bg-white shadow-neo-sm': variant === 'plain',
    }"
  >
    <slot />
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center border-neo px-5 py-2 font-bold transition-transform hover:-translate-y-1"
    :class="{
      'bg-neo-primary shadow-neo-sm': variant === 'primary',
      'bg-neo-secondary text-white shadow-neo-sm': variant === 'secondary',
      'bg-white shadow-neo-sm': variant === 'plain',
    }"
  >
    <slot />
  </a>

  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center border-neo px-5 py-2 font-bold transition-transform hover:-translate-y-1"
    :class="{
      'bg-neo-primary shadow-neo-sm': variant === 'primary',
      'bg-neo-secondary text-white shadow-neo-sm': variant === 'secondary',
      'bg-white shadow-neo-sm': variant === 'plain',
    }"
  >
    <slot />
  </button>
</template>
