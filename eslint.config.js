import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  // Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.husky/**', '**/*.min.js', 'src/config/index.js', 'src/config/index.cjs'],
  },
  // Base configurations
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  // Global rules
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  // Browser source files
  {
    files: ['src/**/*.{js,vue}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
  },
  // CommonJS files (configs, legacy files)
  {
    files: ['**/*.cjs', '**/commitlint.config.js', 'vue.config.js', 'jest.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
  // Cypress E2E tests
  {
    files: ['tests/e2e/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
  },
  // Vite/Vitest configs
  {
    files: ['vite.config.js', 'vitest.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
];
