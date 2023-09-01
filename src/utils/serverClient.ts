import { appRouter } from "@/server/routers/_app";
import { httpBatchLink } from "@trpc/client";
import { getBaseUrl } from "./getBaseUrl";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});
