import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  preview: {
   port: 8080
  },
  server: {
   port: 8080,
   host: true,
   origin: "http://0.0.0.0:8080"
  },
})
