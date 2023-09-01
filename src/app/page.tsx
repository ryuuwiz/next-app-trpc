import { Greeting } from "@/components/Greeting";
import { serverClient } from "@/utils/serverClient"

export default async function Home() {
  const hello = await serverClient.hello();

  return (
    <main className="max-w-2xl mx-auto mt-5">
      <p>Server: {hello.message}</p>
      <Greeting />
    </main>
  )
}
