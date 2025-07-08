import axios from 'axios'

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'http://api-producto.test/api',   // ← URL fija
    // Si en algún momento la API exige credenciales:
    // withCredentials: true,
  })

  return { provide: { api } }
})
