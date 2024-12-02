'use client'

import { WagmiProvider } from 'wagmi'
import React from 'react'
import { http } from 'wagmi'
import { mainnet, sepolia } from 'viem/chains'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'; 
import {PrivyProvider, type PrivyClientConfig} from '@privy-io/react-auth';
import {createConfig} from '@privy-io/wagmi';

const Web3Provider = ({ children }:React.PropsWithChildren) => {  
  const queryClient = new QueryClient(); 
  const key = process.env.NEXT_PUBLIC_RPC_KEY
  const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(`https://mainnet.infura.io/v3/${key}`),
      [sepolia.id]: http(`https://sepolia.infura.io/v3/${key}`),
    },
  })
  const privyConfig: PrivyClientConfig = {
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
      requireUserPasswordOnCreate: true,
      noPromptOnSignature: false,
    },
    loginMethods: ['wallet', 'email', 'sms'],
    appearance: {
      showWalletLoginFirst: true,
    },
  };
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}

export default Web3Provider