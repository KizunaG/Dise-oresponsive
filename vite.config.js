import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Dise-oresponsive/', // 👈 EXACTO como se llama el repo
})
