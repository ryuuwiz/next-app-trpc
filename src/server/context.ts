import {
  SignedInAuthObject,
  SignedOutAuthObject,
  auth,
} from "@clerk/nextjs/server";
import { inferAsyncReturnType } from "@trpc/server";

interface AuthContext {
  userAuth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ userAuth }: AuthContext) => {
  return {
    userAuth,
  };
};

export const createContext = async () => {
  return await createContextInner({ userAuth: auth() });
};

export type Context = inferAsyncReturnType<typeof createContext>;
