<template>
  <header class="sticky top-0 z-30 border-b-[3px] border-black bg-neo-background/95 backdrop-blur">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          src="/icon-centerpoint.jpg"
          alt="Centerpoint"
          class="h-10 w-10 rounded-lg border-2 border-black object-cover shadow-neo-sm"
        />
        <div>
          <span class="text-xl font-extrabold tracking-tight md:text-2xl">Bazar Ramadhan Hub</span>
          <p class="-mt-2">Center Point Bonebolango</p>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-2 text-sm font-bold md:gap-3 md:text-base">
        <RouterLink to="/" class="hidden md:block border-2 border-black bg-white px-3 py-1 shadow-neo-sm">Home</RouterLink>
        <RouterLink to="/kategori" class="hidden md:block border-2 border-black bg-neo-primary px-3 py-1 shadow-neo-sm">
          Kategori
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
