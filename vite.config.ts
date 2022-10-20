import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
    },
    resolve: {
        alias: [
            { 
                find: '@',
                replacement: path.resolve(__dirname, './src'),
            }
        ],
    },
    plugins: [
        preact(),
        eslint()
    ],
});
