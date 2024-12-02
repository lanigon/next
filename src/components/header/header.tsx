'use client'

import {usePrivy, useWallets} from '@privy-io/react-auth';
import { Button } from '../ui/button';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { shorten } from '@/lib/utils';

export default function Header() {
  const {ready, authenticated, user, login, logout} = usePrivy();
  const {wallets, ready: walletsReady} = useWallets();
  const {address, isConnected, isConnecting, isDisconnected} = useAccount()
  const [add, setadd] = useState(365)
  return (
    <div>
      {walletsReady && <span>{shorten(wallets[0].address)}</span>}
      {walletsReady && <Button onClick={authenticated ? logout : login}>{authenticated ? "Logout" : "Login"}</Button>}
    </div>
  )
}