import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // 入口文件
  entries: ['src/index'],
  // 每次打包先清空 dist 目录
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      // 开启压缩
      minify: true,
    },
  },
  alias: {
    // we can always use non-transpiled code since we support 14.18.0+
    prompts: 'prompts/lib/index.js',
  },
})
