'use client'

import { WagmiProvider } from 'wagmi'
import React from 'react'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { ReactNode, useEffect } from 'react'
import { MiniKit } from '@worldcoin/minikit-js'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'; 

const Web3Provider = ({ children }:{children: ReactNode}) => {
  const key = process.env.NEXT_PUBLIC_RPC_KEY
  const queryClient = new QueryClient()
  const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(`https://mainnet.infura.io/v3/${key}`),
      [sepolia.id]: http(`https://sepolia.infura.io/v3/${key}`),
    },
  })
  const miniapp_id = process.env.NEXT_PUBLIC_MINIAPP_ID
  useEffect(() => {
		// Passing appId in the install is optional 
		// but allows you to access it later via `window.MiniKit.appId`
		MiniKit.install(miniapp_id) 
	}, [miniapp_id])

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        {children}
      </WagmiProvider>
    </QueryClientProvider>
  )
}

export default Web3Provider