import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  shortcuts: {
    flex_center: 'flex justify-center items-center',
    flex_end: 'flex flex-end',
    flex_between: 'flex justify-between',
    items_center: 'flex items-center',
    justify_center: 'flex justify-center'
  }
})