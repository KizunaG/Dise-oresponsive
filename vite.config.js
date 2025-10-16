import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 ESTA LÍNEA ES LA IMPORTANTE
// Debe coincidir con el nombre EXACTO del repositorio de GitHub
export default defineConfig({
  plugins: [react()],
  base: '/Dise-oresponsive/',   // 👈 OJO con la barra al inicio y al final
})
