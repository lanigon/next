'use client'

import { WagmiProvider } from 'wagmi'
import React from 'react'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const Web3Provider = ({ children }:React.PropsWithChildren) => {
  const key = process.env.NEXT_PUBLIC_RPC_KEY

  const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${key}`),
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${key}`),
  },
  })

  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  )
}

export default Web3Provider