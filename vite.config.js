import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: 'src',
  server: {
    host: true, // ローカルIPアドレスでのアクセスを許可
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        spMenu: resolve(__dirname, 'src/sp-menu/index.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
