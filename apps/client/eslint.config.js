import baseConfig from '@next-test-task/eslint-config/base';
import nextjsConfig from '@next-test-task/eslint-config/nextjs';
import reactConfig from '@next-test-task/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
    {
        ignores: ['.next/**', 'public/**'],
    },
    ...baseConfig,
    ...reactConfig,
    ...nextjsConfig,
];
