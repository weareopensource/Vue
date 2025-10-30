import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import viteCompression from 'vite-plugin-compression';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load config dynamically
const loadConfig = () => {
  const configPath = resolve(__dirname, './src/config/index.cjs');
  if (existsSync(configPath)) {
    try {
      // Clear cache to get fresh config
      delete require.cache[require.resolve(configPath)];
      return require(configPath);
    } catch (error) {
      console.warn('Could not load config, using defaults:', error.message);
      return { port: 8080 };
    }
  }
  return { port: 8080 };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = loadConfig();

  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // Support for runtime template compilation
            isCustomElement: (tag) => tag.startsWith('ion-'),
          },
        },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
      vuetify({
        autoImport: true,
      }),
      // Brotli compression for production
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginFile: false,
      }),
    ],

    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },

    server: {
      port: config.port || 8080,
      strictPort: false,
      // Uncomment to proxy API requests
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:3000',
      //     changeOrigin: true,
      //   },
      // },
    },

    preview: {
      port: config.port || 8080,
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: mode !== 'production',
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'vuex'],
            'vuetify-vendor': ['vuetify'],
            'utils-vendor': ['axios', 'lodash', 'moment'],
          },
        },
      },
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
    },

    optimizeDeps: {
      include: ['vue', 'vue-router', 'vuex', 'vuetify', 'axios', 'lodash', 'moment', 'marked', 'md5', 'aos'],
      exclude: ['./src/config/index.cjs'],
    },
  };
});
