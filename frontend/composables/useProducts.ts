import type { Ref } from 'vue'

export interface Product {
  id: number
  name: string
  description: string | null
  image_path: string | null
}

export interface Paginated<T> {
  data: T[]
  current_page: number
  last_page: number
  next_page_url: string | null
  prev_page_url: string | null
}

/**
 * Petición paginada a /products
 */
export function useProducts(page: Ref<number>) {
  const { apiBase } = useRuntimeConfig().public

  return useAsyncData<Paginated<Product>>(
    () => $fetch(`${apiBase}/products`, { params: { page: page.value } }),
    { watch: [page] }
  )
}

/**
 * CRUD helpers
 */
export function getProduct(id: number) {
  const { apiBase } = useRuntimeConfig().public
  return $fetch<Product>(`${apiBase}/products/${id}`)
}

export function createProduct(body: FormData) {
  const { apiBase } = useRuntimeConfig().public
  return $fetch<Product>(`${apiBase}/products`, {
    method: 'POST',
    body
  })
}

export function updateProduct(id: number, body: FormData) {
  const { apiBase } = useRuntimeConfig().public
  return $fetch<Product>(`${apiBase}/products/${id}`, {
    method: 'POST',
    query: { _method: 'PUT' }, // Laravel método spoofing
    body
  })
}

export function deleteProduct(id: number) {
  const { apiBase } = useRuntimeConfig().public
  return $fetch<void>(`${apiBase}/products/${id}`, { method: 'DELETE' })
}