/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'python-language',
      fileName: 'python-language',
    },
  },
  test: {
    globals: true,
  },
})
