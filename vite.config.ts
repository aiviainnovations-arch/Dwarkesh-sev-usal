import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/Dwarkesh-sev-usal/',

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
})
