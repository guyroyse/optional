import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    isolate: false,
    setupFiles: './vitest.setup.ts'
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './lib')
    }
  }
})
