import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taiwind from 'tailwindcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwind() ,react()],
})
