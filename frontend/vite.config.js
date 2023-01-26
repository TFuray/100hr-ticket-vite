import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    },

    // to serve on the 3000 port
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [react()]
})
