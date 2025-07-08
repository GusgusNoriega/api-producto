<!-- pages/products/[id].vue -->
<script setup lang="ts">
import { useRuntimeConfig, useRoute, useNuxtApp, useAsyncData, navigateTo } from '#app'
import type { Product } from '@/lib/api'

/* ------------------------------------------------------------------ */
/* Helpers y datos                                                    */
/* ------------------------------------------------------------------ */
const config   = useRuntimeConfig()
const { id }   = useRoute().params            // id es string
const { $api } = useNuxtApp()

/* 1. Carga el producto */
const { data: product, error } = await useAsyncData(
  `product-${id}`,
  () => $api.get<Product>(`/products/${id}`).then(r => r.data)
)

/* 2. Calcula la base sin “/api” (una sola vez) */
const baseUrl = config.public.apiBase.replace(/\/api\/?$/, '')

/* 3. Función para eliminar y volver al listado */
async function del () {
  await $api.delete(`/products/${id}`)
  navigateTo('/products')
}

/* 4. Si la API devuelve 404, regresa automáticamente */
if (error.value?.response?.status === 404) {
  navigateTo('/products')
}
</script>

<template>
  <!-- Placeholder mientras llega la data -->
  <div v-if="!product" class="text-center py-12">Cargando…</div>

  <article v-else class="prose">
    <!-- Imagen -->
    <img
      v-if="product.image_path"
      :src="`${baseUrl}/storage/${product.image_path}`"
      :alt="product.name"
      class="mb-4 rounded shadow"
    />

    <!-- Datos -->
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>

    <!-- Acciones -->
    <div class="flex gap-3 mt-6">
      <NuxtLink :to="`/products/${id}/edit`" class="btn-secondary">
        Editar
      </NuxtLink>

      <button @click="del" class="btn-danger">
        Eliminar
      </button>
    </div>
  </article>
</template>
