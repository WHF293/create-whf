import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCss from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
// 安装不同组件库导入对应的 resolver 即可
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'build'
  return {
    plugins: [
      vue(),
      WindiCss(),
      // 自动导入
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', 'pinia', 'vue-i18n'],
        dts: './src/typings/auto-import.d.ts',
      }),
      // 组件库按需导入
      // Components({
      //   resolvers: [AntDesignVueResolver()],
      //   dts: './src/typings/components.d.ts',
      // }),
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
      minify: !isDev ? 'terser' : 'esbuild',
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
