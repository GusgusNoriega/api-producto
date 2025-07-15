<template>
  <div class="container mx-auto px-4 py-6 space-y-6">
    <!-- Botón de regreso -->
    <header>
      <NuxtLink
        to="/products"
        class="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
      >
        ← Ver lista de productos
      </NuxtLink>
    </header>

    <!-- Aquí se inyecta el contenido concreto de cada página -->
    <slot />
  </div>
</template>

