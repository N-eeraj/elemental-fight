import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@screens' : path.resolve(__dirname, './src/components/screens'),
      '@game' : path.resolve(__dirname, './src/components/game'),
      '@styles' : path.resolve(__dirname, './src/styles'),
      '@utils' : path.resolve(__dirname, './src/utils'),
    }
  }
})
