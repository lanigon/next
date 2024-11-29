import { WagmiProvider } from 'wagmi'
import { config } from '@/wagmi'
import React from 'react'

const Web3Provider = ({ children }:React.PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  )
}

export default Web3Provider