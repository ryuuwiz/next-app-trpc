import { Greeting } from "@/components/Greeting";
import { serverClient } from "@/utils/serverClient"
import { UserButton, SignInButton, auth, SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const hello = await serverClient.hello();
  const { userId } = auth();

  return (
    <main className="max-w-2xl mx-auto mt-5">
      <div>
        <UserButton afterSignOutUrl="/" />
        {
          userId ? <SignOutButton /> : <SignInButton mode="modal" />
        }
      </div>
      <div>
        <p>Server: {hello.message}</p>
        <Greeting />
      </div>
    </main>
  )
}
