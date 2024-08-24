import { developersRouter } from './router/developers';
import { exampleRouter } from './router/example';
import { googleRouter } from './router/google';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
    example: exampleRouter,
    google: googleRouter,
    developers: developersRouter,
)};

export type AppRouter = typeof appRouter;
