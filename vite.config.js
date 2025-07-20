import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/My-portfolio-website/', 
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.JPG']
})
