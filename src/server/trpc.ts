import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.userAuth.userId) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      userAuth: ctx.userAuth,
    },
  });
});

// Base router and procedure helpers
export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
// export this procedure to be used anywhere in your application
export const protectedProcedure = t.procedure.use(isAuthed);
