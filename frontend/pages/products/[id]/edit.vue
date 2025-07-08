<!-- pages/products/[id]/edit.vue -->
<script setup lang="ts">
import type { Product } from '@/lib/api'

const { id } = useRoute().params           // id es string
const router = useRouter()
const { $api }  = useNuxtApp()

/**
 * Obtenemos el producto; si el servidor responde 404
 * redirigimos al listado.
 */
const { data: product, error } = await useAsyncData(
  `product-edit-${id}`,
  () => $api.get<Product>(`/products/${id}`).then(r => r.data)
)

// Si la API devolvió 404 → vuelve al listado
if (error.value?.response?.status === 404) {
  router.push('/products')
}
</script>

<template>
  <!-- Mientras carga puedes mostrar un spinner -->
  <div v-if="!product" class="text-center py-12">Cargando…</div>

  <!-- Cuando llegue el producto lo pasamos desenrollado -->
  <ProductForm
    v-else
    :product="product"
    @saved="() => {}"
  />
</template>