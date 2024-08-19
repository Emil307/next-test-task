import { z } from 'zod';

export const createPostSchema = z.object({
    title: z.string().min(6),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
