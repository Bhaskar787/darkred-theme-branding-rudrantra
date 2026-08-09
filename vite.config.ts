import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/models': path.resolve(__dirname, 'src/models'),
      '@/controllers': path.resolve(__dirname, 'src/controllers'),
      '@/views': path.resolve(__dirname, 'src/views'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/components': path.resolve(__dirname, 'src/views/components'),
      '@/data': path.resolve(__dirname, 'src/models/data'),
      '@/context': path.resolve(__dirname, 'src/models/context'),
      '@/hooks': path.resolve(__dirname, 'src/controllers/hooks'),
      '@/lib': path.resolve(__dirname, 'src/utils'),
      '@/pages': path.resolve(__dirname, 'src/views/pages'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('@radix-ui')) {
            return 'vendor-radix';
          }
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'vendor-icons';
          }
          return 'vendor';
        },
      },
    },
  },
  server: {
    port: 5173,
  },
});