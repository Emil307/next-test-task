import { createTRPCRouter, publicProcedure } from '../trpc';

let developers = 0;

export const developersRouter = createTRPCRouter({
    addDeveloper: publicProcedure.query(async () => {
        developers++;
        await new Promise(resolve => setTimeout(resolve, 100));
        return `${developers}`;
    }),
});
