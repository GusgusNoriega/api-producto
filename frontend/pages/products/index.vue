<script setup lang="ts">
import { useAsyncData } from '#app'
import { ref } from 'vue'

// ① Estado de la paginación (Laravel usa ?page=)
const page = ref(1)

// ② Consumir la API cada vez que cambie `page`
const { data: pag } = await useAsyncData(
  () => $fetch('http://api-producto.test/api/products', {
    params: { page: page.value },
  }),
  { watch: [page] }
)
</script>

<template>
  <section class="space-y-8">
    <h1 class="text-3xl font-bold">Productos</h1>

    <!-- ③ Grilla -->
    <ul class="grid gap-6 md:grid-cols-3">
      <li
        v-for="p in pag?.data"
        :key="p.id"
        class="bg-white rounded-xl shadow overflow-hidden"
      >
        <img
          v-if="p.image_path"
          :src="`http://api-producto.test/storage/${p.image_path}`"
          :alt="p.name"
        />
        <div class="p-4">
          <h2 class="font-semibold">{{ p.name }}</h2>
          <p class="text-sm">{{ p.description }}</p>

          <NuxtLink :to="`/products/${p.id}`" class="link"
            >Ver detalle</NuxtLink
          >
        </div>
      </li>
    </ul>

    <!-- ④ Controles de paginación -->
    <div class="flex gap-2">
      <button
        class="btn-secondary"
        :disabled="!pag?.prev_page_url"
        @click="page--"
      >
        ← Anterior
      </button>

      <button
        class="btn-secondary"
        :disabled="!pag?.next_page_url"
        @click="page++"
      >
        Siguiente →
      </button>
    </div>
  </section>
</template>