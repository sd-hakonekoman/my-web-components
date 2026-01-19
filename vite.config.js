import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true, // ローカルIPアドレスでのアクセスを許可
  },
  plugins: [
    tailwindcss(),
  ],
})