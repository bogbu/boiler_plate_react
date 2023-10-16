/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        globals: true,
        setupFiles: 'src/setupTests.js',
        environment: 'happy-dom',
    },
})
