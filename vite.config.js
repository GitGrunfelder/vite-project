import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  baseUrl: '/vite-react-business-card/',
  plugins: [react()]
})
