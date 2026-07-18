import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

export default [
   js.configs.recommended,

   // Ігноруємо автогенероване
   {
      ignores: ['dist/**', 'build/**', 'node_modules/**', '.vite/**'],
   },

   // Node.js файли (конфіги, скрипти)
   {
      files: ['vite.config.js', 'vite.config.ts', 'scripts/**/*.js', 'eslint.config.js'],
      languageOptions: {
         globals: {
            ...globals.node,
         },
      },
   },

   // React / TSX / JSX
   {
      files: ['**/*.{js,jsx,ts,tsx}'],
      languageOptions: {
         parser: tsParser,
         parserOptions: {
            ecmaFeatures: { jsx: true },
            sourceType: 'module',
         },
         globals: {
            ...globals.browser,
         },
      },
      plugins: {
         react,
         'react-hooks': reactHooks,
         'jsx-a11y': jsxA11y,
      },
      rules: {
         ...react.configs.flat.recommended.rules,
         ...react.configs.flat['jsx-runtime'].rules,
         ...reactHooks.configs['recommended-latest'].rules,
         ...jsxA11y.configs.recommended.rules,

         'react/prop-types': 'off',
         'no-unused-vars': 'warn',
         'no-undef': 'warn',
         'no-console': 'warn',
         eqeqeq: ['error', 'always'],
         'no-var': 'error',
         'prefer-const': 'warn',
      },
      settings: {
         react: { version: 'detect' },
      },
   },
]
