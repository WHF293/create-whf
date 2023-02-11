import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCss from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'build'
  return {
    plugins: [
      vue(),
      WindiCss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
      // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: 9527,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (url) => url.replace('/api', ''),
        },
      },
    },
    build: {
      outDir: 'dist',
      minify: isDev ? 'terser' : 'esbuild',
      sourcemap: isDev ? true : false,
      terserOptions: {
        compress: {
          drop_console: !isDev,
          drop_debugger: !isDev,
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            modifyVars: {
              // 'primary-color': '#1DA57A',
            },
          },
        },
      },
    },
  }
})
