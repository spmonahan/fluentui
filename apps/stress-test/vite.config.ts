import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
        v8SimpleStress: resolve(root, 'v8', 'simple-stress', 'index.html'),
        v9SimpleStress: resolve(root, 'v9', 'simple-stress', 'index.html'),
        wcSimpleStress: resolve(root, 'wc', 'simple-stress', 'index.html'),
      },
    },
    sourcemap: true,
  },
});
