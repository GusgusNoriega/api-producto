<!-- components/ProductForm.vue -->
<script setup lang="ts">
/* ------------------------------------------------------------------ */
/* Imports y tipos                                                     */
/* ------------------------------------------------------------------ */
import { reactive } from 'vue'
import { useNuxtApp, navigateTo } from '#app'
import type { Product } from '@/lib/api'

/* ------------------------------------------------------------------ */
/* Props y emits                                                       */
/* ------------------------------------------------------------------ */
const props = defineProps<{ product?: Product }>()

const emit = defineEmits<{
  /** Se dispara cuando el producto se guarda y devuelve el recurso */
  (e: 'saved', product: Product): void
}>()

/* ------------------------------------------------------------------ */
/* Estado reactivo del formulario                                      */
/* ------------------------------------------------------------------ */
const form = reactive({
  name: props.product?.name ?? '',
  description: props.product?.description ?? '',
  image: undefined as File | undefined,
})

const { $api } = useNuxtApp()

/* ------------------------------------------------------------------ */
/* Lógica de guardado (crear o actualizar)                             */
/* ------------------------------------------------------------------ */
async function submit () {
  const fd = new FormData()
  fd.append('name', form.name)                 // ← obligatorio
  if (form.description) fd.append('description', form.description)
  if (form.image)      fd.append('image', form.image)

  // Nuevo vs. editar
  const url  = props.product ? `/products/${props.product.id}` : '/products'
  const verb = props.product ? 'put'           : 'post'        // ← PUT real

  const res = await $api[verb](url, fd)        // Axios hace el boundary

  emit('saved', res.data)
  navigateTo(`/products/${res.data.id}`)
}
</script>

<template>
  <form @submit.prevent="submit" class="space-y-4 max-w-lg">
    <input
      v-model="form.name"
      placeholder="Nombre"
      class="input"
      required
    />

    <textarea
      v-model="form.description"
      placeholder="Descripción"
      class="textarea"
    />

    <input
      type="file"
      accept="image/*"
      @change="e => form.image = (e.target as HTMLInputElement).files?.[0]"
    />

    <button class="btn-primary">
      Guardar
    </button>
  </form>
</template>