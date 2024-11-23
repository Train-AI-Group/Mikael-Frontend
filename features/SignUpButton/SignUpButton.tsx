"use client"

import { Button } from "@/components/Button/Button"
import { useConnection } from "arweave-wallet-kit"

export const SignUpButton = () => {
  const { connected, connect, disconnect } = useConnection()

  return <Button onClick={connected ? disconnect : connect}>Sign Up</Button>
}
