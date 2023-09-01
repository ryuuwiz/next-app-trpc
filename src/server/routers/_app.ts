import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return {
      message: "Hello, World!",
    };
  }),
  greeting: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return {
        greeting: `Hello ${input.name}`,
        secret: ctx.userAuth?.userId,
      };
    }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
