import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Letting Vite handle chunking for better mobile performance balance
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    proxy: {
      '/ollama-api': {
        target: 'https://ollama.com', // Endpoint is just the domain, SDK adds /api/chat
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ollama-api/, ''),
        secure: false, // In case of SSL issues
      },
    },
  },
})
