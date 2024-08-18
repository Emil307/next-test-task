// @ts-nocheck

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

import { env as apiEnv } from '@next-test-task/api/env';
import { env as authEnv } from '@next-test-task/auth/env';
import { env as dbEnv } from '@next-test-task/db/env';
import { env as httpEnv } from '@next-test-task/http/env';
import { env as loggerEnv } from '@next-test-task/logger/env';

export const env = createEnv({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    extends: [apiEnv, authEnv, dbEnv, httpEnv, loggerEnv] as any,
    server: {},
    client: {
        NEXT_PUBLIC_QUERY_DEVTOOLS: z
            .enum(['true', 'false', ''])
            .optional()
            .transform(s => s === 'true')
            .pipe(z.boolean()),
    },
    shared: {
        NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
        DOCKER: z
            .enum(['true', 'false', ''])
            .optional()
            .transform(s => s === 'true')
            .pipe(z.boolean()),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_QUERY_DEVTOOLS: process.env.NEXT_PUBLIC_QUERY_DEVTOOLS,
    },
    skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === 'lint',
});
