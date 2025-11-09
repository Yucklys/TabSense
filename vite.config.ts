import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        {
          src: 'public/TabIt*.png',
          dest: '.',
        }
      ]
    })
  ],
  build: {
    target: 'esnext',
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
});
