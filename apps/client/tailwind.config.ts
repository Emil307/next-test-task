import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import baseConfig from '@next-test-task/tailwind-config/web';

export default {
    content: [...baseConfig.content, '../../packages/ui/**/*.{ts,tsx}'],
    presets: [baseConfig],
    theme: {
        extend: {
            fontFamily: {
                'noto-sans': ['var(--font-noto-sans)', ...fontFamily.sans],
            },
        },
    },
} satisfies Config;
