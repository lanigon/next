import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const key = process.env.NEXT_PUBLIC_RPC_KEY

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${key}`),
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${key}`),
  },
})