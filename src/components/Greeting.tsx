'use client'

import { trpc } from "@/utils/client"

export function Greeting() {
  const greeting = trpc.greeting.useQuery({ name: "TRPC" })

  return (
    <>
      <p>Client:</p>
      {greeting.isLoading ?
        <p>Loading...</p> :
        <p>{greeting.data?.greeting}</p>
      }
    </>
  )
}