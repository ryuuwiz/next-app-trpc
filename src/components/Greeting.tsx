'use client'

import { trpc } from "@/utils/client"

export function Greeting() {
  const greeting = trpc.greeting.useQuery({ name: "TRPC" })

  return (
    <>
      <p>Client:</p>
      {greeting.isLoading ?
        <p>Loading...</p> :
        greeting.data === undefined ?
          <p>You are not authenticated</p>
          :
          <div>
            <p>{greeting.data?.greeting}</p>
            <p>{greeting.data?.secret}</p>
          </div>
      }
    </>
  )
}