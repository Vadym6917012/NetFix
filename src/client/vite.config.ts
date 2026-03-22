import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://localhost:7286/api',
        changeOrigin: true,
        secure: false, // self-signed cert у .NET dev
      },
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
