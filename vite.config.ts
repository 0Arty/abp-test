import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
         '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
         '@features': fileURLToPath(new URL('./src/features', import.meta.url)),

         '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
         '@api': fileURLToPath(new URL('./src/shared/api', import.meta.url)),
         '@config': fileURLToPath(
            new URL('./src/shared/config', import.meta.url)
         ),
         '@hooks': fileURLToPath(
            new URL('./src/shared/hooks', import.meta.url)
         ),

         '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
         '@images': fileURLToPath(
            new URL('./src/assets/images', import.meta.url)
         ),
         '@icons': fileURLToPath(
            new URL('./src/assets/icons', import.meta.url)
         ),

         '@styles': fileURLToPath(new URL('./src/app/styles', import.meta.url)),
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@use "@styles/helpers/_index.scss" as *;`,
         },
      },
   },

   server: {
      port: 3000,
      open: true,
   },

   build: {
      outDir: 'dist',
      sourcemap: false,
   },
})
