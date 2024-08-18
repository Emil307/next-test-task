import baseConfig from '@next-test-task/eslint-config/base';
import reactConfig from '@next-test-task/eslint-config/react';

/** @type {import('typescript-eslint').Config} */
export default [
    {
        ignores: [],
    },
    ...baseConfig,
    ...reactConfig,
];
