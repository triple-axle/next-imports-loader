const path = require(`path`)

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: `latest`,
    sourceType: `module`,
  },
  globals: {
    Atomics: `readonly`,
    SharedArrayBuffer: `readonly`,
  },
  plugins: [
    `unused-imports`,
    `no-smart-quotes`,
    `import`,
    `import-quotes`,
    `jsx-a11y`,
    `react`,
    `react-hooks`,
    `@typescript-eslint/eslint-plugin`,
    `prettier`,
  ],
  extends: [
    `next/core-web-vitals`,
    `airbnb`,
    `eslint-config-prettier`,
    `plugin:@typescript-eslint/recommended`,
    `prettier`,
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/no-explicit-any': `off`,
    '@typescript-eslint/no-shadow': [`error`],
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/no-useless-constructor': [`error`],
    '@typescript-eslint/no-var-requires': `off`,
    '@typescript-eslint/quotes': [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    camelcase: `off`,
    'import-quotes/import-quotes': [1, `single`],
    'import/extensions': [
      `error`,
      `ignorePackages`,
      {
        js: `never`,
        jsx: `never`,
        ts: `never`,
        tsx: `never`,
      },
    ],
    'import/no-relative-packages': `error`,
    'import/order': `off`,
    'import/prefer-default-export': `off`,
    'jsx-a11y/anchor-is-valid': [
      `error`,
      {
        aspects: [`invalidHref`, `preferButton`],
        components: [`Link`],
        specialLink: [`hrefLeft`, `hrefRight`],
      },
    ],
    'no-await-in-loop': `off`,
    'no-param-reassign': [
      `error`,
      {
        ignorePropertyModificationsFor: [`state`],
        props: true,
      },
    ],
    'no-restricted-imports': [
      `error`,
      {
        patterns: [
          {
            group: [`../*`],
            message: `Usage of relative parent imports is not allowed.`,
          },
          {
            group: [`./*`],
            message: `Usage of relative current dir imports is not allowed.`,
          },
        ],
      },
    ],
    'no-restricted-syntax': [`error`, `ForInStatement`, `LabeledStatement`, `WithStatement`],
    'no-shadow': `off`,
    'no-smart-quotes/no-smart-quotes': `error`,
    'no-use-before-define': [0],
    'no-useless-constructor': `off`,
    'prettier/prettier': `error`,
    quotes: `off`,
    'react/jsx-filename-extension': `off`,
    'react/jsx-first-prop-new-line': [2, `multiline`],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: `multiline`,
      },
    ],
    'react/jsx-props-no-spreading': `off`,
    'react/no-unused-prop-types': `off`,
    'react/prop-types': `off`,
    'react/react-in-jsx-scope': `off`,
    'react/require-default-props': `off`,
    'unused-imports/no-unused-imports': `error`,
    'react/function-component-definition': `off`,
  },
  overrides: [
    {
      files: [`src/util/permits/resolvers/*.ts`, `src/util/permits/limits/*.ts`, `src/migrations/*.ts`],
      rules: {
        'class-methods-use-this': `off`,
        '@typescript-eslint/no-non-null-assertion': `off`,
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [`.ts`, `.tsx`],
    },
    'import/resolver': {
      typescript: {
        project: `.`,
      },
      alias: {
        map: [
          [`@`, path.join(__dirname, `./src`)],
          [`~`, path.join(__dirname)],
        ],
        extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `.json`],
      },
    },
    react: {
      version: `detect`,
    },
  },
}
