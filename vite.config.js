import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react', 'react-icons'],
        },
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
