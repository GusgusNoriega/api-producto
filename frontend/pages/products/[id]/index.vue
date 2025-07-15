<script setup lang="ts">
definePageMeta({ layout: 'products' })

import { useRoute } from '#app'
import { getProduct, deleteProduct } from '~/composables/useProducts'
import { useRouter } from '#app'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const { data: product } = await useAsyncData(() => getProduct(id))

async function remove() {
  if (confirm('¿Eliminar producto?')) {
    await deleteProduct(id)
    router.push('/products')
  }
}
</script>

<template>
  <section v-if="product" class="space-y-4">
    <h1 class="text-3xl font-bold">{{ product.name }}</h1>
    <img
      v-if="product.image_path"
      class="max-w-md rounded"
      :src="`${$config.public.storageBase}/${product.image_path}`"
      :alt="product.name"
    />
    <p>{{ product.description }}</p>

    <div class="flex gap-2">
      <NuxtLink :to="`/products/${id}/edit`" class="btn-secondary">Editar</NuxtLink>
      <button class="btn-danger" @click="remove">Eliminar</button>
    </div>
  </section>
</template>