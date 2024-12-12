'use client'

import {usePrivy, useWallets} from '@privy-io/react-auth';
import { Button } from '../ui/button';
import { shorten } from '@/lib/utils';

const label = (element: string):JSX.Element=>{
  return (
    <div className='bg-slate-100 rounded-lg border p-2'>
      {element}
    </div>
  )
}

export default function Header() {
  const {authenticated, login, logout} = usePrivy();
  const {wallets, ready: walletsReady} = useWallets();
  return (
    <div className='flex space-x-6 items-center'>
      {!walletsReady ? (
      <div className='flex items-center space-x-2'>
        <div className='spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full'></div>
        <span>Loading Wallet...</span>
      </div>
      ) : (
        <>
          {authenticated && <span>{label(shorten(wallets[0].address))}</span>}
          <Button onClick={authenticated ? logout : login}>
            {authenticated ? "Logout" : "Login"}
          </Button>
        </>
      )}
    </div>
  )
}