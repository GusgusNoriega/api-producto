<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { Product } from '~/composables/useProducts'

const props = defineProps<{
  modelValue?: Product | null
}>()

const emit = defineEmits<{
  (e: 'submit', payload: FormData): void
}>()

// campos reactivos
const name = ref('')
const description = ref('')
const imageFile = ref<File | null>(null)

// hidrata cuando entra un producto (modo edición)
watchEffect(() => {
  if (props.modelValue) {
    name.value = props.modelValue.name
    description.value = props.modelValue.description ?? ''
  }
})

function handleFile(e: Event) {
  const files = (e.target as HTMLInputElement).files
  imageFile.value = files && files[0] ? files[0] : null
}

function onSubmit() {
  const form = new FormData()
  form.append('name', name.value)
  form.append('description', description.value)
  if (imageFile.value) form.append('image', imageFile.value)

  emit('submit', form)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <div>
      <label class="block text-sm font-medium">Nombre</label>
      <input v-model="name" type="text" class="input" required />
    </div>

    <div>
      <label class="block text-sm font-medium">Descripción</label>
      <textarea v-model="description" class="input min-h-[100px]"></textarea>
    </div>

    <div>
      <label class="block text-sm font-medium">Imagen</label>
      <input type="file" accept="image/*" @change="handleFile" />
    </div>

    <button type="submit" class="btn-primary">Guardar</button>
  </form>
</template>