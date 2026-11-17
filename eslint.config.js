import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'

export default [
  { ignores: ['build/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // componentes usados só em JSX (<Home />) contam como usados: nomes com inicial maiúscula
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['**/*.test.{js,jsx}', 'src/setupTests.js'],
    ...testingLibrary.configs['flat/react'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.vitest },
    },
  },
]
