import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // SEO-friendly: clean URLs without hash routing
    rollupOptions: {
      output: {
        // Clean chunk names for better debugging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Source maps for better error tracking
    sourcemap: false,
    // Minify for production
    minify: 'esbuild',
    // Add project metadata
    metafile: true,
  },
  // SEO: Preload hints
  head: {
    title: 'Lachi - Authentic Nepali Flavors in Every Bite!',
    meta: [
      { name: 'description', content: 'Experience authentic Nepali cuisine at Lachi. Enjoy traditional dishes like momo, thukpa, chowmein, and more.' },
    ],
  },
})
