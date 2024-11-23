"use client";

import { useState, useEffect } from 'react';
import { useConnection, useActiveAddress } from 'arweave-wallet-kit'; // Import hooks
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BarLoader } from 'react-spinners';
import { Button } from '@/components/Button/Button'; // Import your custom button component

export const ConnectWalletButton = () => { //Rename to clearly indicate purpose.
  const { connect, disconnect, connected } = useConnection();
  const activeAddress = useActiveAddress(); // Use the hook for the address
  const [connecting, setConnecting] = useState(false);

  const handleConnect = async () => {
      setConnecting(true)

      try {
          await connect()
      } catch (error) {
          console.error("Error connecting", error)
      } finally {
        setConnecting(false)
      }

  };

  const handleDisconnect = () => {
    disconnect();
  };


if (connected && activeAddress) { // Check both connected state and address
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="text-white cursor-pointer border rounded-2xl px-2 py-1 hover:bg-gray-600">
                        {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{activeAddress}</p>
                    <Button onClick={handleDisconnect} type="button">Disconnect</Button>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );


} else if (connecting) {
    return (
        <Button disabled>
            <BarLoader color="#fff" />
        </Button>
    )

} else {
    return <Button onClick={handleConnect}>Connect Wallet</Button>;
}

};
