/**
 * @fileoverview Shared standard for the Line-Up FE
 * @author Michael Strutt
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: {
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@nx/react'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react', '@tanstack/query'],
      ignorePatterns: ['!**/*'],
      overrides: [
        {
          files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
          extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
          rules: {
            '@tanstack/query/exhaustive-deps': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
            '@typescript-eslint/no-unused-vars': [
              'error',
              {
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
              },
            ],
            'no-control-regex': 'off',
            'react-hooks/rules-of-hooks': 'warn',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-useless-fragment': 'off',
          },
        },
        {
          files: ['*.ts', '*.tsx'],
          rules: {},
        },
        {
          files: ['*.js', '*.jsx'],
          rules: {},
        },
      ],
    },
  },
  rules: {},
}
