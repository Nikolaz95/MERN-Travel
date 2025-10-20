import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // da otvori i za vanjske requeste
    port: 5174,
    allowedHosts: ['endless-caiman-fully.ngrok-free.app']
  }
})
