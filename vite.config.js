import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// ESMで __dirname を再現する
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server: {
    host: true, // ローカルIPアドレスでのアクセスを許可
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html'),
        spMenu: path.resolve(__dirname, 'src/sp-menu/index.html'),
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})
