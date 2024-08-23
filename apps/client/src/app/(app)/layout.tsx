import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@next-test-task/ui';

import { Providers } from '../(_providers)';

import '~/styles/globals.scss';

export const metadata: Metadata = {
    applicationName: 'Next-test-task',
    title: 'Next-test-task',
    description: 'Next-test-task',
    icons: [
        { rel: 'icon', url: '/favicon.ico' },
        { rel: 'manifest', url: '/manifest.json' },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon-16x16.png',
        },
    ],
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: 'variable',
    variable: '--font-inter',
});

export default ({ children }: React.PropsWithChildren) => {
    return (
        <html lang={'ru'} dir={'ltr'} suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-dvh w-full min-w-full scroll-smooth bg-white',
                    'font-inter text-black antialiased',
                    inter.variable
                )}
                style={{
                    scrollbarGutter: 'stable',
                }}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};
