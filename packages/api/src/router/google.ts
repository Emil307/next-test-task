import { z } from 'zod';

import { createPostSchema } from '@next-test-task/schema';

import { adminProcedure, createTRPCRouter, publicProcedure } from '../trpc';

export const googleRouter = createTRPCRouter({
    greeting: publicProcedure.input(z.string()).query(async ({ input }) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return `Hello, ${input}!` as const;
    }),
    createPost: adminProcedure.input(createPostSchema).mutation(async ({ ctx, input }) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        return `Post ${input.title} created by ${ctx.session.user.role}!`;
    }),
});
