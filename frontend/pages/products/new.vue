<script setup lang="ts">
definePageMeta({ layout: 'products' })

import { createProduct } from '~/composables/useProducts'
import { useRouter } from '#app'

const router = useRouter()

async function save(form: FormData) {
  await createProduct(form)
  router.push('/products')
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Nuevo producto</h1>
  <ProductForm @submit="save" />
</template>
