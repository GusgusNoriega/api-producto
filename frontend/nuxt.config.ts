// nuxt.config.ts
import { resolve } from 'path';

export default defineNuxtConfig({
  /* -----------------------------------------------------------
   * Ajustes básicos
   * --------------------------------------------------------- */
  ssr: true,                     // SSR activo (valor por defecto, lo escribo por claridad)
  devtools: { enabled: true },   // Nuxt DevTools (⌥ + D en el navegador)

  /* -----------------------------------------------------------
   * CSS global
   * --------------------------------------------------------- */
  css: ['~/assets/css/main.css'], // Aquí tienes las directivas @tailwind y tus utilidades

  /* -----------------------------------------------------------
   * Módulos Nuxt
   * --------------------------------------------------------- */
  modules: [
    '@nuxtjs/tailwindcss',       // Instala Tailwind + PostCSS + autoprefixer
  ],

  /* -----------------------------------------------------------
   * Variables de entorno seguras
   * --------------------------------------------------------- */
  runtimeConfig: {
    public: {
      // Se envía tanto al server como al cliente
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api',
    },
  },

  /* -----------------------------------------------------------
   * Alias opcional (↪️ @/...) para carpetas fuera de /~/
   * --------------------------------------------------------- */
  alias: {
    '@': resolve(__dirname, 'src'),   // Solo si estás usando una carpeta /src
  },

  /* -----------------------------------------------------------
   * Tweaks de Vite (útil en Laragon/WSL si los cambios no se recargan)
   * --------------------------------------------------------- */
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
