'use client'

import BackButton from '@/components/utils/backbutton'
import { mainnet } from 'wagmi/chains'

export default function Game(){
  return(
    <div>
      <BackButton />
      <h1>data</h1>
      <p>{mainnet.id}</p>
    </div>
  )
}
