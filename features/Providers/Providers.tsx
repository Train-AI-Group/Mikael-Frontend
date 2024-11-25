"use client"

import { ArweaveWalletKit } from "arweave-wallet-kit"
import { ReactNode } from "react"
import { Toaster } from "@/components/ui/toaster";

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
      <ArweaveWalletKit
        config={{
          permissions: ["ACCESS_ADDRESS"],
          ensurePermissions: true,
          appInfo: { name: "Train AI", logo: "/img/logo.svg" },
        }}
        theme={{
          displayTheme: "light",
          accent: { r: 0, g: 122, b: 255 },
          radius: "minimal",
        }}
      >
        <Toaster />
        {children}
      </ArweaveWalletKit>
  )
}
