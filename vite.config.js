import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // mesma pasta de antes; o Netlify publica "build"
    emptyOutDir: true,
    target: 'es2019', // navegadores de celular mais antigos
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: false,
  },
})
