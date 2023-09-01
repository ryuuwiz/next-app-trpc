import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return {
      message: "Hello, World!",
    };
  }),
  greeting: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `Hello ${opts.input.name}`,
      };
    }),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
