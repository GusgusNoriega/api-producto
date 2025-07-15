<script setup lang="ts">
definePageMeta({ layout: 'products' })
import { ref } from 'vue'
import { useProducts } from '~/composables/useProducts'

const page = ref(1)
const { data: pag, refresh } = useProducts(page)

function next() {
  if (pag.value?.next_page_url) page.value++
}
function prev() {
  if (pag.value?.prev_page_url) page.value--
}
</script>

<template>
  <section class="space-y-8">
    <header class="flex justify-between items-center">
      <h1 class="text-3xl font-bold">Productos</h1>
      <NuxtLink to="/products/new" class="btn-primary">+ Nuevo</NuxtLink>
    </header>

    <ul class="grid gap-6 md:grid-cols-3">
      <li
        v-for="p in pag?.data"
        :key="p.id"
        class="bg-white rounded-xl shadow overflow-hidden"
      >
        <img
          v-if="p.image_path"
          :src="`${$config.public.storageBase}/${p.image_path}`"
          :alt="p.name"
        />
        <div class="p-4 space-y-2">
          <h2 class="font-semibold">{{ p.name }}</h2>
          <p class="text-sm">{{ p.description }}</p>

          <NuxtLink :to="`/products/${p.id}`" class="link">
            Ver detalle →
          </NuxtLink>
        </div>
      </li>
    </ul>

    <div class="flex gap-2">
      <button class="btn-secondary" :disabled="!pag?.prev_page_url" @click="prev">
        ← Anterior
      </button>
      <button class="btn-secondary" :disabled="!pag?.next_page_url" @click="next">
        Siguiente →
      </button>
    </div>
  </section>
</template>