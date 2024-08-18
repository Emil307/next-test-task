// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createEnv } from '@t3-oss/env-nextjs';

import { env as authEnv } from '@next-test-task/auth/env';
import { env as dbEnv } from '@next-test-task/db/env';
import { env as httpEnv } from '@next-test-task/http/env';

export const env = createEnv({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    extends: [authEnv, dbEnv, httpEnv] as any,
    server: {},
    client: {},
    shared: {},
    experimental__runtimeEnv: {},
    skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === 'lint',
});
