import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        v8inlook: resolve(root, 'v8', 'inlook', 'index.html'),
        v9inlook: resolve(root, 'v9', 'inlook', 'index.html'),
      },
      plugins: [
        alias({
          entries: [{ find: 'react-dom', replacement: 'react-dom/profiling' }],
        }),
      ],
    },
    sourcemap: true,
  },
});
