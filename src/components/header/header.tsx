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
      {!walletsReady && <span>Loading...</span>}
      {walletsReady && authenticated && <span>{label(shorten(wallets[0].address))}</span>}
      {walletsReady && <Button onClick={authenticated ? logout : login}>{authenticated ? "Logout" : "Login"}</Button>}
    </div>
  )
}