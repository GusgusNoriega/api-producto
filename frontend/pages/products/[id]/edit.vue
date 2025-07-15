<script setup lang="ts">
definePageMeta({ layout: 'products' })

import { useRoute, useRouter } from '#app'
import { getProduct, updateProduct } from '~/composables/useProducts'
import type { Product } from '~/composables/useProducts'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

const { data: product } = await useAsyncData(() => getProduct(id))

async function save(form: FormData) {
  await updateProduct(id, form)
  router.push(`/products/${id}`)
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Editar producto</h1>

  <ProductForm v-if="product" :modelValue="product as Product" @submit="save" />
</template>