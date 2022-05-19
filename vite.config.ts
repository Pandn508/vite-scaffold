import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    envDir: './viteEnv',
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        coms: resolve(__dirname, 'src/components'),
      },
      extensions: ['.js', '.json', '.ts', '.vue'],
    },
  }
})
